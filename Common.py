import math
import cffi
import collections
import numpy as np
from enum import Enum
from itertools import product

import torch
import MinkowskiEngineFFI as ME

ffi = cffi.FFI()


def convert_to_int_tensor(arg, dimension):
    if isinstance(arg, torch.IntTensor):
        assert arg.numel() == dimension
        return arg

    if isinstance(arg, (collections.Sequence, np.ndarray)):
        tmp = torch.IntTensor([i for i in arg])
        assert tmp.numel() == dimension
    elif isinstance(arg, str):
        raise ValueError('Input must be a scalar or a sequence')
    elif np.isscalar(arg):  # Assume that it is a scalar
        tmp = torch.IntTensor([int(arg) for i in range(dimension)])
    else:
        raise ValueError('Input must be a scalar or a sequence')

    return tmp


def prep_args(pixel_dist, stride, kernel_size, dilation, region_type, D=-1):
    assert torch.prod(
        kernel_size > 0
    ), f"kernel_size must be a positive integer, provided {kernel_size}"
    assert D > 0, f"dimension must be a positive integer, {D}"
    assert isinstance(region_type,
                      RegionType), "region offset must be of type RegionType"
    pixel_dist = convert_to_int_tensor(pixel_dist, D)
    stride = convert_to_int_tensor(stride, D)
    kernel_size = convert_to_int_tensor(kernel_size, D)
    dilation = convert_to_int_tensor(dilation, D)
    region_type = int(region_type)
    return pixel_dist, stride, kernel_size, dilation, region_type,


def save_ctx(ctx, pixel_dist, stride, kernel_size, dilation, in_coords_key,
             out_coords_key, net_metadata):
    ctx.pixel_dist = pixel_dist
    ctx.stride = stride
    ctx.kernel_size = kernel_size
    ctx.dilation = dilation
    ctx.in_coords_key = in_coords_key
    ctx.out_coords_key = out_coords_key
    ctx.net_metadata = net_metadata
    return ctx


def prep_coords_keys(in_coords_key, out_coords_key):
    in_coords_key = in_coords_key \
        if in_coords_key else ffi.new('uint64_t *', 0)
    out_coords_key = out_coords_key \
        if out_coords_key else ffi.new('uint64_t *', 0)
    return in_coords_key, out_coords_key


class RegionType(Enum):
    """
    Define the kernel region type
    """
    HYPERCUBE = 0, 'HYPERCUBE'
    HYPERCROSS = 1, 'HYPERCROSS'
    CUSTOM = 2, 'CUSTOM'
    HYBRID = 3, 'HYBRID'

    def __new__(cls, value, name):
        member = object.__new__(cls)
        member._value_ = value
        member.fullname = name
        return member

    def __int__(self):
        return self.value


def get_kernel_volume(region_type, kernel_size, region_offset, axis_types,
                      dimension):
    """
    when center is True, the custom region_offset will be centered at the
    origin. Currently, for HYPERCUBE, HYPERCROSS with odd kernel sizes cannot
    use center=False.
    """
    if region_type == RegionType.HYPERCUBE:
        assert region_offset is None, "Region offset must be None when region_type is given"
        assert axis_types is None, "Axis types must be None when region_type is given"
        # Typical convolution kernel
        assert torch.prod(kernel_size > 0) == 1

        # Convolution kernel with even numbered kernel size not defined.
        kernel_volume = int(torch.prod(kernel_size))

    elif region_type == RegionType.HYPERCROSS:
        assert torch.prod(kernel_size > 0) == 1, "kernel_size must be positive"
        assert (
            kernel_size %
            2).prod() == 1, "kernel_size must be odd for region_type HYPERCROSS"
        # 0th: itself, (1, 2) for 0th dim neighbors, (3, 4) for 1th dim ...
        kernel_volume = int(torch.sum(kernel_size - 1) * dimension + 1)

    elif region_type == RegionType.HYBRID:
        assert region_offset is None, \
            "region_offset must be None when region_type is HYBRID"
        kernel_size_list = kernel_size.tolist()
        kernel_volume = 1
        # First HYPERCUBE
        for axis_type, curr_kernel_size, d in \
                zip(axis_types, kernel_size_list, range(dimension)):
            if axis_type == RegionType.HYPERCUBE:
                kernel_volume *= curr_kernel_size

        # Second, HYPERCROSS
        for axis_type, curr_kernel_size, d in \
                zip(axis_types, kernel_size_list, range(dimension)):
            if axis_type == RegionType.HYPERCROSS:
                kernel_volume += (curr_kernel_size - 1)

    elif region_type == RegionType.CUSTOM:
        assert region_offset.numel(
        ) > 0, "region_offset must be non empty when region_type is CUSTOM"
        assert region_offset.size(
            1
        ) == dimension, "region_offset must have the same dimension as the network"
        kernel_volume = int(region_offset.size(0))

    else:
        raise NotImplementedError()

    return kernel_volume


def convert_region_type(region_type,
                        pixel_dist,
                        kernel_size,
                        up_stride,
                        dilation,
                        region_offset,
                        axis_types,
                        dimension,
                        center=True):
    """
    when center is True, the custom region_offset will be centered at the
    origin. Currently, for HYPERCUBE, HYPERCROSS with odd kernel sizes cannot
    use center=False.

    up_stride: stride for conv_transpose, otherwise set it as 1
    """
    if region_type == RegionType.HYPERCUBE:
        assert region_offset is None, "Region offset must be None when region_type is given"
        assert axis_types is None, "Axis types must be None when region_type is given"
        # Typical convolution kernel
        assert torch.prod(kernel_size > 0) == 1
        assert torch.unique(dilation).numel() == 1

        # Convolution kernel with even numbered kernel size not defined.
        if (kernel_size % 2).prod() == 1:  # Odd
            kernel_volume = int(torch.prod(kernel_size))
        else:  # At least one of the edge is even
            iter_args = []
            for d in range(dimension):
                off_center = int(math.floor(
                    (kernel_size[d] - 1) / 2)) if center else 0
                off = (dilation[d] * (pixel_dist[d] / up_stride[d]) * (
                    torch.arange(kernel_size[d]).int() - off_center)).tolist()
                iter_args.append(off)

            region_type = RegionType.CUSTOM
            region_offset = list(product(*iter_args))
            region_offset = torch.IntTensor(region_offset)
            kernel_volume = int(region_offset.size(0))

    elif region_type == RegionType.HYPERCROSS:
        assert torch.prod(kernel_size > 0) == 1, "kernel_size must be positive"
        assert (
            kernel_size %
            2).prod() == 1, "kernel_size must be odd for region_type HYPERCROSS"
        # 0th: itself, (1, 2) for 0th dim neighbors, (3, 4) for 1th dim ...
        kernel_volume = int(torch.sum(kernel_size - 1) * dimension + 1)

    elif region_type == RegionType.HYBRID:
        assert region_offset is None, \
            "region_offset must be None when region_type is HYBRID"
        region_offset = [[
            0,
        ] * dimension]
        kernel_size_list = kernel_size.tolist()
        # First HYPERCUBE
        for axis_type, curr_kernel_size, d in \
                zip(axis_types, kernel_size_list, range(dimension)):
            new_offset = []
            if axis_type == RegionType.HYPERCUBE:
                for offset in region_offset:
                    for curr_offset in range(curr_kernel_size):
                        off_center = int(
                            math.floor(
                                (curr_kernel_size - 1) / 2)) if center else 0
                        offset = offset.copy()  # Do not modify the original
                        # Exclude the coord (0, 0, ..., 0)
                        if curr_offset == off_center:
                            continue
                        offset[d] = (curr_offset - off_center) * \
                            dilation[d] * (pixel_dist[d] / up_stride[d])
                        new_offset.append(offset)
            region_offset.extend(new_offset)

        # Second, HYPERCROSS
        for axis_type, curr_kernel_size, d in \
                zip(axis_types, kernel_size_list, range(dimension)):
            new_offset = []
            if axis_type == RegionType.HYPERCROSS:
                for curr_offset in range(curr_kernel_size):
                    off_center = int(math.floor(
                        (curr_kernel_size - 1) / 2)) if center else 0
                    offset = [
                        0,
                    ] * dimension
                    # Exclude the coord (0, 0, ..., 0)
                    if curr_offset == off_center:
                        continue
                    offset[d] = (curr_offset - off_center) * \
                        dilation[d] * (pixel_dist[d] / up_stride[d])
                    new_offset.append(offset)
            region_offset.extend(new_offset)

        # Convert to CUSTOM type
        region_type = RegionType.CUSTOM
        region_offset = torch.IntTensor(region_offset)
        kernel_volume = int(region_offset.size(0))

    elif region_type == RegionType.CUSTOM:
        assert region_offset.numel(
        ) > 0, "region_offset must be non empty when region_type is CUSTOM"
        assert region_offset.size(
            1
        ) == dimension, "region_offset must have the same dimension as the network"
        kernel_volume = int(region_offset.size(0))

    else:
        raise NotImplementedError()

    if region_offset is None:
        region_offset = torch.IntTensor()

    return region_type, region_offset, kernel_volume


class SparseModuleBase():

    def clear(self):
        """ Must be run after each new data instance. """
        self.out_coords_key[0] = 0


class NetMetadata(object):

    def __init__(self, D, ptr=0):
        self.D = D
        self.ffi = ffi.new('void *[1]')
        ME.write_ffi_ptr(ptr, self.ffi)

    def clear(self):
        """
        Clear all coordinates and convolution maps
        """
        ME.clear(self.D, self.ffi)
