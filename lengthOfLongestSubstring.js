const assert = require("assert");
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  return s.split("").reduce((acc, val, index, src) => {
    let substr = [];
    let remaining = src.slice(index);

    for (let i = 0; i < remaining.length; i++) {
      if (substr.includes(remaining[i])) {
        break;
      } else {
        substr.push(remaining[i]);
      }
    }

    if (substr.length > acc) {
      return substr.length;
    }

    return acc;
  }, 0)
};

assert(lengthOfLongestSubstring("abcabcbb") === 3);
assert(lengthOfLongestSubstring("bbbbb") === 1);
assert(lengthOfLongestSubstring("pwwkew") === 3);
