// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

solution = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
    return s;
}
// had no idea a ternary could take two conditions
function solution(number){
    if (number < 0) {return 0}
    
    let multiples = []
    for (let i = 1; i < number; i++){
      if (i % 3 == 0 || i % 5 == 0){
        multiples.push(i)
      }
    }
    return multiples.reduce((acc,curr)=> acc + curr, 0)
  }