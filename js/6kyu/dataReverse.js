// P: 1 parameter, an array.
  // total num of elements in array is multiple of 8
  // there are certain number of bytes in array, groups of elements, all 8 elements long
// R: Return the bytes in reverse order
// E:
// P:

function dataReverse(data) {  
    // this was first approach
    // need to first group every 8 nums into a byte
    // need to make sure i have an array of bytes, not just array of numbers
    // need to reverse order of array of bytes
    // join and return
    
    // second approach, because first returned nums as strs
    // placeholder for new bytes
    let bytes = []
    
    // loop through array in reverse order, counting backwards by 8 
    for (let i = data.length-8; i >= 0; i -= 8){
      // startign at every -8th num, push next +8 nums
      for (let j = i; j < i + 8; j++) {
        bytes.push(data[j])
      }
    }
    
    return bytes
}

// this was very similar to my first solution but I was not using spread operator so my shit
// was being pushed as a new array to bytes, then when I did .join(), all my numbers
// were becoming strs
const bytes = [];
for (let i = data.length-8; i >= 0; i -= 8) {
  bytes.push(...data.slice(i, i+8))
}
return bytes;