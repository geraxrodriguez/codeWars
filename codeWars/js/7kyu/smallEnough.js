// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// P: 2 parameters, an array and a limit. Are all the values in the array ints? I believe so. Is the limit value an int? I also believe so.
// R: if every num in array is either below or equal to our limit, return true. else, false
// E: smallEnought([1, 2], 3) => true, smallEnough([1, 4], 3) => false


function smallEnough(a, limit){
    // use .every(). Will return true or false if EVERY element passes the test of the provided func
    return a.every( num => num <= limit )
}