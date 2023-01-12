// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// P: 2 parameters which will be strings. Only letters from a-z. 
// R: return 1 string. contains distinct letters meaning only one of each letter, from s1 and s2. 
// E:
// S
function longest(s1, s2) {
    const str = s1.concat('',s2)              // combine strings
    const letters = [];                       // create placeholder array for adding letters
    for (let i = 0; i < str.length; i++){     // loop through string
      if ( !letters.includes(str[i]) ){
        letters.push(str[i])                  // push letter if it's not already in our placeholder array
      }
    }
    return letters.sort().join('')            // sort alphabetically, join to form one string, and return
}

// Not mine
// Set() will only store unique values
// putting it in brackets makes it into array
// spread operator expands the elements into array
return [...new Set(s1 + s2)].sort().join('')
