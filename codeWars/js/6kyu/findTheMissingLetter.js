// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// P: array of letters
    // alphabetical order
    // array has at least length of 2
    // only 1 letter is missing
    // uppercase or lowercase
    // only letters in english alphabet
    // any duplicate letters?
// R: the missing letter
// E: 
// P: 

const arrInQuestion = 'BCDEG'.split('')

function findMissingLetter(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  
  for (let i = 0; i < alphabet.length; i++) {   
    if (alphabet[i].toLowerCase() === array[0].toLowerCase()) {            // find where array starts
                                              
      for (let j = 0; j < array.length; j++){                              // loop through array
        if (alphabet[i+j].toLowerCase() !== array[j].toLowerCase()){       // we use [i+j] to make sure we are looping through corresponding letters in alphabet with our array
          return array[0] === array[0].toLowerCase() ? alphabet[i+j] : alphabet[i+j].toUpperCase()  // since our alphabet variable is in lowercase, we need to convert                                                                                                    
        } // end conditional                                                                        // missing letter into UpperCase if letters in original array were Uppercase
      } //end j for loop
 
    } // end first conditional
  }// end for loop
}

const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
  };