// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?

// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    var matches = {                                   // defining the matches 
      '(':')', 
      '{':'}', 
      '[':']' 
    };
    var stack = [];                                   // empty array
    var currentChar;                                  
  
    for (var i=0; i<braces.length; i++) {             // looping through parameter string
      currentChar = braces[i];                        
  
      if (matches[currentChar]) {                     // if     '(':')', '{':'}', OR '[':']' exist in obj
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }
  
  // ([{}])
  
  // first iteration, currentChar === (, and it exists in our obj so stack = ['(']
  // 2nd, currentChar === [, it exists, stack = [ '(', '[' ]
  // 3rd, currentChar === {, it exists, stack = stack = [ '(', '[', '{' ]
  
  // 4th, currentChar === }. Does matches['}'] exist? No, so now...
  // stack.pop() === '{', matches[''{'] === }
  // currentChar !== } ? false, they're equal, so continue to next iteration
  
  
  
  
  
  
  
  
  