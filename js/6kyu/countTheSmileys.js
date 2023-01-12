// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces:  ;( :> :} :]

// P: 1 parameter. An array. It's gonna contain smileys. Order of each face will always be eyes, maybe nose, and mouth. Never any other order
    // must contain either : or ;
    // can have nose ~ or -, but it doesnt have to
    // must have mouth, ) or D
// R: Return the total number of smiling faces
// E: 

function countSmileys(arr) {
    let counter = 0;                        // counter 
    arr.forEach(smiley => {  // loop through each face, one by one
      
      if (smiley.length === 3){
        if ( (smiley.includes(':') || smiley.includes(';')) && (smiley.includes('-') || smiley.includes('~')) && (smiley.includes(')') || smiley.includes('D')) ) {
          counter++
        }
      } else if (smiley.length === 2) {
          if ( (smiley.includes(':') || smiley.includes(';')) && (smiley.includes(')') || smiley.includes('D')) ) {
            counter++
        }
      }
      
    })
    return counter
  
}

// I'm a baddie n i write bad code