/* eslint-disable no-undef */
const parser = require('@babel/parser');
const fs = require('fs');
const path = require('path');

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf-8'
});

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous'
});

// const astExpression = parser.parseExpression(sourceCode)

console.log(ast);
// console.log(astExpression);