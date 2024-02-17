// P: One paramter, represents size of times table
  // if size == 3, then times table should be 3 x 3
// R: times table for given size
  // e.g. 3 => [[1,2,3],[2,4,6],[3,6,9]]
// E: above
// P

multiplicationTable = function(size) {
    let table = []
    
    // loop from 1 to size (inclusive) starting at 1
    let i = 1
    
    while (i <= size){
      // array for each nums multiples
      let multiples = []
      // for every i, i want to do 'size' iterations
      for (let j = 1; j <= size; j++){
        multiples.push(i * j)
      }
      table.push(multiples)
      // can't forget to increase i by 1
      i++
    }
    
    return table
}
  