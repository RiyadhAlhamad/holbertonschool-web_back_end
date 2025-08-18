#!/usr/bin/env python3
"""Helper function for pagination"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Returns a tuple of start and end indexes for a given page and page size.

    Args:
        page (int): Page number (1-indexed)
        page_size (int): Number of items per page

    Returns:
        tuple: (start_index, end_index)
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
