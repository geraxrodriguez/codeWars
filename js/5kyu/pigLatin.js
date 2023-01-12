// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// P: string of words. No nums. but there can be other characters
// R: make first letter of each word the last letter, then add ay to the end of each word
// E: pigIt('Hello world !') => elloHay orldway

// strings are immutable, we must create a new one, or turn into an array

function pigIt(str){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let arr = str.split(' ')                            // split the str into an array by the spaces
    return arr = arr.map(word => {                      // split by nothing
      if (alpha.includes(word[0].toLowerCase())){       // check if element is word
        word = word.split('')                           // every word now an array
        word.push(`${word.shift()}ay`)                  // shift() returns first element of an array, and push adds elemenet to end of array
        return word.join('')                            // ['e', 'l', 'l', 'o', 'Hay'] => 'elloHay'
      }
      return word                                       // this is for element in string that weren't words, such as punctuation marks
    })
    .join(' ')                                          // ['elloHay', 'orldway', '!'] => 'elloHay orldway !'
}
  