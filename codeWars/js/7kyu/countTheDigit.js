// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// P: 2 parameters, both numbers. the first one, n. Square every number from 0 to 9. Then dount how nany times, d, appears in the squares.
// R: Return the number of times d appears in the squares.
// E: nbDig(10, 1) => 11
// P: 

function nbDig(n, d) {
    let squares = [];
    for (let i=0; i <= n; i++){               // loop for squaring all nums from 0 to n
       squares.push(i*i)                      // push those to an array 
    }
    
    return squares
            .join('')                         // join, becomes one giant str
            .split('')                        // split, all numbers are now each an element 
            .filter(num => num == d)          // filter only for nums == d
            .length                           // only thing left in our array at this point is d, so return length of that array
}