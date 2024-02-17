// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.
// Parameters: 2
  //n reps our starting number, the number we will seperate and do the exponentn stuff with
  //p represents our starting power. 
// Return: 1 int, K, or -1
  // our sum is the sum of the digits in n, taken tot he successive powers and added
  // if sum / n == a positive integer? return that positive integer, AKA 'k'
  // else return -1
// 
// 


function digPow(n, p){
    const sum = n
                .toString()                       // toString, to then call split()
                .split('')                        // turn n into array, to call reduce
                .reduce((acc,curr)=>{             // reduce good for reducing our array downt one value, in this case our sum
                  p++;                            // need to increase p by 1 each time, have to do it before returning our acc + curr
                  return acc + Math.pow(curr, p-1);
                 }, 0)    
    return sum % n == 0 ? sum / n : -1
}