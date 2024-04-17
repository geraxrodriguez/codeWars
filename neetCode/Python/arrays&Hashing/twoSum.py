class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # create map
        map = {}
        # loop through our numbers, 
        for i, num in enumerate(numbers):
            # find difference between target and current number
            diff = target - num
            # is diff in our map? then get its value, which === its index
            # return it along with our current index, add 1 to both
            if diff in map:
                return [map[diff] + 1, i + 1]
            # else, add it our map in value: index format
            map[num] = i

solution = Solution()
solution.twoSum([2, 7, 11, 15], 9)