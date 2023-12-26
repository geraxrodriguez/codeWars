function titleCase(title, minorWords) {
    title = title.toLowerCase().split(' ')
    
    title = title.map((word, index) => {                // capitalize
      return word
                .split('') // split up each word into its letter
                .map((letter, idx) => idx === 0 ? letter.toUpperCase() : letter)
                .join('')  // rejoin letters into a word 
    })
    
    if (minorWords) {
      minorWords = minorWords.toLowerCase().split(' ')
      title = title.map((word, index) => minorWords.includes(word.toLowerCase()) && index !== 0 ? word.toLowerCase() : word)
    }
                      
    return title.join(' ')
}
  