// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// ['a', 'b', 'c'] -> ['1: a', '2: b', '3: c']
// takes an array, only strs. arr might be empty, doesn't matter, 
// return str prepended with correct number, first line is number 1. strs should be in array format

// ['a', 'b', 'c'] -> ['1: a', '2: b', '3: c']
// ['Hello', 'World'] -> ['1: Hello', '2: World']
// [] -> []

// ' ' -> '1.  '
var number=function(array){  
    return array.map((s, i) => `${i + 1}: ${s}`)
}