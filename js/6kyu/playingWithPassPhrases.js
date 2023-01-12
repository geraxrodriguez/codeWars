// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:

// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

function playPass(s, n) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const nums = '0123456789'
    
    // if n + i is more than alpha.length, then I let's say it was good y + 5
    // => 25 + 5 = 30. 30 - 26 = 4, but have to minus 1 since zero index
    let str = ''
    
    for (let i = 0; i < s.length; i++) { 
    
      // if this, then we know it's a letter
      if (alpha.includes(s[i].toLowerCase())) {
        // find position of current letter
        let index = alpha.indexOf(s[i].toLowerCase())
        console.log(index)
        
        // find new letter adding n to index of old letter
        let newIndex = (index + n) > 25 ? (index + n) - 26 : index + n
        console.log(newIndex)
        
        const newLetter = alpha[newIndex]
        console.log(newLetter)
        
        // if its lower cased version is equal to its original, than it was lowercase; else, it was upper
        str += i % 2 === 0  ? alpha[newIndex].toUpperCase() : alpha[newIndex]
      }
      
      // if this, then it's a num
      else if (nums.includes(s[i])) {
        const newNum = 9 - +s[i]
        str += `${newNum}`
      }
      
      // else its something not numerica or alphabetical, so just add it to string unchanged
      else {
        str += s[i]
      }
    
    }
    
    // need to split in order to call reverse, need to join cuz we are supposed to return a str
    return str.split('').reverse().join('')
    
}