// In number theory, an abundant number or an excessive number is one for which the sum of it's proper divisors is greater than the number itself. The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16. The amount by which the sum exceeds the number is the abundance. The number 12 has an abundance of 4, for example. Other initial abundant numbers are : 12, 18, 20, 24, 30, 36, 40, 42, 48, 54 etc . Infinitely many odd and even abundant numbers exist.
// As you should have guessed by now, in this kata your function will take a positive integer h as range input and return a nested array/list that will contain the following informations-

// Highest available odd or even abundant number in that range
// It's abundance
// Examples

// A few examples never hurt nobody, right???

// abundant(15)  = [[12], [4]]
// abundant(19)  = [[18], [3]]
// abundant(100) = [[100], [17]]
// abundant(999) = [[996], [360]]
// Tips

// The problem involves some pretty big random numbers. So try to optimize your code for performance as far as you can. And yes, the input argument will always be positive integers. So no need to check there.

// to find an abundant/excessive number:
  // get divisors of a number
  // add them up
  // if sum is more than the number, it is considered abundant/excessive
  // abundance is different between sum and number

// P: 1 parameter, a positive integer. This will serve as our upper limit. So from 0 to H is our range.
// R: An array with two elements. The abundant number in index 0, and the difference in index 1. 
// E: abundant(15) => 12 is highest abundant number. 4 is difference between 16-12 = 4
// P


function abundant(h){    
    for (let i = h; i > 0 && i <= h; i--){  // starting from h, working our way down
      
      let divisors = 0;                     // counter variable to keep track of sum of divisors
      for (let d = 1; d < i; d++){          // looping through every positive int up to, excluding, our current i
        if (i % d === 0){                   // if i divided by d is 0, means it's a divisor
          divisors += d                     // add to our divisor sum
        }
      } 
      
      if ( divisors > i ) {                 // if our divisor sum is greater than i, we got a winner
        return [[i], [divisors-i]]          // properl format, nested arrays  
      }
      
    }
}    