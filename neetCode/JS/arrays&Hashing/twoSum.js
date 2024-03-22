// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let output = []
    for (let j = 0; j < nums.length; j++) {
        let num1 = nums[j]
        for (let i = 0; i < nums.length; i++) {
            if (i != j) {
                let num2 = nums[i]
                if (num1 + num2 == target) {
                    output.push(j, i)
                    break;
                }
            }
        }
    if (output.length > 0) { break; }
    }
    return output
};

// Runtime == 100ms (Beats 35%)
// Memory == 49.13 MB (Beats 46%)
var twoSum = function(nums, target) {
    let output = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                    output.push(i, j)
                    return output
            }
        }
    }
};

// Runtime == 102ms 
// Memory == 49.4 MB
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                    return [i, j]
            }
        }
    }
};

// Runtime 30 ms (beats 99%)
// Memory beats 13%
var twoSum = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            console.log(mp)
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};