#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination.

Goal:
- Return a stable page even if some rows were deleted between requests.
- Collect the first `page_size` existing items starting from logical `index`,
  skipping missing keys in the indexed dataset.
- Return `next_index` as the logical position to continue from on the next call.
"""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> dict:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]  # kept as in starter; not used intentionally
            self.__indexed_dataset = {i: dataset[i] for i in range(len(dataset))}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> dict:
        """Return a deletion-resilient page and the next index to continue from."""
        if index is None:
            index = 0

        assert isinstance(index, int) and index >= 0
        original_len = len(self.dataset())
        assert index < original_len

        indexed = self.indexed_dataset()
        data_page = []
        i = index
        collected = 0

        while collected < page_size and i < original_len:
            row = indexed.get(i)
            if row is not None:
                data_page.append(row)
                collected += 1
            i += 1

        return {
            "index": index,
            "data": data_page,
            "page_size": len(data_page),
            "next_index": i
        }
