var twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1
    while (p1 < p2) {
        const sum = numbers[p1] + numbers[p2]
        if (sum == target){
            return [p1 + 1, p2 + 1]
        }
        else if (sum < target) {
            p1 += 1
        }
        else {
            p2 -= 1
        }
    }
};

//want solution to skip to where pointer 2 is less than target
var twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1
    while (p1 < p2) {
        //want to start pointer two at elements only less than or equal to target
        if (numbers[p2] > target) {
            p2 -= 1;
        }

        //
        else {
            const sum = numbers[p1] + numbers[p2]
            if (sum == target){
                return [p1 + 1, p2 + 1]
            }
            else if (sum < target) {
                p1 += 1
            }
            else {
                p2 -= 1
            }
        }

    }
};

//resolved 4/14/24