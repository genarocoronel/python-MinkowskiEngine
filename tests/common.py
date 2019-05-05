import numpy as np

import torch


def get_coords(data, batch_index=0):
    coords = []
    for i, row in enumerate(data):
        for j, col in enumerate(row):
            if col != ' ':
                coords.append([i, j, batch_index])
    return coords


def data_loader(in_feat_channel=3,
                max_label=5,
                is_classification=True,
                seed=-1,
                batch_size=2):
    data = ["   X   ", "  X X  ", " XXXXX "]

    coords = get_coords(data, 0)
    if batch_size > 1:
        coords.extend(get_coords(data, 1))
    if seed >= 0:
        torch.manual_seed(seed)
    coords = torch.from_numpy(np.array(coords)).int()
    N = len(coords)
    feats = torch.randn(N, in_feat_channel)
    label = (torch.rand(2 if is_classification else N) * max_label).long()
    return coords, feats, label
