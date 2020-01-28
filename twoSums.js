const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let head = nums[i];
    let tail = nums.slice(i + 1);

    for (let j = 0; j < tail.length; j++) {
      if (tail[j] + head === target) {
        return [i, i + j + 1]
      }
    }
  }
};

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([2, 7, 11, 15], 18), [1, 2]);
assert.deepEqual(twoSum([2, 7, 11, 15], 13), [0, 2]);
assert.deepEqual(twoSum([2, 7, 11, 15], 17), [0, 3]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
assert.deepEqual(twoSum([3, 3, 3], 6), [0, 1]);