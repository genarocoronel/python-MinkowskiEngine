/* Copyright (c) Chris Choy (chrischoy@ai.stanford.edu).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Please cite "4D Spatio-Temporal ConvNets: Minkowski Convolutional Neural
 * Networks", CVPR'19 (https://arxiv.org/abs/1904.08755) if you use any part
 * of the code.
 */
#include "common.hpp"

#include "pooling_avg.hpp"
#ifndef CPU_ONLY
#include "pooling_avg.cuh"
#endif

#include <pybind11/pybind11.h>

template <uint8_t D, typename Dtype, typename Itype>
void GlobalPoolingForwardCPU(at::Tensor in_feat, at::Tensor out_feat,
                             at::Tensor num_nonzero,
                             py::object py_in_coords_key,
                             py::object py_out_coords_key,
                             py::object py_coords_manager, bool use_avg) {
  CoordsManager<D, Itype> *p_coords_manager =
      py_coords_manager.cast<CoordsManager<D, Itype> *>();
  auto in_out = p_coords_manager->setupAndReturnOriginInOutPerKernel(
      py_in_coords_key, py_out_coords_key);

  const int out_nrows = p_coords_manager->getCoordsSize(py_out_coords_key);
  out_feat.resize_({out_nrows, in_feat.size(1)});
  out_feat.zero_();
  num_nonzero.resize_({out_nrows});
  num_nonzero.zero_();

  NonzeroAvgPoolingForwardKernelCPU<Dtype, Itype>(
      in_feat.data<Dtype>(), out_feat.data<Dtype>(), num_nonzero.data<Dtype>(),
      in_feat.size(1), std::get<0>(in_out), std::get<1>(in_out), out_nrows,
      use_avg);
}

template <uint8_t D, typename Dtype, typename Itype>
void GlobalPoolingBackwardCPU(at::Tensor in_feat, at::Tensor grad_in_feat,
                              at::Tensor grad_out_feat, at::Tensor num_nonzero,
                              py::object py_in_coords_key,
                              py::object py_out_coords_key,
                              py::object py_coords_manager, bool use_avg) {
  CoordsManager<D, Itype> *p_coords_manager =
      py_coords_manager.cast<CoordsManager<D, Itype> *>();
  InOutMapKey map_key = p_coords_manager->getOriginMapHashKey(
      py_in_coords_key, py_out_coords_key);

  grad_in_feat.resize_as_(in_feat);
  grad_in_feat.zero_();

  NonzeroAvgPoolingBackwardKernelCPU<Dtype, Itype>(
      grad_in_feat.data<Dtype>(), in_feat.size(0), grad_out_feat.data<Dtype>(),
      num_nonzero.data<Dtype>(), in_feat.size(1),
      p_coords_manager->in_maps[map_key], p_coords_manager->out_maps[map_key],
      use_avg);
}

#ifndef CPU_ONLY
template <uint8_t D, typename Dtype, typename Itype>
void GlobalPoolingForwardGPU(at::Tensor in_feat, at::Tensor out_feat,
                             at::Tensor num_nonzero,
                             py::object py_in_coords_key,
                             py::object py_out_coords_key,
                             py::object py_coords_manager, bool use_avg) {
  CoordsManager<D, Itype> *p_coords_manager =
      py_coords_manager.cast<CoordsManager<D, Itype> *>();
  auto in_out = p_coords_manager->setupAndReturnOriginInOutPerKernel(
      py_in_coords_key, py_out_coords_key);

  const int out_nrows = p_coords_manager->getCoordsSize(py_out_coords_key);
  out_feat.resize_({out_nrows, in_feat.size(1)});
  out_feat.zero_();
  num_nonzero.resize_({out_nrows});
  num_nonzero.zero_();

  // int dtype_mult = dtypeMultiplier<Dtype, Itype>(), nnz = 0;
  int nnz = 0;
  for (const auto &map : std::get<0>(in_out))
    nnz += map.size();

  Itype *d_scr = p_coords_manager->getScratchGPUMemory(
      2 * nnz +     // in_out map
      out_nrows + 1 // csr_row
      // (nnz + in_feat.size(1) * out_nrows + // dtype csr_val + tmp_out_feat
      //          use_avg
      //      ? in_feat.size(0)
      //      : 0) *
      //     dtype_mult // in_nrows if use_avg
  );

  cusparseHandle_t handle =
      THCState_getCurrentSparseHandle(at::globalContext().getTHCState());

  NonzeroAvgPoolingForwardKernelGPU<Dtype, Itype>(
      in_feat.data<Dtype>(), in_feat.size(0), out_feat.data<Dtype>(), out_nrows,
      num_nonzero.data<Dtype>(), in_feat.size(1), std::get<0>(in_out),
      std::get<1>(in_out), use_avg, d_scr, handle,
      at::cuda::getCurrentCUDAStream());
}

template <uint8_t D, typename Dtype, typename Itype>
void GlobalPoolingBackwardGPU(at::Tensor in_feat, at::Tensor grad_in_feat,
                              at::Tensor grad_out_feat, at::Tensor num_nonzero,
                              py::object py_in_coords_key,
                              py::object py_out_coords_key,
                              py::object py_coords_manager, bool use_avg) {
  CoordsManager<D, Itype> *p_coords_manager =
      py_coords_manager.cast<CoordsManager<D, Itype> *>();
  InOutMapKey map_key = p_coords_manager->getOriginMapHashKey(
      py_in_coords_key, py_out_coords_key);

  grad_in_feat.resize_as_(in_feat);
  grad_in_feat.zero_();

  int nnz = 0;
  for (const auto &map : p_coords_manager->out_maps[map_key])
    nnz += map.size();

  Itype *d_scr = p_coords_manager->getScratchGPUMemory(2 * nnz);

  NonzeroAvgPoolingBackwardKernelGPU<Dtype, Itype>(
      grad_in_feat.data<Dtype>(), in_feat.size(0), grad_out_feat.data<Dtype>(),
      grad_out_feat.size(0), num_nonzero.data<Dtype>(), in_feat.size(1),
      p_coords_manager->in_maps[map_key], p_coords_manager->out_maps[map_key],
      use_avg, d_scr, at::cuda::getCurrentCUDAStream());
}
#endif

template <typename Dtype, typename Itype>
void DimSwitchGlobalPoolingForwardCPU(
    int D, at::Tensor in_feat, at::Tensor out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg) {
  SWITCH_DIM_TYPES(GlobalPoolingForwardCPU, Dtype, Itype, in_feat, out_feat,
                   num_nonzero, py_in_coords_key, py_out_coords_key,
                   py_coords_manager, use_avg);
}

template void DimSwitchGlobalPoolingForwardCPU<float, int32_t>(
    int D, at::Tensor in_feat, at::Tensor out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);

template void DimSwitchGlobalPoolingForwardCPU<double, int32_t>(
    int D, at::Tensor in_feat, at::Tensor out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);

template <typename Dtype, typename Itype>
void DimSwitchGlobalPoolingBackwardCPU(
    int D, at::Tensor in_feat, at::Tensor grad_in_feat,
    at::Tensor grad_out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg) {
  SWITCH_DIM_TYPES(GlobalPoolingBackwardCPU, Dtype, Itype, in_feat,
                   grad_in_feat, grad_out_feat, num_nonzero, py_in_coords_key,
                   py_out_coords_key, py_coords_manager, use_avg);
}

template void DimSwitchGlobalPoolingBackwardCPU<float, int32_t>(
    int D, at::Tensor in_feat, at::Tensor grad_in_feat,
    at::Tensor grad_out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);

template void DimSwitchGlobalPoolingBackwardCPU<double, int32_t>(
    int D, at::Tensor in_feat, at::Tensor grad_in_feat,
    at::Tensor grad_out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);

#ifndef CPU_ONLY
template <typename Dtype, typename Itype>
void DimSwitchGlobalPoolingForwardGPU(
    int D, at::Tensor in_feat, at::Tensor out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg) {
  SWITCH_DIM_TYPES(GlobalPoolingForwardGPU, Dtype, Itype, in_feat, out_feat,
                   num_nonzero, py_in_coords_key, py_out_coords_key,
                   py_coords_manager, use_avg);
}

template void DimSwitchGlobalPoolingForwardGPU<float, int32_t>(
    int D, at::Tensor in_feat, at::Tensor out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);

template void DimSwitchGlobalPoolingForwardGPU<double, int32_t>(
    int D, at::Tensor in_feat, at::Tensor out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);

template <typename Dtype, typename Itype>
void DimSwitchGlobalPoolingBackwardGPU(
    int D, at::Tensor in_feat, at::Tensor grad_in_feat,
    at::Tensor grad_out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg) {
  SWITCH_DIM_TYPES(GlobalPoolingBackwardGPU, Dtype, Itype, in_feat,
                   grad_in_feat, grad_out_feat, num_nonzero, py_in_coords_key,
                   py_out_coords_key, py_coords_manager, use_avg);
}

template void DimSwitchGlobalPoolingBackwardGPU<float, int32_t>(
    int D, at::Tensor in_feat, at::Tensor grad_in_feat,
    at::Tensor grad_out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);

template void DimSwitchGlobalPoolingBackwardGPU<double, int32_t>(
    int D, at::Tensor in_feat, at::Tensor grad_in_feat,
    at::Tensor grad_out_feat, at::Tensor num_nonzero,
    py::object py_in_coords_key, py::object py_out_coords_key,
    py::object py_coords_manager, bool use_avg);
#endif
