// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  //   return alphabet.indexOf('b') + 1
    
    return text
      .toLowerCase()
      .split('')
      .filter(letter => alphabet.includes(letter))
      .map(letter => alphabet.includes(letter) ? alphabet.indexOf(letter) + 1 : '')
      .join(' ')  
}

// next time try and use something like this with their characer code
var result = "";
for (var i = 0; i < text.length; i++){
  var code = text.toUpperCase().charCodeAt(i)
  if (code > 64 && code < 91) result += (code - 64) + " ";
}

return result.slice(0, result.length-1);
}