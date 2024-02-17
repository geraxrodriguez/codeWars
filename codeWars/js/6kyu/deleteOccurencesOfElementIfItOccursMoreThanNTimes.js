// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].
// Parameters: 2
  // a list and a number
  // the list will contain numbers. which i assume will be ints based off the test
  // the parameter number will also be an int and represents is the amount each number in the list can appear
// Return: return a modified array of our orginal array
  // our new array shoud drop duplicates that make the number go over
// E: deleteNth([20,37,20,21], 1) => [20, 37, 21]
// P:

function deleteNth(arr,n){
    let counter = {}
    let newArr = [] 
    
    arr.forEach( num => {                              // for every num in arr
      counter[num] ? counter[num]++ : counter[num] = 1 // we want to add 1 to its value in our counter obj. if it doesn't exist, it will create a property for it and value will be 1
      if (counter[num] <= n){                          // if num hasn't appeared to many times
        newArr.push(num)                               // push to our array
      }
    })
  
    return newArr
}