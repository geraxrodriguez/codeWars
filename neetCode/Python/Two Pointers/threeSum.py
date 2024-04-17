class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        output = []
        for i, num in enumerate(nums):
            if (i > 0 and num == nums[i - 1]):
                continue
            
            # two sum
            l = i + 1
            r = len(nums) - 1
            while l < r:
                threeSum = num + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    output.append([ num, nums[l], nums[r] ])
                    l += 1
                    while (nums[l] == nums[l - 1] and l < r):
                        l += 1
            
        return output