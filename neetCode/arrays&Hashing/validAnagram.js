// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
 
// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  first solution
// if you compare two arrays with same elements using '==' or '===', it will return false because the two arrays reference different objects in memory.
// by joining them into strings, you then compare the contents, resulting in true if they have same contents
var isAnagram = function(s, t) {
    return sortString(s) == sortString(t)
};
var sortString = function(str) {
    return str.split('').sort().join('')
}

// second solution, runs bit faster and is better on memory. Requires hashing
var isAnagram = function(s, t) {
    //if both strs aren't same length, we know immediately they aren't anagrams
    if (s.length !== t.length) { return false }

    //if we are concerned with occurrences of something, such as in this case
    //then we NEED to create a map
    //here we are creating a map and doing one of two things:
    //1. creating an element in our map if it doesn't exist there yet
    //2. if it does exist, we increment its occurence by +1
    let map = {}
    for (let i = 0; i < s.length; i++) {
        let letter = s[i]
        if (!map[letter]) {
            map[letter] = 1
        } else {
            map[letter]++
        }
    }

    //looping through our second str
    for (let i = 0; i < t.length; i++) {
        let letter = t[i]
        // if letter don't exist in map, false
        if (!map[letter]) {
            return false
        }
        // if letter already at 0, false 
        if (map[letter] == 0) {
            return false
        }
        // else subtract 1 from letter value 
        map[letter]--

    } 

    return true
}