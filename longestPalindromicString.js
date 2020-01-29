const assert = require("assert");

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const stringAsArr = s.split("");

    if (stringAsArr.length < 2 || stringAsArr.filter(el => el === stringAsArr[0]) === stringAsArr) {
      return s;
    }

    return stringAsArr.reduce((acc, curr, ind, src) => {
      if (acc.length > src.length - ind) {
        return acc;
      }

      let eligible = src.slice(ind);
      let pal = largestPal(eligible, [], []);

      if (pal.length > acc.length) {
        return pal;
      }

      return acc;
    }, []).join("");
};

function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return compareArr(arr1, arr2);
};

function compareArr(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return true
  }

  if (arr1[0] !== arr2[0] ) {
    return false
  }

  return compareArr(arr1.slice(1), arr2.slice(1));
};

function largestPal(arr, acc, largest) {
  if (arr.length === 0) {
    return largest;
  }

  let temp = acc.slice(0);
  let next = arr[0];
  temp.push(next);
  let reverseTemp = temp.slice(0).reverse();

  acc.push(next);

  if (arrayEquals(temp, reverseTemp)) {
    return largestPal(arr.slice(1), acc, temp)
  }

  return largestPal(arr.slice(1), acc, largest)
}

assert(arrayEquals(["a"], ["a"]));
assert(arrayEquals(["bab"], ["bab"]));
assert(arrayEquals(["bab"], ["cdc"]) === false);

assert(longestPalindrome("a") === "a");
assert(longestPalindrome("ab") === "a");
assert(longestPalindrome("babad") === "bab");
assert(longestPalindrome("cbbd") === "bb");
// assert(longestPalindrome("aaaaaaaaaa") === "aaaaaaaaaa");