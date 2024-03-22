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
    if (nums.length === 0) { return 0 }

    nums.sort((a, b) => a - b);

    let count = 1;
    let max = 0;

    // looks like don't matter if we start i = 0 or i = 1, but runs faster if we
    // start i at 1
    for (let i = 1; i < nums.length; i++) {

        // move to next num if previous is same num
        if (nums[i] === nums[i-1]) { continue; }

        // if previous num is one less than current num
        if (nums[i] === nums[i-1] + 1) {
            count++;
        }
        // else the seq has ended, compare against max and reset count
        else {
            max = Math.max(max, count);
            count = 1;
        }

    }

    return Math.max(max, count)
};
// 3/10

var longestConsecutive = function(nums) {
    if (nums == null || nums.length === 0) { return 0 };
    const set = new Set(nums);
    let max = 0;
    
    for (let num of set) {
        if (set.has(num - 1)) { continue; } // if current num not start of a sequence
        
        let currNum = num;
        let currMax = 1;
        while (set.has(currNum + 1)) {
            currNum++;
            currMax++;
        }

        max = Math.max(max, currMax);
    }

    return max
}
// 3/12