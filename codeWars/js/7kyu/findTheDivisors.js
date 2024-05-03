// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// n > 1, no floats
// return array of n's divisors
  // divisor is num that divides into another without remainder
  // don't include 1 and n itself
  // sort array smallest to biggest
  // if n is prime (NO DIVISORS), return '[insert n] is prime'

  const divisors = (n) => {
    // loop from 1 -> n (exclude n), i
    // n / 1 === no remainder, then push i to our divisors arr
    // if results arr empty, n is prime
    // else return 
  
    const res = [];
    let i = 2;
    while (i < n) {
      if (n % i === 0) {
        res.push(i);
      };
      i++ ; 
    };
  
    return res.length ? res : `${n} is prime`
  };
  
  console.log(divisors(6)) // [2, 3]
  console.log(divisors(2)) // '2 is prime'
  console.log(divisors(5)) // '5 is prime'

  
// for loop would be recommended since we know the terminating condition