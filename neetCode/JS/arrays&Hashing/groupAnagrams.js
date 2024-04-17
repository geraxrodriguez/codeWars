// an anagram of 'word' is 'wdro'. same word but letters rearranged
// P: 1 parameter, an array. Nothing but strs
// R: an array of array(s)
    // each array is grouping of anagrams
// E:
// P:



// 119 ms beats 47.96%
// 62.03 MB beats 55%
var groupAnagrams = function(strs) {
    // keys will be strs sorted
    // values will be words
    let output = {}
    for (let i = 0; i < strs.length; i++) {
        sortedStr = strs[i].split('').sort().join('')
        if (output[sortedStr]) {
            output[sortedStr].push(strs[i])
        }
        else {
            output[sortedStr] = [ strs[i] ]
        }
    }
    
    return Object.values(output)
};

// 113 ms beats 63%%
// 61 MB beats 62%
var groupAnagrams = function(strs) {
    let output = {}
    for (let i = 0; i < strs.length; i++) {
        sortedStr = strs[i].split('').sort().join('')
        output[sortedStr] ? output[sortedStr].push(strs[i]) : output[sortedStr] = [ strs[i] ]
    }  
    return Object.values(output)
};

// same thing, just better i guess
const groupAnagrams = (strs) => {
    // Create a Map to store anagrams where keys are sorted strings and values are arrays of anagrams
    const anagrams = new Map();

    // Iterate through each word in the input array
    for (const word of strs) {
        // Sort the characters of the word to form a key for the anagram Map
        const sortedWord = sortWord(word);

        // If the sorted word is not present in the Map, initialize an empty array for it
        if (!anagrams.has(sortedWord)) {
            anagrams.set(sortedWord, []);
        }

        // Push the original word to the array of anagrams corresponding to its sorted version
        anagrams.get(sortedWord).push(word);
    }

    // Return an array of arrays containing groups of anagrams
    return Array.from(anagrams.values());
};

// Helper function to sort characters of a string
const sortWord = (word) => {
    // Convert the string to an array of characters, sort them, and join back into a string
    return [...word].sort().join('');
};