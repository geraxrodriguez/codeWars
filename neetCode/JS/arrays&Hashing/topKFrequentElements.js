// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// 79 ms 30.31%
// 53.22 MB35.95%
// P: 2, an array and an integer
    // array is 'nums', doesn't say if elements are only nums
    // an integer, k, is number of elements i need to return
// R: return the 'k' elements that appear the most times
// E:
// P: 
var topKFrequent = function(nums, k) {
    let count = {}
    for (let i = 0; i < nums.length; i++) {
        // if doesn't exist inside count obj, then create it with value @ 0
        if (!count[ nums[i] ]) {
            count[ nums[i] ] = 0
        }
        // add 1 to it
        count[nums[i]]++    
    }
    return Object
            .entries(count)             // transforms obj props into array of arrays
            .sort((a,b) => b[1] - a[1]) // sorts them based off count
            .slice(0, k)                // get array from first to k elements
            .map(l => l[0])             // return the actual num

};