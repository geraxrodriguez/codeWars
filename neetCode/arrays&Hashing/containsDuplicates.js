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

//3/20/24: Re-solved w/out looking at solutions. Didn't even remember how I had solved before, but solution today was the one below. I'm a beast
//avg run time 77ms, beats 77%
//avg memory 62MB, beats 50%
var containsDuplicate = function(nums) {
    let s = new Set(nums)
    return s.size !== nums.length
};

//a different, not-better way to solve this
var containsDuplicate = function(nums) {
    const numbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (numbers.includes(nums[i])) {continue;}
        numbers.push(nums[i])
    }
    return numbers.length !== nums.length
}
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))