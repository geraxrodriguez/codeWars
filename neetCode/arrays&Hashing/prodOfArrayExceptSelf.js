// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// P: 1 param, an array of numbers
 // R: return array of answers for each number
    // each answer is product of all elements in array exluding our current number 
var productExceptSelf = function(nums) {
    let answers = []
    for (let i = 0; i < nums.length; i++) {
        let prod = 1
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                prod *= nums[j]
            }
        }
        answers.push(prod)
    }
    return answers
};