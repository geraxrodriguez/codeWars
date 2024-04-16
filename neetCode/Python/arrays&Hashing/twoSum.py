class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        map = {}
        for i, num in enumerate(numbers):
            # find diff
            diff = target - num
            # is diff in our map? If true, get value of property
            # return it along with our current index
            if diff in map:
                return [map[diff] + 1, i + 1]
            # else, add it our map in value: index format
            map[num] = i



solution = Solution()
solution.twoSum([2, 7, 11, 15], 9)