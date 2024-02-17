// Write a function that takes a single string (word) as argument. The function must return an ordered list
// containing the indexes of all capital letters in the string.

// P: 1 parameter. A str. Will be one word. Spaces?
// R: Must return an ordered array of numbers, the nums represent the capital letters in the str
// E: 'CodEWaRs' => [0,3,4,6]
// P: 

var capitals = function (word) {
    let capitals = []                           // array to store capital letters  
    for (let i = 0; i < word.length; i++) {     // for loop through each letter in word
      if (word[i] == word[i].toUpperCase()) {   // Check if current letter is equal to the capitalized version of our current letter.
        capitals.push( word.indexOf(word[i]) )  // If it is, push to its index to our 'capitals array'
      };
    };
    return capitals
};