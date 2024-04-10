// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!
//P: 1 param, a lowercase string w/ no spaces
//R: return an array with two strings
  //first string is all letters are even indexes are capitalized
  //second is all letters at odd indices capitalized
  function capitalize(s){
    let evens = '';
    let odds = '';
    
    for (let i = 0; i < s.length; i++) {
      const letter = s[i]
      if (i % 2 == 0) {
        evens += letter.toUpperCase()
        odds += letter
      }
      else {
        evens += letter
        odds += letter.toUpperCase()
      }
    }

    return [evens, odds]
  };