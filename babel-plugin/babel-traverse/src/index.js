/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.ts'), {
  encoding: 'utf-8'
});

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: [
    'typescript'
  ]
});

// traverse 函数
// 第一个参数要解析的 ast，第二个参数是 visitor(对象)，其他参数省略
// visitor 对象的属性值
// ● 如果是一个函数，就是 enter 时调用
// ● 如果是一个对象，可以指定是 enter 时调用，还是 exit 时调用
// ● enter 表示在遍历当前节点之前被调用
// ● exit 表示在遍历完当前节点被调用

// traverse(ast, {
//   Identifier (path) {
//     console.log('1---------------------1');
//     console.log(path);
//   },
//   StringLiteral: {
//     enter (path) {
//       console.log('2---------------------2');
//       console.log(path);
//     },
//     exit (path) {
//       console.log('3---------------------3ss');
//       console.log(path);
//     },
//   }
// });

traverse(ast, {
  Statement(path) {
    const getSibling = path.find((a) => {console.log(a);});
    console.log(getSibling);
  }
})