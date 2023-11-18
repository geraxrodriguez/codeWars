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