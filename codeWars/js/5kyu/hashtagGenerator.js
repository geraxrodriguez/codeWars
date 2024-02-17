// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

const generateHashtag = str => {
    const s = str
    if (s.replaceAll(' ', '').length == 0){return false}
    
    let arr =  str
                .split(' ')
                .filter(el => el !== '')
                .map(word => `${word[0].toUpperCase()}${word.slice(1)}`) // split str
    arr.unshift('#')
    arr = arr.join('')
    
    return arr.length > 140 ? false : arr
}

// cleaner than mine
function generateHashtag(str) {
    if (!str.trim()) return false;
  
    const result =
      '#' +
      str
        .split(' ')
        .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
        .join('');
  
    return result.length > 140 ? false : result;
}