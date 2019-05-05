#include <cassert>
#include <cmath>
#include <cstdint>
#include <cstring>
#include <iostream>
#include <tuple>

#include "src/kernel_region.hpp"
#include "src/main.hpp"

#include "src/sparse_convolution.cuh"
#include "src/sparse_convolution.hpp"

/**
  Create <batch index + coordinate> to feature index mapping. The mapping will
  be used to create input index to output index mapping for convolution
  computation.
*/
template <uint8_t D>
CoordIndexMap<D> CreateCoordIndexMap(const int64_t *loc, int64_t nrows,
                                     int64_t ncols) {
  assert(ncols - 1 == D); // D+1 th coord is the batch index
  CoordIndexMap<D> coord_map;
  coord_map.map.resize(nrows);
  Coord<D> coord;
  for (int i = 0; i < nrows; i++) {
    std::copy(&loc[i * ncols], &loc[(i + 1) * ncols], coord.data());
    if (coord_map.map.find(coord) == coord_map.map.end()) {
      coord_map.map[coord] = i;
    } else {
      std::cout << "Duplicate key found. Use initialize_coords_with_duplicates "
                   "or remove duplicates"
                << std::endl;
      exit(-1);
    }
  }
  return coord_map;
}

/**
  Create <batch index + coordinate> to feature index mapping, but with
  duplicate check. The mapping will be used to create input index to output
  index mapping for convolution computation.
*/
template <uint8_t D>
CoordIndexMap<D> CreateDuplicateCoordIndexMap(const int64_t *loc, int64_t nrows,
                                              int64_t ncols) {
  assert(ncols - 1 == D); // D+1 th coord is the batch index
  int counter = 0;
  CoordIndexMap<D> coord_map;
  coord_map.map.resize(nrows);
  Coord<D> coord;
  for (int i = 0; i < nrows; i++) {
    std::copy(&loc[i * ncols], &loc[(i + 1) * ncols], coord.data());
    if (coord_map.map.find(coord) == coord_map.map.end()) {
      coord_map.map[coord] = counter++;
    }
  }
  return coord_map;
}

/**
 * Get coords index. Used to write index to given index_map pointer
 */
template <uint8_t D>
void CreateDuplicateIndexMap(const CoordIndexMap<D> coord_map,
                             const int64_t *loc, int64_t nrows,
                             int64_t *index_map, int64_t index_map_nrows) {
  int ncols = D + 1;
  Coord<D> coord;
  for (int i = 0; i < nrows; i++) {
    std::copy(&loc[i * ncols], &loc[(i + 1) * ncols], coord.data());
    auto coord_iter = coord_map.map.find(coord);
    if (coord_iter == coord_map.map.end()) {
      index_map[i] = -1;
    } else {
      index_map[i] = coord_iter->second;
    }
  }
}

/**
  Given the input coordinate to index map, kernel size, stride, and dilation,
  compute the output coordinates and corresponding index.
*/
template <uint8_t D>
CoordIndexMap<D> CreateOutputCoordIndexMap(const CoordIndexMap<D> in_coord_map,
                                           int64_t pixel_dist, int64_t stride) {
  CoordIndexMap<D> out_coord_map;
  int new_pixel_dist = pixel_dist * stride;
  if (stride > 1) {
    int n_out = 0;
    for (auto in_pair : in_coord_map.map) {
      Coord<D> coord(in_pair.first);
      for (int i = 0; i < D; i++) {
        coord[i] = int(coord[i] / new_pixel_dist) * new_pixel_dist;
      }
      if (out_coord_map.map.find(coord) == out_coord_map.map.end())
        out_coord_map.map[coord] = n_out++;
    }
  } else {
    out_coord_map = in_coord_map;
  }

  return out_coord_map;
}

/**
  Given the index map, kernel size, stride, and dilation, compute the input
  index to output index. Returns {in_map, out_map}
*/
template <uint8_t D>
std::tuple<InOutMapPerKernel, InOutMapPerKernel>
CreateInOutPerKernel(const CoordIndexMap<D> in_coord_map,
                     const CoordIndexMap<D> out_coord_map, int64_t pixel_dist,
                     int64_t kernel_size, int64_t dilation, int64_t region_type,
                     int64_t *p_offset, int64_t n_offset) {
  int kernel_volume = pow(kernel_size, D), kernel_ind = 0;
  InOutMapPerKernel in_map(kernel_volume), out_map(kernel_volume);
  for (auto const out_coord_iter : out_coord_map.map) {
    auto out_coord = out_coord_iter.first;
    auto kernel_region =
        KernelRegion<D>(out_coord, pixel_dist, kernel_size, dilation,
                        region_type, p_offset, n_offset);
    kernel_ind = 0;
    for (auto point : kernel_region) {
      auto in_coord_iter = in_coord_map.map.find(point);
      if (in_coord_iter != in_coord_map.map.end()) {
        in_map[kernel_ind].push_back(in_coord_iter->second);
        out_map[kernel_ind].push_back(out_coord_iter.second);
      }
      kernel_ind++;
    }
  }
  return std::make_tuple(in_map, out_map);
}

/*
 * Given coordinates and the pixel distance, create index map
 */
template <uint8_t D>
long t_initialize_coords(const int64_t *coords, int64_t nrows,
                         int64_t pixel_dist, void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Create index map and put it in the metadata
  auto coord2inds = &init_metadata.coord2inds;
  if (coord2inds->find(pixel_dist) != coord2inds->end()) {
    std::cout << "Key exists" << std::endl;
    return -1;
  }
  (*coord2inds)[pixel_dist] = CreateCoordIndexMap<D>(coords, nrows, D + 1);
}

/*
 * Given coordinates and the pixel distance, create index map and index map
 */
template <uint8_t D>
long t_initialize_coords_with_duplicates(const int64_t *coords, int64_t nrows,
                                         int64_t pixel_dist, void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Create index map and put it in the metadata
  auto coord2inds = &init_metadata.coord2inds;
  if (coord2inds->find(pixel_dist) != coord2inds->end()) {
    std::cout << "Key exists" << std::endl;
    return -1;
  }

  (*coord2inds)[pixel_dist] =
      CreateDuplicateCoordIndexMap<D>(coords, nrows, D + 1);
}

/*
 * Given coordinates and the pixel distance, create index map and index map
 */
template <uint8_t D>
long t_get_index_map(const int64_t *coords, int64_t nrows, int64_t *p_index_map,
                     int64_t index_map_nrows, int64_t pixel_dist,
                     void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Create index map and put it in the metadata
  auto coord2inds = &init_metadata.coord2inds;
  if (coord2inds->find(pixel_dist) == coord2inds->end()) {
    std::cout << "Key doesn't exists" << std::endl;
    return -1;
  }
  CreateDuplicateIndexMap((*coord2inds)[pixel_dist], coords, nrows, p_index_map,
                          index_map_nrows);
}

/*
 * Create output map for a specific pixeldist, stride if coordmap[pixeldist]
 * exists.
 */
template <uint8_t D>
long t_initialize_out_coords(int64_t pixel_dist, int64_t stride,
                             void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Create index map and put it in the metadata
  auto coord2inds = &init_metadata.coord2inds;
  if (coord2inds->find(pixel_dist) == coord2inds->end()) {
    return -1;
  }
  if (stride > 1 &&
      coord2inds->find(pixel_dist * stride) == coord2inds->end()) {
    (*coord2inds)[pixel_dist * stride] = CreateOutputCoordIndexMap<D>(
        (*coord2inds)[pixel_dist], pixel_dist, stride);
  }
  return 1;
}

template <uint8_t D>
long t_get_num_coords(int64_t pixel_dist, int64_t *p_nrows, void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);
  if (init_metadata.coord2inds.find(pixel_dist) ==
      init_metadata.coord2inds.end()) {
    return -1;
  }
  *p_nrows = init_metadata.coord2inds[pixel_dist].map.size();
  return 1;
}

template <uint8_t D>
long t_get_coords(int64_t *p_coords, int64_t pixel_dist, void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);
  auto coord2inds = &init_metadata.coord2inds;
  int nrows = 0, ncols = D + 1;
  if (coord2inds->find(pixel_dist) == coord2inds->end()) {
    return -1;
  }
  auto coord2ind = &(*coord2inds)[pixel_dist].map;
  nrows = coord2ind->size();
  if (nrows < 1)
    return -1;

  for (auto pair : *coord2ind)
    std::memcpy(&p_coords[ncols * pair.second], &pair.first,
                (D + 1) * sizeof(long));

  return 1;
}

/*
 * Given pixel_dist_src and pixel_dist_dst, find the respective coord_maps and
 * return the indices of the coord_map_ind in coord_map_dst
 */
template <uint8_t D>
long t_get_permutation(long *p_permutation, int64_t pixel_dist_src,
                       int64_t pixel_dist_dst, void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);
  auto coord2inds = &init_metadata.coord2inds;
  int out_ind, in_ind;
  if (pixel_dist_src < pixel_dist_dst) {
    return -1;
  }
  if (coord2inds->find(pixel_dist_src) == coord2inds->end() ||
      coord2inds->find(pixel_dist_dst) == coord2inds->end()) {
    return -1;
  }
  auto coord2ind_src = &(*coord2inds)[pixel_dist_src].map;
  auto coord2ind_dst = &(*coord2inds)[pixel_dist_dst].map;

  int stride = pixel_dist_src / pixel_dist_dst;
  for (auto dst_pair : *coord2ind_dst) {
    out_ind = dst_pair.second;
    Coord<D> coord = dst_pair.first;
    for (int i = 0; i < D; i++) {
      coord[i] = (coord[i] / stride) * stride;
    }
    in_ind = (*coord2ind_src)[coord];
    p_permutation[out_ind] = in_ind;
  }
  return 1;
}

template <uint8_t D> void t_clear(void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);
  init_metadata.clear();
}

template <uint8_t D>
long t_conv_fw(const float *p_in_feat, int64_t in_nchannel, float *p_out_feat,
               int64_t out_nchannel, const float *p_kernel, const float *p_bias,
               int64_t out_nrows, int64_t pixel_dist, int64_t stride,
               int64_t kernel_size, int64_t dilation, int64_t region_type,
               int64_t *p_offset, int64_t n_offset, void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Initialize all input, output coordinates, and convolution mapping
  auto p_coord2inds = &init_metadata.coord2inds;
  auto p_in_maps = &init_metadata.in_maps;
  auto p_out_maps = &init_metadata.out_maps;

  // Assume that the input coord2ind exists.
  if (p_coord2inds->find(pixel_dist) == p_coord2inds->end())
    return -1;

  // Create output coordinate map if it doesn't exist
  if (stride > 1 &&
      p_coord2inds->find(pixel_dist * stride) == p_coord2inds->end())
    (*p_coord2inds)[pixel_dist * stride] = CreateOutputCoordIndexMap<D>(
        (*p_coord2inds)[pixel_dist], pixel_dist, stride);

  // Create in to out convolution mapping if it doesn't exist
  InOutKey key = {pixel_dist, stride, kernel_size, dilation};
  if (p_in_maps->find(key) == p_in_maps->end()) {
    auto in_out_tuple = CreateInOutPerKernel<D>(
        (*p_coord2inds)[pixel_dist], (*p_coord2inds)[pixel_dist * stride],
        pixel_dist, kernel_size, dilation, region_type, p_offset, n_offset);
    (*p_in_maps)[key] = std::get<0>(in_out_tuple);
    (*p_out_maps)[key] = std::get<1>(in_out_tuple);
  }

  // Convolution
  SparseConvolutionForward<float>(
      p_in_feat, in_nchannel, p_out_feat, out_nchannel, p_kernel, p_bias,
      (*p_in_maps)[key], (*p_out_maps)[key], out_nrows);

  return 1;
}

template <uint8_t D>
long t_conv_bw(const float *p_in_feat, float *p_grad_in_feat,
               int64_t in_nchannel, float *p_grad_out_feat,
               int64_t out_nchannel, float *p_kernel, float *p_grad_kernel,
               float *p_grad_bias, int64_t out_nrows, int64_t pixel_dist,
               int64_t stride, int64_t kernel_size, int64_t dilation,
               void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Initialize all input, output coordinates, and convolution mapping
  auto p_coord2inds = &init_metadata.coord2inds;
  auto p_in_maps = &init_metadata.in_maps;
  auto p_out_maps = &init_metadata.out_maps;

  // Assume that the input coord2ind exists.
  if (p_coord2inds->find(pixel_dist) == p_coord2inds->end())
    return -1;

  if (p_coord2inds->find(pixel_dist * stride) == p_coord2inds->end())
    return -1;

  InOutKey key = {pixel_dist, stride, kernel_size, dilation};
  if (p_in_maps->find(key) == p_in_maps->end())
    return -1;

  // Convolution
  SparseConvolutionBackward<float>(
      p_in_feat, p_grad_in_feat, in_nchannel, p_grad_out_feat, out_nchannel,
      p_kernel, p_grad_kernel, p_grad_bias, (*p_in_maps)[key],
      (*p_out_maps)[key], out_nrows);

  return 1;
}

template <uint8_t D>
long t_conv_fw_gpu(const float *p_in_feat, int64_t in_nchannel,
                   float *p_out_feat, int64_t out_nchannel,
                   const float *p_kernel, const float *p_bias,
                   int64_t out_nrows, int64_t pixel_dist, int64_t stride,
                   int64_t kernel_size, int64_t dilation, int64_t region_type,
                   int64_t *p_offset, int64_t n_offset, cudaStream_t stream,
                   void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Initialize all input, output coordinates, and convolution mapping
  auto p_coord2inds = &init_metadata.coord2inds;
  auto p_in_maps = &init_metadata.in_maps;
  auto p_out_maps = &init_metadata.out_maps;

  // Assume that the input coord2ind exists.
  if (p_coord2inds->find(pixel_dist) == p_coord2inds->end())
    return -1;

  // Create output coordinate map if it doesn't exist
  if (stride > 1 &&
      p_coord2inds->find(pixel_dist * stride) == p_coord2inds->end())
    (*p_coord2inds)[pixel_dist * stride] = CreateOutputCoordIndexMap<D>(
        (*p_coord2inds)[pixel_dist], pixel_dist, stride);

  // Create in to out convolution mapping if it doesn't exist
  InOutKey key = {pixel_dist, stride, kernel_size, dilation};
  if (p_in_maps->find(key) == p_in_maps->end()) {
    auto in_out_tuple = CreateInOutPerKernel<D>(
        (*p_coord2inds)[pixel_dist], (*p_coord2inds)[pixel_dist * stride],
        pixel_dist, kernel_size, dilation, region_type, p_offset, n_offset);
    (*p_in_maps)[key] = std::get<0>(in_out_tuple);
    (*p_out_maps)[key] = std::get<1>(in_out_tuple);
  }

  // Convolution
  SparseConvolutionForwardGPU<float>(p_in_feat, in_nchannel, p_out_feat,
                                     out_nchannel, p_kernel, p_bias,
                                     (*p_in_maps)[key], (*p_out_maps)[key],
                                     out_nrows, init_metadata.cuhandle, stream);

  return 1;
}

template <uint8_t D>
long t_conv_bw_gpu(const float *d_in_feat, float *d_grad_in_feat,
                   int64_t in_nchannel, float *d_grad_out_feat,
                   int64_t out_nchannel, float *d_kernel, float *d_grad_kernel,
                   float *d_grad_bias, int64_t out_nrows, int64_t pixel_dist,
                   int64_t stride, int64_t kernel_size, int64_t dilation,
                   cudaStream_t stream, void **metadata) {
  INITIALIZE_AND_REFERENCE(Metadata<D>, metadata, init_metadata);

  // Initialize all input, output coordinates, and convolution mapping
  auto p_coord2inds = &init_metadata.coord2inds;
  auto p_in_maps = &init_metadata.in_maps;
  auto p_out_maps = &init_metadata.out_maps;

  // Assume that the input coord2ind exists.
  if (p_coord2inds->find(pixel_dist) == p_coord2inds->end())
    return -1;

  if (p_coord2inds->find(pixel_dist * stride) == p_coord2inds->end())
    return -1;

  // Create in to out convolution mapping if it doesn't exist
  InOutKey key = {pixel_dist, stride, kernel_size, dilation};
  if (p_in_maps->find(key) == p_in_maps->end())
    return -1;

  // Convolution
  SparseConvolutionBackwardGPU<float>(
      d_in_feat, d_grad_in_feat, in_nchannel, d_grad_out_feat, out_nchannel,
      d_kernel, d_grad_kernel, d_grad_bias, (*p_in_maps)[key],
      (*p_out_maps)[key], out_nrows, init_metadata.cuhandle, stream);

  return 1;
}
