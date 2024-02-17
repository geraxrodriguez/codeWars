// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// P: 1 param, a string
  // only letters
  // can be empty
// R: return true or false
  // an isogram is a word that has no repeating letters

  function isIsogram(str){
    str = str.toLowerCase()
    let letters = []                        // placeholder array
    for (let i = 0; i < str.length; i++){   
      if (letters.includes(str[i])){        // if current letter from str is in our letters array
        return false                        // then we'll return false
      }
      letters.push(str[i])                  // if not, push it to letters
    }
    return true
}
// feel like my solution for this was very elementary


// .size === .length but for sets
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}