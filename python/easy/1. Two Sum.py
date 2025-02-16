# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

from typing import List

def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Finds two indices in the list such that the corresponding numbers add up to the target.
    Uses a hashmap (dictionary) to achieve O(n) time complexity.
    """
    num_map = {}  # Dictionary to store numbers and their indices
    for i, num in enumerate(nums):
        complement = target - num  # Find the complement that would sum to target
        if complement in num_map:
            return [num_map[complement], i]  # Return indices if complement found
        num_map[num] = i  # Store the index of the current number
    return []  # No valid answer (should not happen as per problem constraints)

# Test Cases
def test_two_sum():
    assert two_sum([2, 7, 11, 15], 9) == [0, 1], "Test Case 1 Failed"
    assert two_sum([3, 2, 4], 6) == [1, 2], "Test Case 2 Failed"
    assert two_sum([3, 3], 6) == [0, 1], "Test Case 3 Failed"
    print("All test cases passed!")

# Run tests
test_two_sum()
