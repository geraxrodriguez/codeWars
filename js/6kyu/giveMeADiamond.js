function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2) // => 2
      str += ' '.repeat(len)          // => ' '
      str += '*'.repeat(n-2*len)      // => *
      str += '\n'                     // => \n
    }
    return str
}
console.log(3-2*0-1/2)
  
// takeaways from this are that I need to approach these problems certain way.
// I know I'm going to have to use a loop, so I'm gonna be working with 'i', which is a variable that I will update each iteration, usually increasing it by 1
// I know I, in this case, I'm receiving a number that will be a constant, n
// I know I have to concatenate things together to complete the string
// i know i'll have to find an equation where I use n, i, or both to get the results