// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// not mine, tad bit betta
function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
}

"use strict";
// P: 1 paramater, an 2d array of arrays, that only contain integers, and blanks.
// R: Return the flattened array, meaning one single array with just integers, sorted ascending
// E: 
// P: 

// mine
function flattenAndSort(array) {
  let sorted = []
  array.forEach(arr => sorted = sorted.concat(arr))
  
  return sorted.sort((a,b) => a-b)
}