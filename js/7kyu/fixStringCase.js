// P: 1 parameter which will be a string. Only letters.
// R: If there are more lowercase letters than uppercase letters in the string, or if there are equal lowercase as uppercase, return the str with all lowercase letters. Else, uppercase.
// E: solve('coDe') => 'code', solve('CODe') => 'CODE'
// P; 

function solve(s){
    let lowercase = 0;                                                    // counter variables for lowercase letters and uppercase
    let uppercase = 0;
    for (let i=0; i < s.length; i++){     
      s[i] == s[i].toLowerCase() ? lowercase++ : uppercase++ ;            // if letter is lowercase, add +1 to lowercase variable, else +1 to uppercase
    }
    return uppercase > lowercase ? s.toUpperCase() : s.toLowerCase() ;     // //if upper greater than lower, return string as uppercase. else, lowercase
}

//not mine
function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length       //creates array of only capital letters and gets length of that array
    let lower = s.length - upper                                            //subtracts number of uppercase letters from total number of letters in string, leaving difference to be lowercase letters
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase()              //if upper greater than lower, return string as uppercase. else, lowercase
}