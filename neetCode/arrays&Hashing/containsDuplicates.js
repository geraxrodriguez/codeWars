// Easy
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = [...new Set(nums)]
    return arr.length === nums.length ? false : true
};

// Could simplify by not having to turn the set back into array to get length
// instead can just use .size method of Set, to get number of elements in our set
// what really speeded up solution was doing '!=='
var containsDuplicate = function(nums) {
    let s = new Set(nums)
    return s.size !== nums.length
};