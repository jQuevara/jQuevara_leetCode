/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
  const first = expandNode(l1);
  const second = expandNode(l2);
  const sum = arrayAddition(first.reverse(), second.reverse());

  return composeNode(sum);
};

function expandNode(listNode, acc = []) {
  if (listNode.next) {
    acc.push(listNode.val);
    return expandNode(listNode.next, acc);
  }

  acc.push(listNode.val);
  return acc;
}

function composeNode(num) {
  const numAsArr = num.toString().split("");

  return numAsArr.reduce((acc, curr) => {
    const  node = new ListNode(Number(curr));
    if (acc) {
      node.next = acc;
    }
    return node;
  }, null);
}

function arrayAddition(arr1, arr2) {

  return addArrs(arr1, arr2).join("");
}

function addArrs(arr1, arr2, total = [], remainder = 0) {
  if (arr1.length === 0 && arr2.length === 0 && !remainder) {
    return total;
  }

  const firstNum = arr1.pop() || 0;
  const secondNum = arr2.pop() || 0;
  const sum = firstNum + secondNum + remainder;

  if (sum > 9) {
    total.unshift(sum - 10);
    return addArrs(arr1, arr2, total, 1);
  }

  total.unshift(sum);
  return addArrs(arr1, arr2, total);
}

// arg1
const l1 = new ListNode(2);
const l2 = new ListNode(4);
const l3 = new ListNode(3);
l2.next = l3;
l1.next = l2;

// arg2
const l4 = new ListNode(5);
const l5 = new ListNode(6);
const l6 = new ListNode(4);
l5.next = l6;
l4.next = l5;

// expect
const l7 = new ListNode(7);
const l8 = new ListNode(0);
const l9 = new ListNode(8);
l8.next = l9;
l7.next = l8;
