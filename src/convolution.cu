/*  Copyright (c) Chris Choy (chrischoy@ai.stanford.edu).
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of
 *  this software and associated documentation files (the "Software"), to deal in
 *  the Software without restriction, including without limitation the rights to
 *  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 *  of the Software, and to permit persons to whom the Software is furnished to do
 *  so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 *  Please cite "4D Spatio-Temporal ConvNets: Minkowski Convolutional Neural
 *  Networks", CVPR'19 (https://arxiv.org/abs/1904.08755) if you use any part
 *  of the code.
 */
#ifndef GPU_CONVOLUTION
#define GPU_CONVOLUTION

#include <iostream>

// Use the torch for GPU memory management. Thrust resize gives segfulat during
// debugging -g #include <torch/extension.h>

#include "convolution.cuh"

// Given a row-major matrix, use the mapping to extract a row major order matrix
template <typename Dtype, typename Itype>
__global__ void copy_mapped_input(const int n, const int nchannel,
                                  const Dtype *in_feat, Dtype *out_feat,
                                  const Itype *map) {
  CUDA_KERNEL_LOOP(index, n) {
    const int row = index / nchannel;
    const int col = index % nchannel;
    out_feat[index] = in_feat[map[row] * nchannel + col];
  }
}

template <typename Dtype, typename Itype>
__global__ void add_mapped_output_tr(const int n, const Dtype *in_feat,
                                     const int in_nchannel, Dtype *out_feat,
                                     const int out_nchannel, const Itype *map) {
  CUDA_KERNEL_LOOP(index, n) {
    const int row = index % in_nchannel;
    const int col = index / in_nchannel;
    atomicAdd(&out_feat[map[row] * out_nchannel + col], in_feat[index]);
  }
}

// Given each output, get an input feature for each corresponding kernel weight
// and add the output in place
template <typename Dtype, typename Itype>
__global__ void inplace_convolution(const int n, const Dtype *in_feat,
                                    const int in_nchannel, Dtype *out_feat,
                                    const int out_nchannel, const Dtype *kernel,
                                    const Itype *in_map, const Itype *out_map) {
  // n = out_nchannel * out_nrows
  // The kernel computes one output scalar for each output index and each output
  // channel.
  CUDA_KERNEL_LOOP(index, n) {
    const int out_ch = index % out_nchannel;
    const int out_row = index / out_nchannel;
    // Pytorch tensors in C-ordering with in_nchannels x out_nchannels
    Dtype tmp = 0.0;
    const Dtype *curr_kernel = kernel + out_ch;
    const Dtype *curr_in_feat = in_feat + in_map[out_row] * in_nchannel;
    for (int in_ch = 0; in_ch < in_nchannel; in_ch++) {
      tmp += (*curr_kernel) * (*curr_in_feat);
      curr_kernel += out_nchannel;
      curr_in_feat += 1;
    }
    // Done independently, no need for atomicAdd
    out_feat[out_map[out_row] * out_nchannel + out_ch] += tmp;
  }
}

/**
 * Matrix multiplication (CUDA Kernel) on the device: C = A * B
 * wA is A's width and wB is B's width
 */
template <typename Dtype, typename Itype, int BLOCK_SIZE>
__global__ void matmul(const Dtype *A, const int wA, const int hA,
                       const Dtype *B, const int wB, const int hB, Dtype *C,
                       const Itype *in_map, const Itype *out_map) {
  // Use in_feat as A and kernel as B

  // Block index
  const int bx = blockIdx.x;
  const int by = blockIdx.y;

  // Thread index
  const int tx = threadIdx.x;
  const int ty = threadIdx.y;

  // Coordinate. x is for rows, y is for columns.
  const int x = BLOCK_SIZE * bx + tx;
  const int y = BLOCK_SIZE * by + ty;

  // Csub is used to store the element of the block sub-matrix
  // that is computed by the thread
  Dtype Csub = 0;

  const Itype in_row = y < hA ? in_map[y] : 0;
  const Itype out_row = y < hA ? out_map[y] : 0;

  // Loop over all the sub-matrices of A and B
  // required to compute the block sub-matrix
  for (int s = 0; s < wA; s += BLOCK_SIZE) {
    // Declaration of the shared memory array As used to
    // store the sub-matrix of A
    __shared__ Dtype As[BLOCK_SIZE][BLOCK_SIZE];

    // Declaration of the shared memory array Bs used to
    // store the sub-matrix of B
    __shared__ Dtype Bs[BLOCK_SIZE][BLOCK_SIZE];

    // Load the matrices from device memory
    // to shared memory; each thread loads
    // one element of each matrix
    As[ty][tx] = ((s + tx) < wA && y < hA) ? A[wA * in_row + s + tx] : 0;
    Bs[ty][tx] = ((s + ty) < hB && x < wB) ? B[wB * (s + ty) + x] : 0;

    // Synchronize to make sure the matrices are loaded
    __syncthreads();

    // Multiply the two matrices together;
    // each thread computes one element
    // of the block sub-matrix
#pragma unroll
    for (int k = 0; k < BLOCK_SIZE; ++k) {
      Csub += As[ty][k] * Bs[k][tx];
    }

    // Synchronize to make sure that the preceding
    // computation is done before loading two new
    // sub-matrices of A and B in the next iteration
    __syncthreads();
  }

  // Write the block sub-matrix to device memory;
  // each thread writes one element
  if (y < hA && x < wB)
    C[wB * out_row + x] += Csub;
  // TODO: atomicAdd(&C[wB * out_row + x], Csub); // For conv transpose, it
  // might fail due to overlapping outputs
}

/**
 * Matrix multiplication (CUDA Kernel) on the device: C = A * B^T, E = D^T * A
 * wA is A's width and wB is B's width
 *
 *                +---+
 *                |B^T|
 *            +-------+
 *            |   |   |
 *            | A | C |
 *            |   |   |
 *            |   |   |
 * +------------------+
 * |    D^T   | E |
 * +----------+---+
 *
 */
template <typename Dtype, typename Itype, int BLOCK_SIZE>
__global__ void matmul2(const Dtype *A, const int wA, const int hA,
                        const Dtype *B, const int wB, const int hB,
                        const Dtype *D, const int wD, const int hD, Dtype *C,
                        Dtype *E, const Itype *in_map, const Itype *out_map) {
  // Use grad_out_feat as A, transposed kernel weight as B, and in_feat as D

  // Block index
  const int bx = blockIdx.x;
  const int by = blockIdx.y;

  // Thread index
  const int tx = threadIdx.x;
  const int ty = threadIdx.y;

  // Coordinate. x is for rows, y is for columns.
  const int x = BLOCK_SIZE * bx + tx;
  const int y = BLOCK_SIZE * by + ty;

  const Itype in_row = y < hA ? in_map[y] : 0;
  const Itype out_row = y < hA ? out_map[y] : 0;

  // Csub is used to store the element of the block sub-matrix
  // that is computed by the thread
  Dtype Csub = 0;
  Dtype Esub = 0;

  // Declaration of the shared memory array As used to
  // store the sub-matrix of A
  __shared__ Dtype As[BLOCK_SIZE][BLOCK_SIZE];

  // Declaration of the shared memory array Bs used to
  // store the sub-matrix of B
  __shared__ Dtype BTs[BLOCK_SIZE][BLOCK_SIZE];

  // Declaration of the shared memory array Ds used to
  // store the sub-matrix of D
  __shared__ Dtype DTs[BLOCK_SIZE][BLOCK_SIZE];

  // For Ds = D^T[...:..., ...:...], use the transposed grid dimension for A
  DTs[ty][tx] = (x < wD && y < hD) ? D[wD * in_row + x] : 0;

  // Loop over all the sub-matrices of A and B
  // required to compute the block sub-matrix
  for (int s = 0; s < wA; s += BLOCK_SIZE) {
    // Load the matrices from device memory
    // to shared memory; each thread loads
    // one element of each matrix
    As[ty][tx] = ((s + tx) < wA && y < hA) ? A[wA * out_row + s + tx] : 0;

    // Transposed kernel
    BTs[ty][tx] = ((s + ty) < wB && x < hB) ? B[wB * x + s + ty] : 0;

    // Synchronize to make sure the matrices are loaded
    __syncthreads();

    // Multiply the two matrices together;
    // each thread computes one element
    // of the block sub-matrix
#pragma unroll
    for (int k = 0; k < BLOCK_SIZE; ++k) {
      Csub += As[ty][k] * BTs[k][tx];
    }

    // For Esub, reset to 0
    Esub = 0;
#pragma unroll
    for (int k = 0; k < BLOCK_SIZE; ++k) {
      Esub += DTs[k][ty] * As[k][tx];
    }

    // Synchronize to make sure that the preceding
    // computation is done before loading two new
    // sub-matrices of A and B in the next iteration
    __syncthreads();

    // For the E matrix which requires accmulation of multiple blocks, use
    // atomic addition. This can be replaced with a more sophisticaed reduction
    // algorithm.
    if ((bx * BLOCK_SIZE + ty) < wD && (s + tx) < wA)
      atomicAdd(&E[wA * (bx * BLOCK_SIZE + ty) + (s + tx)], Esub);
  }

  // Write the block sub-matrix to device memory;
  // each thread writes one element
  if (y < hA && x < hB)
    atomicAdd(&C[hB * in_row + x], Csub);
}

template <typename Dtype, typename Itype>
void ConvolutionForwardKernelGPU(
    const Dtype *d_in_feat, int in_nchannel, Dtype *d_out_feat,
    int out_nchannel, const Dtype *d_kernel,
    const std::vector<std::vector<Itype>> &in_maps,
    const std::vector<std::vector<Itype>> &out_maps, int out_nrows,
    cublasHandle_t cuhandle, cudaStream_t stream) {
  // For the in out buffer, use the pre allocated GPU memory space as thrust
  // resize gives segfault. Also initializing it with torch allows us to
  // allocate memory faster and efficiently.
  int kernel_volume, n_active_in_volume, num_kernels;
  Itype *d_in_map, *d_out_map;
  // Copy the in_map, out_map to GPU
  kernel_volume = in_maps.size();

  // Find the max_n_active fot memory allocation
  int max_n_active = -1;
  for (int k = 0; k < kernel_volume; k++)
    if (max_n_active < (int)(in_maps[k].size()))
      max_n_active = (int)(in_maps[k].size());

  // Create a large chunk of memory
  CUDA_CHECK(
      cudaMalloc((void **)&d_in_map, (2 * max_n_active) * sizeof(Itype)));
  d_out_map = d_in_map + max_n_active;

  // Iterate through each spatial kernel and get indices for in_map and out_map
  for (int k = 0; k < kernel_volume; k++) {
    n_active_in_volume = in_maps[k].size();
    if (n_active_in_volume == 0)
      continue;

    // Copy (*p_in_maps)[k] to GPU
    CUDA_CHECK(cudaMemcpy(d_in_map, in_maps[k].data(),
                          sizeof(Itype) * n_active_in_volume,
                          cudaMemcpyHostToDevice));
    CUDA_CHECK(cudaMemcpy(d_out_map, out_maps[k].data(),
                          sizeof(Itype) * n_active_in_volume,
                          cudaMemcpyHostToDevice));

    if (n_active_in_volume / SHARED_BLOCK_SIZE < 65536) {
      dim3 threads(SHARED_BLOCK_SIZE, SHARED_BLOCK_SIZE);
      dim3 grid((out_nchannel + threads.x - 1) / threads.x,
                (n_active_in_volume + threads.y - 1) / threads.y);
      matmul<Dtype, Itype, SHARED_BLOCK_SIZE><<<grid, threads, 0, stream>>>(
          d_in_feat, in_nchannel, n_active_in_volume,
          &d_kernel[k * in_nchannel * out_nchannel], out_nchannel, in_nchannel,
          d_out_feat, d_in_map, d_out_map);
    } else {
      num_kernels = out_nchannel * n_active_in_volume;
      inplace_convolution<Dtype, Itype>
          <<<GET_BLOCKS(num_kernels), CUDA_NUM_THREADS, 0, stream>>>(
              num_kernels, d_in_feat, in_nchannel, d_out_feat, out_nchannel,
              &d_kernel[k * in_nchannel * out_nchannel], d_in_map, d_out_map);
    }
  }

  cudaFree(d_in_map);
}

template void ConvolutionForwardKernelGPU<float, int32_t>(
    const float *d_in_feat, int in_nchannel, float *d_out_feat,
    int out_nchannel, const float *d_kernel,
    const std::vector<std::vector<int32_t>> &in_map,
    const std::vector<std::vector<int32_t>> &out_map, int out_nrows,
    cublasHandle_t cuhandle, cudaStream_t stream);

template void ConvolutionForwardKernelGPU<double, int32_t>(
    const double *d_in_feat, int in_nchannel, double *d_out_feat,
    int out_nchannel, const double *d_kernel,
    const std::vector<std::vector<int32_t>> &in_map,
    const std::vector<std::vector<int32_t>> &out_map, int out_nrows,
    cublasHandle_t cuhandle, cudaStream_t stream);

template <typename Dtype, typename Itype>
void ConvolutionBackwardKernelGPU(
    const Dtype *d_in_feat, Dtype *d_grad_in_feat, int in_nchannel,
    const Dtype *d_grad_out_feat, int out_nchannel, const Dtype *d_kernel,
    Dtype *d_grad_kernel, const std::vector<std::vector<Itype>> &in_maps,
    const std::vector<std::vector<Itype>> &out_maps, int out_nrows,
    cublasHandle_t cuhandle, cudaStream_t stream) {
  int kernel_volume, n_active_in_volume, num_kernels;
  Itype *d_in_map, *d_out_map;
  Dtype *d_in_buffer, *d_out_buffer;

  kernel_volume = in_maps.size();
  // Find the max_n_active fot memory allocation
  int max_n_active = -1;
  for (int k = 0; k < kernel_volume; k++)
    if (max_n_active < (int)(in_maps[k].size()))
      max_n_active = (int)(in_maps[k].size());

  CUDA_CHECK(cudaMalloc((void **)&d_in_map, 2 * max_n_active * sizeof(Itype)));
  d_out_map = d_in_map + max_n_active;

  // Use the old kernel when grid-y dim exceeds the limit.
  if (max_n_active / SHARED_BLOCK_SIZE >= 65536) {
    CUDA_CHECK(cudaMalloc((void **)&d_in_buffer, (in_nchannel + out_nchannel) *
                                                     max_n_active *
                                                     sizeof(Dtype)));
    d_out_buffer = d_in_buffer + in_nchannel * max_n_active;
  }

  for (int k = 0; k < kernel_volume; k++) {
    n_active_in_volume = in_maps[k].size();
    if (n_active_in_volume == 0)
      continue;

    // Copy (*p_in_maps)[k] to GPU
    CUDA_CHECK(cudaMemcpy(d_in_map, in_maps[k].data(),
                          sizeof(Itype) * n_active_in_volume,
                          cudaMemcpyHostToDevice));
    CUDA_CHECK(cudaMemcpy(d_out_map, out_maps[k].data(),
                          sizeof(Itype) * n_active_in_volume,
                          cudaMemcpyHostToDevice));

    if (n_active_in_volume / SHARED_BLOCK_SIZE < 65536) {
      dim3 threads(SHARED_BLOCK_SIZE, SHARED_BLOCK_SIZE);
      dim3 grid((in_nchannel + threads.x - 1) / threads.x,
                (n_active_in_volume + threads.y - 1) / threads.y);

      matmul2<Dtype, Itype, SHARED_BLOCK_SIZE><<<grid, threads, 0, stream>>>(
          d_grad_out_feat, out_nchannel, n_active_in_volume, // A
          &d_kernel[k * in_nchannel * out_nchannel], out_nchannel,
          in_nchannel,                                    // B
          d_in_feat, in_nchannel, n_active_in_volume,     // D
          d_grad_in_feat,                                 // C
          &d_grad_kernel[k * in_nchannel * out_nchannel], // E
          d_in_map, d_out_map);

    } else {
      // Copy (*p_in_maps)[k] to GPU
      num_kernels = out_nchannel * n_active_in_volume;

      // Copy gradients to the buffer
      copy_mapped_input<Dtype, Itype>
          <<<GET_BLOCKS(num_kernels), CUDA_NUM_THREADS, 0, stream>>>(
              num_kernels, out_nchannel, d_grad_out_feat, d_out_buffer,
              d_out_map);

      gpu_gemm<Dtype>(cuhandle, CblasNoTrans, CblasTrans,
                      in_nchannel,                               // M
                      n_active_in_volume,                        // N
                      out_nchannel,                              // K
                      (Dtype)1.,                                 // alpha
                      &d_kernel[k * in_nchannel * out_nchannel], // A
                      d_out_buffer,                              // B
                      (Dtype)0.,                                 // beta
                      d_in_buffer);                              // C

      // Accumulate gradients back to the input grad feat
      // Put it back to the correct index
      num_kernels = in_nchannel * n_active_in_volume;
      add_mapped_output_tr<Dtype>
          <<<GET_BLOCKS(num_kernels), CUDA_NUM_THREADS, 0, stream>>>(
              num_kernels,
              d_in_buffer,                 // In
              n_active_in_volume,          // In channel
              d_grad_in_feat, in_nchannel, // Out
              d_in_map);                   // Out channel

      // Compute gradient for kernel
      // Copy features to the buffer
      copy_mapped_input<Dtype, Itype>
          <<<GET_BLOCKS(num_kernels), CUDA_NUM_THREADS, 0, stream>>>(
              num_kernels, in_nchannel, d_in_feat, d_in_buffer, d_in_map);

      gpu_gemm<Dtype>(cuhandle, CblasTrans, CblasNoTrans,
                      in_nchannel,                                   // M
                      out_nchannel,                                  // N
                      n_active_in_volume,                            // K
                      1,                                             // alpha
                      d_in_buffer,                                   // A
                      d_out_buffer,                                  // B
                      1,                                             // beta
                      &d_grad_kernel[k * in_nchannel * out_nchannel] // C
      );
    }
  }
  cudaFree(d_in_map);

  // Free the mem allocated when grid-y dim exceeds the limit.
  if (max_n_active / SHARED_BLOCK_SIZE >= 65536)
    cudaFree(d_in_buffer);
}

template void ConvolutionBackwardKernelGPU<float, int32_t>(
    const float *d_in_feat, float *d_grad_in_feat, int in_nchannel,
    const float *d_grad_out_feat, int out_nchannel, const float *d_kernel,
    float *p_grad_kernel, const std::vector<std::vector<int32_t>> &in_map,
    const std::vector<std::vector<int32_t>> &out_map, int out_nrows,
    cublasHandle_t cuhandle, cudaStream_t stream);

template void ConvolutionBackwardKernelGPU<double, int32_t>(
    const double *d_in_feat, double *d_grad_in_feat, int in_nchannel,
    const double *d_grad_out_feat, int out_nchannel, const double *d_kernel,
    double *p_grad_kernel, const std::vector<std::vector<int32_t>> &in_map,
    const std::vector<std::vector<int32_t>> &out_map, int out_nrows,
    cublasHandle_t cuhandle, cudaStream_t stream);
#endif
