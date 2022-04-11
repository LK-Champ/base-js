/* eslint-disable no-undef */
const { codeFrameColumns } = require("@babel/code-frame");

// const rawLines = `class Foo {
//   constructor()
// }`;
// const location = { start: { line: 2, column: 16 } };

// const result = codeFrameColumns(rawLines, location, {
//   /* options */
// });

// console.log(result);

const rawLines = `class Foo {
  constructor() {
    console.log("hello");
  }
}`;
const location = {
  start: { line: 2, column: 17 },
  end: { line: 4, column: 3 },
};

const result = codeFrameColumns(rawLines, location, {
  /* options */
  highlightCode: true
});

console.log(result);