// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:

// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

//P: 2 arrays. 
  // all strings. no funny biz
  //
// R: return an array of strs
  // must be sub strings of a1
// E:
// P:

function inArray(array1,array2){
    let sortedArray = []                             // placeholder array
    
    array1.forEach(s => {                            // grab element from array1
      for (let i = 0; i < array2.length; i++){       // for every element in array1, we want to loop through array2
        if (array2[i].includes(s)){                  // if current element in array1 is present in any string in array2
          sortedArray.push(s)                        // push it to our new array
          break;                                     // break loop and move on to next element in array1 to avoid duplicates
        } 
      }  
    })
    
    return sortedArray.sort()                        // alphabetically sort
  }

//   Not mine but clean
function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
}