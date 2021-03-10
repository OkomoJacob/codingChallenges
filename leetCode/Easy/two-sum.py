"""
Given an array of integers(nums), return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution

Maintain a mapping from from each number to it's index
Check if targetr - num has already been found
Time -0(n)
Space - 0(n) for the dictionary
EXAMPLE:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

"""
from typing import List
class Solution(object):
    def twoSum(self, nums : List[int], target : int) -> List[int]:
        # key is number, value is index in nums
        
        num_to_index = {}
        for x, num in enumerate(nums):
            if target - num in num_to_index:
                return [num_to_index[target - num], x]

            num_to_index[num] = x
        return [] #no sum
