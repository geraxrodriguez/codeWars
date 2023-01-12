// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// P: ! parameter. A string. Will there be multiple words? 
// R: The same string, with vowels taken out, and reversed. No console log. As a string
// E: 
// P:

function reverseLetter(str) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')    // must use .split() to convert into array to eventually call .includes()
    return str
      .split('')                                              // turn into array
      .filter(letter => letters.includes(letter))             // filter out non-letters
      .reverse()                                              // reverse array
      .join('')                                               // join elements with nothing between them
}

// not mine but i was tryna use regex, just didn't know how to negate. Now i know it is used the caret symbol inside the brackets
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// also not mine but learned about the .match() string method, which returns the matches as elements in an array
const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');