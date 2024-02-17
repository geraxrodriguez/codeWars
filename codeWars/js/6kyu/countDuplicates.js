// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// // let duplicates = 0;
  
// // for (let i = 0; i < text.length; i++){    // loop through array

// //   let currentL = text[i].toLowerCase()                  // we are on first letter which is a
// //   let counter = 0;                        // counter for seeing if current letter matches with anything
// //   for (let j = 0; j < text.length; j++){  // loop again
// //     if (currentL == text[j].toLowerCase()){             // if currentL matches with anything, add 1 to counter
// //       counter++
// //     }
// //   }
  
// // //     return counter
  
// //   if (counter > 1){
// //     duplicates++
// //     text = text.replace(currentL,'')     // tryna get rid of letters that have already matched up
// //   }
  
// // }
// // // end of for Loop

// // return duplicates 

// return the amount 

const testString = 'aaabbccde'

function duplicateCount(text){
  let duplicates = text
                    .toLowerCase()
                    .split('')                                                //converts to array
                    .filter((letter,index) => text.indexOf(letter) !== index) // => [a, a, b, c]
  
  duplicates = new Set(duplicates);                                           // set gets rid of duplicates => {a,b,c} 
  return [...duplicates].length                                               // convert to array, use length, and ba-boom
}