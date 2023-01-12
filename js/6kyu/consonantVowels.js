// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// Mine
function solve(s) {
    const vowels = 'aeiou'
    for (let i = 0; i < s.length; i++) {  // loop through s, replacing vowels with spaces
      if ( vowels.includes(s[i]) ) {
        s = s.replace(s[i], ' ')          // .replace creates new string, so we must update our old string with this new one
      }
    }
    
    return s
      .split(' ')                                                                        // split s by spaces to get substrings
      .map(sub => sub.split('').reduce((val, lett) => val + lett.charCodeAt() - 96, 0))  // map through each substring, splitting it into letters, reducing it using charCodeAt
      .sort((a,b) => b - a)                                                              // sort by greatest to least so that highest val is first
      [0]
};

// Not mine
function solve(s) {
let highest = 0
let sum = 0

for (const char of s) {
    if (isConsonant(char)) {
    sum += getValue(char)
    
    if (highest < sum) {
        highest = sum
    }
    } else {
    sum = 0
    }
}  

    return highest
};

function getValue(char) {
    return char.charCodeAt(0) - 97 + 1
}

function isConsonant(char) {
    return !'aeiou'.includes(char)
}