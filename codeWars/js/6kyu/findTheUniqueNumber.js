// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// P: 1 parameter, an array
  // array is at least three in length
  // only numbers in array
  // can be ints or floats
  // only 1 number not the same as the rest
  // can possibly be negative or positive
// R: Return the unique number
// E:
// P: 

function findUniq(arr) {
    let nums = {}                               // create obj to count our numbers' appearances
    arr.forEach(num => {
      nums[num] ? nums[num]++ : nums[num] = 1   // if number exists in obj, add +1 to its value
    })
    
    for (const [key, value] of Object.entries(nums)) { 
      if (value === 1){ return Number(key) }    // find number that occurred one time and return it
    }
}

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}