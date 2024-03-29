class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        pointerOne = 0
        pointerTwo = len(numbers) - 1
        while pointerOne < pointerTwo:
            sum = numbers[pointerOne] + numbers[pointerTwo]
            if sum == target:
                return [pointerOne + 1, pointerTwo + 1]
            elif sum < target:
                pointerOne += 1
            else:
                pointerTwo -= 1