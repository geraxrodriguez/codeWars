// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// P: So it's going to be only one parameter. This parameter is going to be a string that is two words with a space between it. Not all words will have capital letters
// R: return, not console log. One string that is made up of a letter, a period, and a letter, in that order. 
// E: Sam Harris => S.H
// P:

function abbrevName(name){
    // split 'name' by the space, ' '. This will give us array with each name as element
    let names = name.split(' ')
    
    // create placeholder array for initials to be pushed into
    // let initials = [];
    
    // loop through our names array, grabbing the first letter of each name and pushing it to our initials array
    let initials = names.map(n => n[0].toUpperCase())
    
    // join our names array with a period and return
    return initials.join('.')
  
}