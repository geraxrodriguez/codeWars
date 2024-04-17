// P: 1 param. an array of nums
// R: Find all pair of 3 nums that add up to be 0 and return them all
    // a solution set cannot contain same element, but can contain same numbers
    // return as each set as an array
// threeSum([-1,0,1,2,-1,-4]) => [[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
    // sort to move along nums array from left to right, only having to consider numbers ahead of current number and not behind
    nums.sort((a,b) => a - b)

    output = [];
    for (let i = 0; i <= nums.length - 3; i++) {
        if (i > 0 && (nums[i] == nums[i - 1])) {
            continue;
        }

        lp = i + 1;
        rp = nums.length - 1;
        while (lp < rp) {
            // if sum > target, decrease rp
            // if sum < target, increase lp
            // else, we have match, push all them mfs, as an array, to our output
            const threeSum = nums[i] + nums[lp] + nums[rp]
            if (threeSum > 0){
                rp -= 1
            }
            else if (threeSum < 0){
                lp += 1
            }
            else {
                output.push( [nums[i], nums[lp], nums[rp]] )
                lp += 1
                while (nums[lp] == nums[lp - 1] && lp < rp) {
                    lp += 1;
                }
            }
        }
    }
    return output
};