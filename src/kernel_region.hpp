#ifndef RECTANGULAR_REGION
#define RECTANGULAR_REGION

#include "src/main.hpp"

template <uint8_t D, typename Itype> class KernelRegionIterator;
template <uint8_t D, typename Itype> class KernelRegion {
public:
  int region_type;
  Arr<D, Itype> pixel_dists, kernel_size, dilations;
  const Itype *p_offset, n_offset;
  Coord<D, Itype> center;
  Coord<D, Itype> lb;
  Coord<D, Itype> ub;

  KernelRegion(Coord<D, Itype> &center, Arr<D, Itype> pixel_dists,
               Arr<D, Itype> kernel_size, Arr<D, Itype> dilations,
               int region_type, const Itype *p_offset, int n_offset)
      : center(center), pixel_dists(pixel_dists), kernel_size(kernel_size),
        dilations(dilations), region_type(region_type), p_offset(p_offset),
        n_offset(n_offset) {
    for (int i = 0; i < D; i++) {
      lb[i] =
          center[i] - int(kernel_size[i] / 2) * dilations[i] * pixel_dists[i];
      ub[i] =
          center[i] + int(kernel_size[i] / 2) * dilations[i] * pixel_dists[i];
    }
    lb[D] = ub[D] = center[D]; // set the batch index
  }

  KernelRegionIterator<D, Itype> begin() {
    return KernelRegionIterator<D, Itype>(*this, pixel_dists, kernel_size,
                                          dilations, region_type);
  }
  KernelRegionIterator<D, Itype> end() {
    return KernelRegionIterator<D, Itype>(*this, pixel_dists, kernel_size,
                                          dilations, region_type);
  }
};

template <uint8_t D, typename Itype> class KernelRegionIterator {
private:
  Arr<D, Itype> pixel_dists, kernel_size, dilations;
  int region_type, curr_axis, offset_ind;
  KernelRegion<D, Itype> &region;
  Coord<D, Itype> point;

public:
  bool done;
  KernelRegionIterator(KernelRegion<D, Itype> &region,
                       Arr<D, Itype> pixel_dists, Arr<D, Itype> kernel_size,
                       Arr<D, Itype> dilations, int region_type)
      : region(region), done(false), pixel_dists(pixel_dists),
        kernel_size(kernel_size), dilations(dilations),
        region_type(region_type), curr_axis(0), offset_ind(0) {
    // First point
    switch (region_type) {
    case 0:
      point = region.lb;
      break;
    case 1:
      // First, start from the origin
      point = region.center;
      break;
    case 2:
      // First offset
      for (int i = 0; i < D; i++) {
        point[i] = region.center[i] + region.p_offset[i];
      }
      point[D] = region.center[D];
      break;
    }
  }
  KernelRegionIterator<D, Itype> &operator++() {
    switch (region_type) {
    case 0:
      // Iterate only from 0 to D-1, point[D] reserved for batch index
      for (int i = D - 1;;) {
        point[i] += dilations[i] * pixel_dists[i]; // point is initialized as lb
        if (point[i] <= region.ub[i])
          break;
        point[i] = region.lb[i];
        i--;
        if (i == -1) {
          done = true; // Signal to operator!= to end iteration
          break;
        }
      }
      return *this;
    case 1:
      while (curr_axis < D) {
        // Go through [4, 5, 1, 2] when kernel_size = 5, and ceter = 3.
        // Center passed at the initialization
        point[curr_axis] += dilations[curr_axis] * pixel_dists[curr_axis];
        // skip if the current point is crossing the center
        if (point[curr_axis] == region.center[curr_axis]) {
          curr_axis++;
          continue;
        }
        // When it passes the last point, reset to the lower bound
        if (point[curr_axis] > region.ub[curr_axis])
          point[curr_axis] = region.lb[curr_axis];
        break;
      }
      if (curr_axis >= D) { // if it has past all axes
        done = true;
      }
      return *this;
    case 2:         // custom offset
      offset_ind++; // already past the first offset
      if (offset_ind >= region.n_offset) {
        done = true;
      } else {
        for (int i = 0; i < D; i++) {
          point[i] = region.center[i] + region.p_offset[D * offset_ind + i];
        }
      }
      return *this;
    }
  }
  Coord<D, Itype> &operator*() { return point; }
};

// Only to be used for checking the end point of range based for loops.
template <uint8_t D, typename Itype>
inline bool operator!=(const KernelRegionIterator<D, Itype> &lhs,
                       const KernelRegionIterator<D, Itype> &rhs) {
  return !lhs.done;
}
#endif
