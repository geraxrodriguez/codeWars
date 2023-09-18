// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples

// "foefet" is an anagram of "toffee"

var isAnagram = function(test, original) {
    test = lowerSortJoin(test)
    original = lowerSortJoin(original)
    return test == original 
};
  
function lowerSortJoin(str){
return str
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}