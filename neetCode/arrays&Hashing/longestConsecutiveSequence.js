// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0
    }

    nums.sort((a, b) => a - b);

    let count = 1;
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        const currNum = nums[i]
        const prevNum = nums[i - 1]
        if (currNum !== prevNum) {
            if (prevNum + 1 === currNum) {
                count++
            }
            else {
                max = Math.max(max, count);
                count = 1
            }
        }
    }

    return Math.max(max, count)
};