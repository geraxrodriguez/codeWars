// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// P(arameters): 1 array. 3 ints inside array. Not in any particular order
// R(eturn): returning one number representing an index. The index of the int that is between the other two
// E: [2, 3, 1] => 0. 
// P:
function gimme (triplet) {
    const tripletCopy = triplet.slice()   // create copy so that original isn't affected
    const middleNum = tripletCopy.sort((a,b) => a-b)[1] // sort first, then grab middle number
    return triplet.indexOf( middleNum ) // return indx of middle number, but using original array
}


// Not mine, but clean. w/ the spread operator
const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};