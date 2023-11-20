// You will be given an array of numbers. You have to sort the odd numbers in ascending order 
// while leaving the even numbers at their original positions.

// Mine, didn't work with all
function sortArray(array) {
    const sortedOdds = array.filter(n => n % 2 == 1).sort((a,b)=> a-b)  // make array of sorted odds
    
    for (let i = 0; i < array.length; i++){                             // use 'delete' to delete the odd nums from our original array
      if (Math.abs(array[i]) % 2)[                                           // this will leave a space for us to use to reinsert them
        delete array[i]
      ]
    }
  
    sortedOdds.forEach(odd => {                                         // we want to reinsert each odd, started with smallest
      array.splice(array.findIndex(el => !el), 1, odd)                  // replace our first occurence of an undefined element with our next odd num
    })
    
    return array
}

// someone elses
function sortArray(array){
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}