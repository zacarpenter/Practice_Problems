/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let frequencyS = {},
    frequencyT = {};
  for (let i = 0; i < s.length; i++) {
    frequencyS[s[i]] = frequencyS[s[i]] + 1 || 1;
    frequencyT[t[i]] = frequencyT[t[i]] + 1 || 1;
  }

  for (let key in frequencyS) {
    if (frequencyS[key] !== frequencyT[key]) return false;
  }
  return true;
};
