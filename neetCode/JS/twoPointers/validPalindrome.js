//A string is a palindrome if, after making all letters lowercase and removing any characters that are non-aplhanumeric, it reads same forward and backward.
//P: 1 parameter, a string
//might be empty
//is going to have spaces, letters, nums, punctuation
//R: Return true or false
//true if string param is palindrome
//else, false
//E: s = "A man, a plan, a canal: Panama" => true, s = '', true
//P: 

// ~67 MS
var isPalindrome = function (s) {
    const forward = [];
    const backward = [];

    //loop through s forward
    for (let i = 0; i < s.length; i++) {
        //if element doesn't fall between certain character code, skip
        const code = s[i].charCodeAt()
        if ((48 <= code && code <= 57) || (65 <= code && code <= 90) || (97 <= code && code <= 122)) {
            forward.push(s[i])
        }
    }

    //loop backwards, doing same as above but pushing to our backwards array
    for (let i = s.length - 1; 0 <= i; i--) {
        //if element doesn't fall between certain character code, skip
        const code = s[i].charCodeAt()
        if ((48 <= code && code <= 57) || (65 <= code && code <= 90) || (97 <= code && code <= 122)) {
            backward.push(s[i])
        }
    }

    //we must combine each array into strings, lowercase, and see if they are equal
    return backward.join('').toLowerCase() == forward.join('').toLowerCase()
};

//62MS
var isPalindrome = function (s) {
    const forward = [];
    const backward = [];

    //loop through s forward
    for (let i = 0; i < s.length; i++) {
        //if element doesn't fall between certain character code, skip
        const forwardL = s[i]
        const backwardL = s[s.length - i - 1]
        const code1 = forwardL.charCodeAt()
        const code2 = backwardL.charCodeAt()
        if ((48 <= code1 && code1 <= 57) || (65 <= code1 && code1 <= 90) || (97 <= code1 && code1 <= 122)) {
            forward.push(forwardL)
        }
        if ((48 <= code2 && code2 <= 57) || (65 <= code2 && code2 <= 90) || (97 <= code2 && code2 <= 122)) {
            backward.push(backwardL)
        }
    }

    //we must combine each array into strings, lowercase, and see if they are equal
    return backward.join('').toLowerCase() == forward.join('').toLowerCase()
};


var isPalindrome = function (s) {
    const forward = [];
    const backward = [];

    //loop through s forward
    for (let i = 0; i < s.length; i++) {
        //if element doesn't fall between certain character code, skip
        const forwardL = s[i]
        const backwardL = s[s.length - i - 1]
        const code1 = forwardL.charCodeAt()
        const code2 = backwardL.charCodeAt()
        if (checkCode(code1)) {
            forward.push(forwardL)
        }
        if (checkCode(code2)) {
            backward.push(backwardL)
        }
    }

    //we must combine each array into strings, lowercase, and see if they are equal
    return backward.join('').toLowerCase() == forward.join('').toLowerCase()
};

function checkCode(n) {
    if ((48 <= n && n <= 57) || (65 <= n && n <= 90) || (97 <= n && n <= 122)) {
        return true
    }
    return false
}

function isPalindrome(s) {
    // if length of string == 1, return true
    if (s.length == 1) { return true; }
  
    // establish number for left pointer
    // establish number for right pointer
    let leftP = 0;
    let rightP = s.length - 1;
  
    // while pL < pR
    while (leftP < rightP) {
      // if pL not alphanumeric, skip and move up one
      if (!isAlphanumeric( s[leftP] )) { leftP++; }
      // else if pR not alphanumeric, move pR down 1
      else if (!isAlphanumeric( s[rightP] )) { rightP--; }
      // else, if pL not equal to pR, return false
      else {
        if (s[leftP].toLowerCase() == s[rightP].toLowerCase()) {
          leftP++;
          rightP--;
        } else {
          return false;
        }
      }
  
    }
  
    // if loop completes, then s is palindrome
    return true
  }
  
  function isAlphanumeric(c) {
    const cc = c.charCodeAt();
    if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(isPalindrome("Was it a car or a cat I saw?"))
  console.log(isPalindrome("tab a cat"))
  console.log(isPalindrome('racecar'))