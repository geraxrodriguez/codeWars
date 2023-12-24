// Description:

// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// absolutely muscled my way through this
var encryptThis = function(text) {
    let arrText
    if (text.length === 1){
      return `${text.charCodeAt(text)}`
    }
    
    if (text.includes(' ')){
      arrText = text.split(' ').map(w => {
        if (w.length === 1) { return w.charCodeAt(w) }
        else if (w.length === 2) { return `${w.charCodeAt(0)}${w[1]}` }
        return `${w.charCodeAt(0)}${w[w.length-1]}${w.slice(2, w.length-1)}${w[1]}`
      }).join(' ')
      return arrText
    }
    
    
    else {
      arrText = text.split(' ').map(w => {
        return `${w.charCodeAt(0)}${w[w.length-1]}${w.slice(2, w.length-1)}${w[1]}`
      }).join('')
      return arrText
    }
    
}

// a billion times better
const encryptWord = w => {
    const first = w.charCodeAt(0);
    let res;
    switch (w.length) {
      case 0: return '';
      case 1: return first;
      case 2: res = [first, w[1]]; break;
      case 3: res = [first, w[2], w[1]]; break;
      default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
    }
    return res.join('');
};
  
const encryptThis = text => text.split(' ').map(encryptWord).join(' ');


// NOTES
console.log('hello'.split(' ')) // [ 'hello' ]
console.log('hello'.split(''))  // [ 'h', 'e', 'l', 'l', 'o' ]

// automatically gets rid of '' when you join
console.log([ 'h', 'e', '', 'l', 'l', 'o' ].join('')) // 'hello'