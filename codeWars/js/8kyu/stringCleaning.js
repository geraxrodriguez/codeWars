// Your boss decided to save money by purchasing some cut - rate optical character recognition software for scanning in the text of old novels to your database.At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

//     Examples(input -> output)

// '! !' -> '! !'
// '123456789' -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co - workers are looking to you for a solution to take this garbled text and remove all of the numbers.Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$ %^& !@* (): ; "'.,? all intact.

// s = string
// string will have numbers

// need to return string without numbers

// '123456789' => ''
// '! !' => '! !'

function stringClean(s) {
    // establish empty string
    let cleanS = '';
    // loop through string
    for (let i = 0; i < s.length; i++) {
        // if charcodeat char code not at 48 - 57, push to new string
        if (s[i].charCodeAt() < 48 || s[i].charCodeAt() > 57) {
            cleanS += s[i];
        }
    }
    return cleanS
}