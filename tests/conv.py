import torch
import unittest

from MinkowskiEngine import SparseTensor, MinkowskiConvolution, MinkowskiConvolutionFunction, \
    MinkowskiConvolutionTranspose, MinkowskiConvolutionTransposeFunction, initialize_nthreads

from tests.common import data_loader
from utils.gradcheck import gradcheck


class TestConvolution(unittest.TestCase):

    def test_gpu(self):
        if not torch.cuda.is_available():
            return
        in_channels, out_channels, D = 2, 3, 2
        coords, feats, labels = data_loader(in_channels)
        feats = feats.double()
        feats.requires_grad_()
        input = SparseTensor(feats, coords=coords)
        # Initialize context
        conv = MinkowskiConvolution(
            in_channels,
            out_channels,
            kernel_size=3,
            stride=2,
            has_bias=True,
            dimension=D)
        print(conv)
        conv = conv.double()
        output = conv(input)
        print(output)

        device = torch.device('cuda')
        input = input.to(device)
        conv = conv.to(device)
        output = conv(input)
        print(output)
        print(output.F, output.coords)

        # Check backward
        fn = MinkowskiConvolutionFunction()

        grad = output.F.clone().zero_()
        grad[0] = 1
        output.F.backward(grad)

        self.assertTrue(
            gradcheck(fn, (input.F, conv.kernel, input.tensor_stride,
                           conv.stride, conv.kernel_size, conv.dilation,
                           conv.region_type_, conv.region_offset_,
                           input.coords_key, None, input.coords_man)))

    def test(self):
        in_channels, out_channels, D = 2, 3, 2
        coords, feats, labels = data_loader(in_channels)
        feats = feats.double()
        feats.requires_grad_()
        input = SparseTensor(feats, coords=coords)
        # Initialize context
        conv = MinkowskiConvolution(
            in_channels,
            out_channels,
            kernel_size=3,
            stride=2,
            has_bias=True,
            dimension=D)
        conv = conv.double()
        output = conv(input)
        print(output)

        print(conv.region_offset_)
        kernel_map = input.coords_man.get_kernel_map(
            1, 2, stride=2, kernel_size=3)
        print(kernel_map)

        # Check backward
        fn = MinkowskiConvolutionFunction()

        self.assertTrue(
            gradcheck(fn, (input.F, conv.kernel, input.tensor_stride,
                           conv.stride, conv.kernel_size, conv.dilation,
                           conv.region_type_, conv.region_offset_,
                           input.coords_key, None, input.coords_man)))


class TestConvolutionTranspose(unittest.TestCase):

    def test_gpu(self):
        if not torch.cuda.is_available():
            return

        device = torch.device('cuda')
        in_channels, out_channels, D = 2, 3, 2
        coords, feats, labels = data_loader(in_channels)
        feats = feats.double()
        feats.requires_grad_()
        input = SparseTensor(feats, coords=coords).to(device)
        # Initialize context
        conv = MinkowskiConvolution(
            in_channels,
            out_channels,
            kernel_size=3,
            stride=2,
            has_bias=True,
            dimension=D).to(device)
        conv = conv.double()
        conv_tr = MinkowskiConvolutionTranspose(
            out_channels,
            in_channels,
            kernel_size=3,
            stride=2,
            has_bias=True,
            dimension=D).to(device)
        conv_tr = conv_tr.double()
        input = conv(input)
        output = conv_tr(input)
        print(output)

        # Check backward
        fn = MinkowskiConvolutionTransposeFunction()

        self.assertTrue(
            gradcheck(fn,
                      (input.F, conv_tr.kernel, input.tensor_stride,
                       conv_tr.stride, conv_tr.kernel_size, conv_tr.dilation,
                       conv_tr.region_type_, conv_tr.region_offset_,
                       input.coords_key, None, input.coords_man)))

    def test(self):
        in_channels, out_channels, D = 2, 3, 2
        coords, feats, labels = data_loader(in_channels)
        feats = feats.double()
        feats.requires_grad_()
        input = SparseTensor(feats, coords=coords)
        # Initialize context
        conv = MinkowskiConvolution(
            in_channels,
            out_channels,
            kernel_size=3,
            stride=2,
            has_bias=True,
            dimension=D)
        conv = conv.double()
        conv_tr = MinkowskiConvolutionTranspose(
            out_channels,
            in_channels,
            kernel_size=2,
            stride=2,
            has_bias=True,
            dimension=D)
        conv_tr = conv_tr.double()
        input = conv(input)
        output = conv_tr(input)
        print(output)

        # Check backward
        fn = MinkowskiConvolutionTransposeFunction()

        self.assertTrue(
            gradcheck(fn,
                      (input.F, conv_tr.kernel, input.tensor_stride,
                       conv_tr.stride, conv_tr.kernel_size, conv_tr.dilation,
                       conv_tr.region_type_, conv_tr.region_offset_,
                       input.coords_key, None, input.coords_man)))


if __name__ == '__main__':
    initialize_nthreads(3, D=2)
    unittest.main()
