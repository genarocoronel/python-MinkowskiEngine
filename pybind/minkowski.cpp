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
#include <string>

#include <torch/extension.h>

#include <pybind11/pybind11.h>
#include <pybind11/stl.h>

#include "extern.hpp"
#include "src/common.hpp"

namespace py = pybind11;

template <typename Dtype, typename Itype>
void instantiate_func(py::module &m, const std::string &dtypestr,
                      const std::string &itypestr) {
  m.def((std::string("ConvolutionForwardCPU") + dtypestr).c_str(),
        &DimSwitchConvolutionForwardCPU<Dtype, Itype>);
  m.def((std::string("ConvolutionBackwardCPU") + dtypestr).c_str(),
        &DimSwitchConvolutionBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("ConvolutionForwardGPU") + dtypestr).c_str(),
        &DimSwitchConvolutionForwardGPU<Dtype, Itype>);
  m.def((std::string("ConvolutionBackwardGPU") + dtypestr).c_str(),
        &DimSwitchConvolutionBackwardGPU<Dtype, Itype>);
#endif

  m.def((std::string("ConvolutionTransposeForwardCPU") + dtypestr).c_str(),
        &DimSwitchConvolutionTransposeForwardCPU<Dtype, Itype>);
  m.def((std::string("ConvolutionTransposeBackwardCPU") + dtypestr).c_str(),
        &DimSwitchConvolutionTransposeBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("ConvolutionTransposeForwardGPU") + dtypestr).c_str(),
        &DimSwitchConvolutionTransposeForwardGPU<Dtype, Itype>);
  m.def((std::string("ConvolutionTransposeBackwardGPU") + dtypestr).c_str(),
        &DimSwitchConvolutionTransposeBackwardGPU<Dtype, Itype>);
#endif

  m.def((std::string("AvgPoolingForwardCPU") + dtypestr).c_str(),
        &DimSwitchAvgPoolingForwardCPU<Dtype, Itype>);
  m.def((std::string("AvgPoolingBackwardCPU") + dtypestr).c_str(),
        &DimSwitchAvgPoolingBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("AvgPoolingForwardGPU") + dtypestr).c_str(),
        &DimSwitchAvgPoolingForwardGPU<Dtype, Itype>);
  m.def((std::string("AvgPoolingBackwardGPU") + dtypestr).c_str(),
        &DimSwitchAvgPoolingBackwardGPU<Dtype, Itype>);
#endif

  m.def((std::string("MaxPoolingForwardCPU") + dtypestr).c_str(),
        &DimSwitchMaxPoolingForwardCPU<Dtype, Itype>);
  m.def((std::string("MaxPoolingBackwardCPU") + dtypestr).c_str(),
        &DimSwitchMaxPoolingBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("MaxPoolingForwardGPU") + dtypestr).c_str(),
        &DimSwitchMaxPoolingForwardGPU<Dtype, Itype>);
  m.def((std::string("MaxPoolingBackwardGPU") + dtypestr).c_str(),
        &DimSwitchMaxPoolingBackwardGPU<Dtype, Itype>);
#endif

  m.def((std::string("PoolingTransposeForwardCPU") + dtypestr).c_str(),
        &DimSwitchPoolingTransposeForwardCPU<Dtype, Itype>);
  m.def((std::string("PoolingTransposeBackwardCPU") + dtypestr).c_str(),
        &DimSwitchPoolingTransposeBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("PoolingTransposeForwardGPU") + dtypestr).c_str(),
        &DimSwitchPoolingTransposeForwardGPU<Dtype, Itype>);
  m.def((std::string("PoolingTransposeBackwardGPU") + dtypestr).c_str(),
        &DimSwitchPoolingTransposeBackwardGPU<Dtype, Itype>);
#endif

  m.def((std::string("GlobalPoolingForwardCPU") + dtypestr).c_str(),
        &DimSwitchGlobalPoolingForwardCPU<Dtype, Itype>);
  m.def((std::string("GlobalPoolingBackwardCPU") + dtypestr).c_str(),
        &DimSwitchGlobalPoolingBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("GlobalPoolingForwardGPU") + dtypestr).c_str(),
        &DimSwitchGlobalPoolingForwardGPU<Dtype, Itype>);
  m.def((std::string("GlobalPoolingBackwardGPU") + dtypestr).c_str(),
        &DimSwitchGlobalPoolingBackwardGPU<Dtype, Itype>);
#endif

  m.def((std::string("BroadcastForwardCPU") + dtypestr).c_str(),
        &DimSwitchBroadcastForwardCPU<Dtype, Itype>);
  m.def((std::string("BroadcastBackwardCPU") + dtypestr).c_str(),
        &DimSwitchBroadcastBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("BroadcastForwardGPU") + dtypestr).c_str(),
        &DimSwitchBroadcastForwardGPU<Dtype, Itype>);
  m.def((std::string("BroadcastBackwardGPU") + dtypestr).c_str(),
        &DimSwitchBroadcastBackwardGPU<Dtype, Itype>);
#endif

  m.def((std::string("PruningForwardCPU") + dtypestr).c_str(),
        &DimSwitchPruningForwardCPU<Dtype, Itype>);
  m.def((std::string("PruningBackwardCPU") + dtypestr).c_str(),
        &DimSwitchPruningBackwardCPU<Dtype, Itype>);
#ifndef CPU_ONLY
  m.def((std::string("PruningForwardGPU") + dtypestr).c_str(),
        &DimSwitchPruningForwardGPU<Dtype, Itype>);
  m.def((std::string("PruningBackwardGPU") + dtypestr).c_str(),
        &DimSwitchPruningBackwardGPU<Dtype, Itype>);
#endif
}

template <uint8_t D, typename Itype>
void instantiate_dim_itype(py::module &m, const std::string &dim,
                           const std::string &itypestr) {
  std::string coords_name = std::string("PyCoordsManager") + dim + itypestr;
  py::class_<CoordsManager<D, Itype>>(m, coords_name.c_str())
      .def(py::init<>())
      .def("existsCoordsKey", (bool (CoordsManager<D, Itype>::*)(py::object)) &
                                  CoordsManager<D, Itype>::existsCoordsKey)
      .def("getCoordsKey", &CoordsManager<D, Itype>::getCoordsKey)
      .def("getKernelMap", &CoordsManager<D, Itype>::getKernelMap)
      .def("getCoordsSize", (int (CoordsManager<D, Itype>::*)(py::object)) &
                                CoordsManager<D, Itype>::getCoordsSize)
      .def("getCoords", &CoordsManager<D, Itype>::getCoords)
      .def("getRowIndicesPerBatch", &CoordsManager<D, Itype>::getRowIndicesPerBatch)
      .def("initializeCoords", (uint64_t(CoordsManager<D, Itype>::*)(
                                   at::Tensor, py::object, bool)) &
                                   CoordsManager<D, Itype>::initializeCoords)
      .def("__repr__",
           [](const CoordsManager<D, Itype> &a) { return a.toString(); });
}

template <uint8_t D>
void instantiate_dim(py::module &m, const std::string &dim) {
  std::string name = std::string("PyCoordsKey") + dim;
  py::class_<PyCoordsKey<D>>(m, name.c_str())
      .def(py::init<>())
      .def("copy", &PyCoordsKey<D>::copy)
      .def("setKey", &PyCoordsKey<D>::setKey)
      .def("getKey", &PyCoordsKey<D>::getKey)
      .def("setTensorStride", &PyCoordsKey<D>::setTensorStride)
      .def("getTensorStride", &PyCoordsKey<D>::getTensorStride)
      .def("__repr__", [](const PyCoordsKey<D> &a) { return a.toString(); });

  // Instantiate Itypes
  instantiate_dim_itype<D, int32_t>(m, dim, std::string("int32"));
  instantiate_func<float, int32_t>(m, std::string("f"),
                                   std::string("int32"));
  instantiate_func<double, int32_t>(m, std::string("d"),
                                   std::string("int32"));
}

void bind_native(py::module &m) {
#ifndef CPU_ONLY
  m.def("SparseVoxelization", &SparseVoxelization);
  py::class_<GPUMemoryManager<int32_t> >(m, "MemoryManager")
      .def(py::init<>())
      .def("size", &GPUMemoryManager<int32_t>::size)
      .def("resize", &GPUMemoryManager<int32_t>::resize);
#endif
}

PYBIND11_MODULE(TORCH_EXTENSION_NAME, m) {
  bind_native(m);
  instantiate_dim<1>(m, std::to_string(1));
  instantiate_dim<2>(m, std::to_string(2));
  instantiate_dim<3>(m, std::to_string(3));
  instantiate_dim<4>(m, std::to_string(4));
  instantiate_dim<5>(m, std::to_string(5));
  instantiate_dim<6>(m, std::to_string(6));
  instantiate_dim<7>(m, std::to_string(7));
  instantiate_dim<8>(m, std::to_string(8));
}
