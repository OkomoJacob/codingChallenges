'''56. Given a collection of intervals, merge all overlapping intervals
Example 1: 
    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6]

Exampl 2:
    Input: intervals = [[1,4],[4,5]]
    Output: [1,5]
    Explanation: Since intervals [1,4] and [4,5] overlaps, merge them into [1,5]
'''
class Solution:
    #0(1) space | time - not sure; concidr .sort()
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        #sort
        intervals.sort(key=lambda item: item[0])
        i = 0
        # needless to check the last array
        while (i + 1) < len(intervals):
            curr_a = intervals[i]
            next_a = intervals[i+1]

            #check overlap
            if curr_a[1] >= next_a[0]:

                # merge, we use next due do cases like [[1,4],[2,3]]
                # sort the array in ascending order
                intervals[i][1] = max(curr_a[1],next_a[1])

                # delete the second array
                intervals.pop(i+1)

            else:
                i += 1
        return intervals


