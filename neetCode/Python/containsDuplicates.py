class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # create map
        seen = {}

        # iterate through each num in nums
        for num in nums:
            if num in seen and seen[num] >= 1:
                return True
            seen[num] = seen.get(num, 0) + 1
        return False

        # above can be refracoted to this
        for num in nums:
            if num in seen:
                return True
            seen[num] = 1
        return False

        
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # create map
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
