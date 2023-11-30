// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let odds = []
    let evens = []
    for (let i = 0; i < 3; i++){
      integers[i] % 2 === 0 ? evens.push(integers[i]) : odds.push(integers[i])
    }
    
    return odds.length > evens.length ? integers.filter(n => Math.abs(n) % 2 === 0)[0] : integers.filter(n => Math.abs(n) % 2 === 1)[0]
}