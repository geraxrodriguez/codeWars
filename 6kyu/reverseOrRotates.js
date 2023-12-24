// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:

// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

// 2 params.
    // str === a str of digits
    // sz === the size of the chunk we are supposed to cut the digits into
// Return the 

function revrot(str, sz) {
    if (sz <= 0 || str.length === 0 || sz > str.length){ return ''}
    
    let chunks = []                                                 // after for loop, we'll have
    for (let i = 0; i < str.length; i += sz) {                      // chunks = ['123456', '987654']    
      const chunk = str.slice(i, i+sz)
      if (chunk.length === sz){                                     // makes sure chunk gets ignored if not at least sz characters long
        chunks.push(chunk) 
      }
    }
    
    chunks = chunks.map((dgtz, index) => {
      dgtz = dgtz.split('')                                         // splits chunks up
      const cubedSum = dgtz.reduce((a,b)=> +a + Math.pow(+b, 3), 0) // sums cubed digits
      if (cubedSum % 2 === 0){                                      
        return dgtz.reverse().join('')                              // reverses chunk if divisible by 2
      } else {  
        dgtz.push(dgtz.shift())                                     // rotates chunk if not
        return dgtz.join('')
      }
    })
    
    return chunks.join('')
  }
// not mine but clean, key difference is they only looped through str once. that's amazing
function revrot(str, sz) {
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    const reverse = chunk => chunk.split('').reverse().join('');
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    const chunks = [];
    
    for (let i = 0; i < str.length; i += sz) {
      let chunk = str.slice(i, i + sz);
      
      if (chunk.length < sz) continue;
      
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      
      chunks.push(chunk)
    }
    
    return chunks.join('')
}