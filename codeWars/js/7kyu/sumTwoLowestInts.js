// 

// this was clean, but not my solution
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}

// this is my solution
function sumTwoSmallestNumbers(numbers) {  
    return numbers
      .sort((a,b) => a - b)   // sort in order least to greatest
      .slice(0,2)             // get first two in the now sorted array, 
      .reduce((a,b) => a + b) // add them together
}