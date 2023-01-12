// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(string){
    return string
            .split(' ')     // converts string into array, separating words by spaces
            .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)       // loops through every word. If lengh is 5 or more, it'll return that word but reversed.
            .join(' ');     // turn array into back into string, including a space in between them
}