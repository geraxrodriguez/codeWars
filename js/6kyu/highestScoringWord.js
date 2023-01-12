// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// P: 1 parameter, a string
  // string will have multiple words
  // only letters
  // only lowercase
  // each letter has a numericaly value, starting with a = 1
// R: word with highest score
  // calculate score for every word
// E: 
// P: 

function high(x){
    // charCode at - 96 gives u letters position in alphabet
    
    let scores = x
      .split(' ')                                                    // separates str into array of words
      .slice()                                                       // creates copy so we don't mutate original
      .map(word => word
                    .split('')                                       // splits each word into its own lil array of letters
                    .reduce((a, c) => a + (c.charCodeAt() - 96), 0)  // reduce each lil array of letters into its score
          ) 
  
    let sortedScores = scores
                        .slice()                                     // creates copy of scores, we'll need to preserve order of scores to check for original index
                        .sort((a,b) => a - b)                        // sorts our copy, highest score will be last element
    
    let indexOfWinner = scores.indexOf(sortedScores[sortedScores.length - 1])   // finds index of highest score in our unsorted scores 
    
    return x.split(' ')[indexOfWinner]                               // finds word at that same index in our original str split into an array
}

// spread operator should be called the smooth operator
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}