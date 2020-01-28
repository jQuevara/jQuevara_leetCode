const assert = require("assert");

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const stringAsArr = s.split("");

   if (stringAsArr.some(el => el !== stringAsArr[0])) {
       return;
   }

   return s;
};

assert(longestPalindrome("a") === "a");
// assert(longestPalindrome("babad") === "bab" || longestPalindrome("babad") === "aba");
// assert(longestPalindrome("cbbd") === "bb");
assert(longestPalindrome("aaaaaaaaaa") === "aaaaaaaaaa");