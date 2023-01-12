// Complete the solution so that it reverses the string passed into it.
function solution(str){
    return str
              .split('')  // turn into array to then be able to call reverse()
              .reverse()  // reverses array 
              .join('')   // turn array into str
}