#ifndef GPU_BROADCAST
#define GPU_BROADCAST

#include <thrust/device_vector.h>
#include <thrust/host_vector.h>

#include "broadcast.cuh"
#include "math_functions.hpp"

template <class T> struct IsIntType { static const bool value = false; };

template <> struct IsIntType<int> { static const bool value = true; };

template <typename Dtype, typename Itype>
__global__ void
channelwise_addition(const int n, const int nchannel, const Dtype *d_glob_feat,
                     const Itype *d_sorted_map, Dtype *d_out_feat) {
  int row, ch_index;
  CUDA_KERNEL_LOOP(index, n) {
    ch_index = index % nchannel;
    row = d_sorted_map[index / nchannel];
    d_out_feat[index] += d_glob_feat[row * nchannel + ch_index];
  }
}

template <typename Dtype, typename Itype>
__global__ void channelwise_multiplication(const int n, const int nchannel,
                                           const Dtype *d_glob_feat,
                                           const Itype *d_sorted_out_map,
                                           Dtype *d_out_feat) {
  int row, ch_index;
  CUDA_KERNEL_LOOP(index, n) {
    ch_index = index % nchannel;
    row = d_sorted_out_map[index / nchannel];
    d_out_feat[index] *= d_glob_feat[row * nchannel + ch_index];
  }
}

template <typename Dtype, typename Itype>
__global__ void
channelwise_division(const int n, const int nchannel, const Dtype *d_glob_feat,
                     const Itype *d_sorted_out_map, Dtype *d_out_feat) {
  int row, ch_index;
  CUDA_KERNEL_LOOP(index, n) {
    ch_index = index % nchannel;
    row = d_sorted_out_map[index / nchannel];
    d_out_feat[index] /= d_glob_feat[row * nchannel + ch_index];
  }
}

template <typename Dtype>
__global__ void fill(const int n, Dtype *in_feat, Dtype val) {
  CUDA_KERNEL_LOOP(index, n) { in_feat[index] = val; }
}

template <typename Dtype, typename Itype>
void BroadcastForwardKernelGPU(
    const Dtype *d_in_feat, int in_nrows, const Dtype *d_in_feat_global,
    int in_nrows_global, Dtype *d_out_feat, int nchannel, int op,
    const std::vector<std::vector<Itype>> &sorted_in_map,
    const std::vector<std::vector<Itype>> &sorted_out_map,
    cusparseHandle_t cushandle, cudaStream_t stream) {
  thrust::device_vector<Itype> d_sorted_out_map;
  // Copy all in_feat to out_feat
  CUDA_CHECK(cudaMemcpy(d_out_feat, d_in_feat,
                        sizeof(Dtype) * nchannel * in_nrows,
                        cudaMemcpyDeviceToDevice));

  if (sorted_in_map.size() != 1)
    throw std::invalid_argument("InOut map must have one kernel for Broadcast");

  if (sorted_in_map[0].size() != in_nrows) {
    std::cout << "sorted_in_map[0].size(): " << sorted_in_map[0].size()
              << ", in_nrows: " << in_nrows << std::endl;
    throw std::invalid_argument("Invalid in_map");
  }

  THRUST_CHECK(d_sorted_out_map = sorted_out_map[0]);

  // To speed up, put switch outside for loops
  switch (op) {
  case 0: // +
    channelwise_addition<Dtype, Itype>
        <<<GET_BLOCKS(in_nrows * nchannel), CUDA_NUM_THREADS, 0, stream>>>(
            nchannel * in_nrows, nchannel, d_in_feat_global,
            thrust::raw_pointer_cast(d_sorted_out_map.data()), d_out_feat);
    break;
  case 1: // *
    channelwise_multiplication<Dtype, Itype>
        <<<GET_BLOCKS(in_nrows * nchannel), CUDA_NUM_THREADS, 0, stream>>>(
            nchannel * in_nrows, nchannel, d_in_feat_global,
            thrust::raw_pointer_cast(d_sorted_out_map.data()), d_out_feat);
    break;
  default:
    throw std::invalid_argument(Formatter() << "Operation not supported: "
                                            << std::to_string(op));
  }
}

template void BroadcastForwardKernelGPU<float, int32_t>(
    const float *d_in_feat, int in_nrows, const float *d_in_feat_global,
    int in_nrows_global, float *d_out_feat, int nchannel, int op,
    const std::vector<std::vector<int32_t>> &sorted_in_map,
    const std::vector<std::vector<int32_t>> &sorted_out_map,
    cusparseHandle_t cuhandle, cudaStream_t stream);

template <typename Dtype, typename Itype>
void BroadcastBackwardKernelGPU(
    const Dtype *d_in_feat, Dtype *d_grad_in_feat, int in_nrows,
    const Dtype *d_in_feat_global, Dtype *d_grad_in_feat_global,
    int in_nrows_global, const Dtype *d_grad_out_feat, int nchannel, int op,
    const std::vector<std::vector<Itype>> &sorted_in_maps,
    const std::vector<std::vector<Itype>> &sorted_out_maps,
    cusparseHandle_t cushandle, cudaStream_t stream) {
  Itype *d_sorted_in_map, *d_sorted_out_map, *d_csr_row;
  Dtype *d_dtype, *d_csr_val, *d_tmp_grad_in_feat_global, *d_tmp_grad_in_feat;
  cusparseMatDescr_t descr = 0;
  const Dtype alpha = 1;
  const Dtype beta = 0;
  int nnz = in_nrows;

  if (!IsIntType<Itype>::value)
    throw std::invalid_argument("Not implemented"); // Due to cusparseXcoo2csr

  if (sorted_in_maps.size() != 1)
    throw std::invalid_argument("InOut map must have one kernel for Broadcast");

  if (sorted_in_maps[0].size() != in_nrows)
    throw std::invalid_argument("Invalid in_map");

  // Malloc d_sorted_in_map, d_sorted_out_map, d_csr_row
  // THRUST_CHECK(d_csr_row.resize(in_nrows_global + 1)); // CSR returns n_row +
  // 1
  CUDA_CHECK(cudaMalloc((void **)&d_sorted_in_map,
                        (sorted_in_maps[0].size() + sorted_out_maps[0].size() +
                         in_nrows_global + 1) *
                            sizeof(Itype)));
  d_sorted_out_map = d_sorted_in_map + sorted_in_maps[0].size();
  d_csr_row = d_sorted_out_map + sorted_out_maps[0].size();

  // d_tmp_grad_in_feat, d_tmp_grad_in_feat_global
  // THRUST_CHECK(d_tmp_grad_in_feat.resize(in_nrows * nchannel));
  // THRUST_CHECK(d_csr_val.resize(nnz));
  CUDA_CHECK(cudaMalloc((void **)&d_dtype,
                        (nnz + (in_nrows + in_nrows_global) * nchannel) *
                            sizeof(Dtype)));
  d_tmp_grad_in_feat_global = d_dtype;
  d_tmp_grad_in_feat = d_tmp_grad_in_feat_global + in_nrows_global * nchannel;
  d_csr_val = d_tmp_grad_in_feat + in_nrows * nchannel;

  // COO cols
  // THRUST_CHECK(d_sorted_in_map = sorted_in_map[0]);    // COO cols
  cudaMemcpy(d_sorted_in_map, sorted_in_maps[0].data(),
             sizeof(Itype) * sorted_in_maps[0].size(), cudaMemcpyHostToDevice);
  // COO rows
  // THRUST_CHECK(d_sorted_out_map = sorted_out_map[0]);  // COO rows
  cudaMemcpy(d_sorted_out_map, sorted_out_maps[0].data(),
             sizeof(Itype) * sorted_out_maps[0].size(), cudaMemcpyHostToDevice);

  // thrust::fill(d_csr_val.begin(), d_csr_val.end(), 1);
  fill<Dtype><<<GET_BLOCKS(in_nrows), CUDA_NUM_THREADS, 0, stream>>>(
      nnz, d_csr_val, (Dtype)1.);

  CUSPARSE_CHECK(cusparseCreateMatDescr(&descr));
  cusparseSetMatType(descr, CUSPARSE_MATRIX_TYPE_GENERAL);
  cusparseSetMatIndexBase(descr, CUSPARSE_INDEX_BASE_ZERO);

  // Sort COO first
  sort_coo_gpu(cushandle, in_nrows_global, in_nrows, nnz, d_sorted_out_map,
               d_sorted_in_map);
  // For CRS, sort row and col inds by row major.
  CUSPARSE_CHECK(cusparseXcoo2csr(cushandle, d_sorted_out_map, nnz,
                                  in_nrows_global, d_csr_row,
                                  CUSPARSE_INDEX_BASE_ZERO));

  // To speed up, put switch outside for loops
  switch (op) {
  case 0: // +
    // For grad_in_feat, copy all grad_out_feat to grad_in_feat
    CUDA_CHECK(cudaMemcpy(d_grad_in_feat, d_grad_out_feat,
                          sizeof(Dtype) * nchannel * in_nrows,
                          cudaMemcpyDeviceToDevice));
    // For grad_in_feat_glob, add all grad_out_feat
    CUSPARSE_CHECK(
        cusparse_csrmm<Dtype>(cushandle,
                              CUSPARSE_OPERATION_NON_TRANSPOSE, // op(A)
                              CUSPARSE_OPERATION_TRANSPOSE,     // op(B)
                              in_nrows_global,                  // M
                              nchannel,                         // N
                              in_nrows,                         // K
                              nnz, &alpha, descr,
                              d_csr_val,       // val
                              d_csr_row,       // row
                              d_sorted_in_map, // col
                              d_grad_out_feat, // B
                              nchannel,        // ldb
                              &beta,
                              d_tmp_grad_in_feat_global, // C
                              in_nrows_global            // ldc
                              ));

    col2row_major<Dtype>(in_nrows_global, nchannel, d_tmp_grad_in_feat_global,
                         d_grad_in_feat_global, stream);
    break;
  case 1: // *
    // First, for grad_in_feat
    // Copy in_feat_global to tmp, then multiply the tmp with grad_out_feat
    row2col_major<Dtype>(in_nrows_global, nchannel, d_in_feat_global,
                         d_tmp_grad_in_feat_global, stream);
    CUSPARSE_CHECK(
        cusparse_csrmm<Dtype>(cushandle,
                              CUSPARSE_OPERATION_TRANSPOSE,     // op(A)
                              CUSPARSE_OPERATION_NON_TRANSPOSE, // op(B)
                              in_nrows_global,                  // M
                              nchannel,                         // N
                              in_nrows,                         // K
                              nnz, &alpha, descr,
                              d_csr_val,                 // val
                              d_csr_row,                 // row
                              d_sorted_in_map,           // col
                              d_tmp_grad_in_feat_global, // B
                              in_nrows_global,           // ldb
                              &beta,
                              d_tmp_grad_in_feat, // C
                              in_nrows            // ldc
                              ));
    col2row_major<Dtype>(in_nrows, nchannel, d_tmp_grad_in_feat, d_grad_in_feat,
                         stream);
    gpu_multiplication<Dtype>(nchannel * in_nrows, d_grad_out_feat,
                              d_grad_in_feat, d_grad_in_feat, stream);

    // Second, for grad_in_feat_global, copy in_feat to tmp,
    CUDA_CHECK(cudaMemcpy(d_tmp_grad_in_feat, d_grad_out_feat,
                          sizeof(Dtype) * nchannel * in_nrows,
                          cudaMemcpyDeviceToDevice));
    gpu_multiplication<Dtype>(nchannel * in_nrows, d_in_feat,
                              d_tmp_grad_in_feat, d_tmp_grad_in_feat, stream);
    CUSPARSE_CHECK(
        cusparse_csrmm<Dtype>(cushandle,
                              CUSPARSE_OPERATION_NON_TRANSPOSE, // op(A)
                              CUSPARSE_OPERATION_TRANSPOSE,     // op(B)
                              in_nrows_global,                  // M
                              nchannel,                         // N
                              in_nrows,                         // K
                              nnz, &alpha, descr,
                              d_csr_val,          // val
                              d_csr_row,          // row
                              d_sorted_in_map,    // col
                              d_tmp_grad_in_feat, // B
                              nchannel,           // ldb
                              &beta,
                              d_tmp_grad_in_feat_global, // C
                              in_nrows_global            // ldc
                              ));
    col2row_major<Dtype>(in_nrows_global, nchannel, d_tmp_grad_in_feat_global,
                         d_grad_in_feat_global, stream);
    break;
  default:
    throw std::invalid_argument(Formatter() << "Operation not supported: "
                                            << std::to_string(op));
  }

  CUSPARSE_CHECK(cusparseDestroyMatDescr(descr));

  cudaFree(d_sorted_in_map);
  cudaFree(d_dtype);
}

template void BroadcastBackwardKernelGPU<float, int32_t>(
    const float *d_in_feat, float *d_grad_in_feat, int in_nrows,
    const float *d_in_feat_global, float *d_grad_in_feat_global,
    int in_nrows_global, const float *d_grad_out_feat, int nchannel, int op,
    const std::vector<std::vector<int32_t>> &sorted_in_map,
    const std::vector<std::vector<int32_t>> &sorted_out_map,
    cusparseHandle_t cushandle, cudaStream_t stream);

#endif
