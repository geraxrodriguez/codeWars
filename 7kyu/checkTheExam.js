// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// P: 2 parameters. array1 and array2. Judging by examples, only strings of a single letter are used for each array element
    // array1 is contains the correct answers to the exam
    // array2 is a students answers. might contain blank answers
    // both are the same length
    // correct answer == +4
    // incorrect == -1
    // blank == 0
// R: Return students score. If < 0, return 0.
// E: checkExma(['a','a','b','b'], ['a','c','b','d']) => 6

function checkExam(array1, array2) {
    let score = 0;
    for (let i=0; i < array1.length; i++) {                       // compare current element in array1 w/ array2
      if (array2[i] == ""){
        score += 0
      }
      else if (array1[i] == array2[i]){
        score += 4;                                               // if they are same, add 4 to counter
      }
      else { 
        score -= 1;                                               // if different, -1
      }
    }
    
    return score < 0 ? 0 : score ;                                // return score
}
  