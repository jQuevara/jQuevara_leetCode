const assert = require("assert");

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign = "";
  let numAsArr = x.toString().split("");

  if (["+", "-"].includes(numAsArr[0])) {
    sign = numAsArr.shift();
  }

  if (numAsArr[numAsArr.length - 1] === 0) {
    numAsArr.pop();
  }

  numAsArr.push(sign);
  const result = Number(numAsArr.reverse().join(""));
  return (result > (2 ** 31 - 1) || result < -(2 ** 31)) ? 0 : result;
};

assert(reverse(123) === 321);
assert(reverse(-123) === -321);
assert(reverse(120) === 21);
assert(reverse(1534236469) === 0);
assert(reverse(8192) === 2918);
assert(reverse(-2147483648) === 0);