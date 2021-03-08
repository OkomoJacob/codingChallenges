"""
Given an array of integers(nums), return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution

Maintain a mapping from from each number to it's index
Check if targetr - num has already been found
Time -0(n)
Space - 0(n) for the dictionary
"""
from typing import List
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target : int
        :rtype : List[int]
        """
        # key is number, value is index in nums
        
        num_to_index = {}
        for i, num in enumerate(nums):
            if target - num in num_to_index:
                return [num_to_index[target - num], i]

            num_to_index[num] = i
        return [] #no sum

    nums = input("Enter nums :")