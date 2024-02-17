// Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
// The string's tops are from displaying the string in the below way:


//                                          7891012
//                              TUWvXY      6     3
//                    ABCDE     S    Z      5
//            lmno    z   F     R    1      4
//      abc   k  p    v   G     Q    2      3
// .34..9 d...j  q....x   H.....P    3......2
// 125678 efghi  rstuwy   IJKLMNO    45678901
// The next top is always 1 character higher than the previous one. For the above example, the solution for the 123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123 input string is 7891012TUWvXYABCDElmnoabc34.

// When the msg string is empty, return an empty string.
// The input strings may be very long. Make sure your solution has good performance.
// The (.)dots on the sample dispaly of string are only there to help you to understand the pattern
// Check the test cases for more samples.

// P: 1 parameter, a string of letters, numbers, lowercase, uppcase
// R: Return the tops of numbers according to the diagram
    // figured out that tops start with two elements, and then each top is 1 more element than the previous one
    // the distance between the start of the tops are 3 more elements than they were the previous time
// E: 
// P:

function tops(msg) {
  if (msg.length == 0){return ''};
  
  let tops = [];
  let distanceToNextTop = 3;
  let lengthOfCurrentTop = 2;
  
  for (let i = 2; i <= msg.length; i += distanceToNextTop){   // first top starts at index 2
    let currentTop = [];                                      // array to group our current top
    for (let j = 0; j < lengthOfCurrentTop; j++){             // loop through current top, adding each element to our currentTop array
      currentTop.push(msg[i + j]) 
    }
    tops.push(currentTop)                                     // push our current top to our tops array
    lengthOfCurrentTop++                                      // our next top will be +1 more in length than current one
    distanceToNextTop += 4                                    // our next top starts at +4 in distance than our current one was from previous top
  }
  
  return tops
          .reverse()            // need to reverse first to keep correct order
          .join('')             // join them into a str
          .replaceAll(',','')   // get rid of commas
}