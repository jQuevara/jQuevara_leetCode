const assert = require("assert");

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//   if (numRows === 1) {
//     return s;
//   }
//
//   const rows = toRows(s, numRows);
//   let result = "";
//
//   for (let i = 0; i < numRows; i++) {
//     rows.forEach(row => {
//       if (row[i] !== "-") {
//         result += row[i]
//       }
//     })
//   }
//
//   return result;
// };
//
// function toRows(s, numRows, acc = [], index = 0, numSpace = numRows - 2) {
//   if (!s) {
//     return acc;
//   }
//
//   if (index % 2 === 0) {
//     let [row, remainder] = bite(s, numRows);
//
//     acc.push(row);
//
//     return toRows(remainder, numRows, acc, index + 1 );
//   }
//
//   const [spacers, remainder] = createSpacers(s, numRows, numSpace);
//   spacers.forEach(spacer => {
//     if (index % 2 !== 0) {
//       spacer = spacer.reverse();
//     }
//
//     acc.push(spacer);
//   });
//
//   return toRows(remainder, numRows, acc, index + 1 );
// }
//
// function splitStr(s) {
//   return s.split("");
// }
//
// function joinStr(arr) {
//   return arr.join("");
// }
//
// function bite(s, length) {
//   const chunk = Array(length).fill("-");
//   const str = splitStr(s);
//   const remainder = joinStr(str.slice(length));
//
//   for (let i = 0; i < Math.min(length, str.length); i++) {
//     chunk[i] = str[i];
//   }
//
//   return [chunk, remainder];
// }
//
// function createSpacers(s, numRows, numSpace) {
//   const spacers = [];
//   const str = splitStr(s);
//   const remainder = joinStr(str.slice(numSpace));
//
//   for (let i = 0; i < Math.min(numSpace, str.length); i++) {
//     const arr = Array(numRows).fill("-");
//
//     arr[i + 1] = str[i];
//     spacers.push(arr);
//   }
//
//   return [spacers, remainder]
// }

var convert = function(s, numRows) {
  if (numRows === 1) return s;

  let rows = [];

  for (let i = 0; i < numRows; i++) {
    rows.push([])
  }

  const str = s.split("");
  let currRow = 0;
  let step;

  for (let i = 0; i < str.length; i++) {
    if (currRow === numRows - 1) {
      step = -1;
    } else if (currRow === 0) {
      step = 1;
    }

    rows[currRow].push(str[i]);
    currRow += step;
  }

  return rows.reduce((acc, curr) => { curr.forEach(i => acc += i); return acc}, "");
};

assert(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
assert(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
assert(convert("ABC", 1) === "ABC");
assert(convert("ABCDE", 4) === "ABCED");
assert(convert("ABCDEF", 5) === "ABCDFE");