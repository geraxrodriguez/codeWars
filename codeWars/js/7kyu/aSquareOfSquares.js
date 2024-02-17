// Given an integral number, determine if it's a square number:
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
// 25  =>  true
// 26  =>  false

// The Math.sqrt() static method returns the square root of a number.
var isSquare = function(n){
    // The Math.sqrt() static method returns the square root of a number.
    // Number.isInteger returns true/false depending if number is, well, an integer
    return Number.isInteger(Math.sqrt(n)) 
}