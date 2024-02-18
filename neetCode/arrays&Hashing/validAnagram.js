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
var isAnagram = function(s, t) {
    return sortString(s) == sortString(t)
};
var sortString = function(str) {
    return str.split('').sort().join('')
}

// second solution, runs bit faster and is better on memory. Requires hashing
var isAnagram = function(s, t) {
    if (s.length !== t.length) { return false }

    let map = {}
    for (let i = 0; i < s.length; i++) {
        let letter = s[i]
        if (!map[letter]) {
            map[letter] = 1
        } else {
            map[letter]++
        }
    }

    for (let i = 0; i < t.length; i++) {
        let letter = t[i]
        // if letter don't exist in map, false
        if (!map[letter]) {
            return false
        }
        // if letter already at 0, false 
        else if (map[letter] == 0) {
            return false
        }
        // else subtract 1 from letter value 
        else { 
            map[letter]--
        }
    } 

    return true
}