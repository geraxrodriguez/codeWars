// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// mine
// P: 1 parameter.
  // Will be an array
  // only ints in arrry
  // both negative and positive ints
// R: Returning an int that appears and odd # of times
// E:
// P:
function findOdd(A) {
    const counter = {};
    A.forEach(n => 
              counter[n] ?    // does that number exist inside our object?
              counter[n]++ :  // yes? okay, add +1 to it's value, which represents the # of appearances in our given array
              counter[n] = 1  // no? then create it as property in our array
             )
    
    return Number(                                  // must convert it to a number
                    Object.entries(counter)         // counter obj is now an array, each element is a mini array with two elements inside, our key and our value
                    .filter(l => l[1] % 2 == 1)     // second element in our mini arrays represents # of appearances. filtering for the odd number
                    [0]                             // there's only one mini array, stuck inside a larger array => [[x, x]]. index into our mini array and..
                    [0]                             // grab our first value and return
                  )
}

// could've done second half of mine like this person did:
for(key in obj) {
    if(obj[key] % 2 !== 0) return Number(prop);
}

// or the almighty one
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
