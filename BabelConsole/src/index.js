/* eslint-disable no-undef */
const parser = require('@babel/parser').default;
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const sourceCode = `console.log(1);`;

console.log(parser);
const ast = parser(sourceCode, {
  sourceType: 'ununambiguous'
});

traverse(ast, {
  CallExpression(path, state) {
    console.log(path, state);
  }
});

const {code , map} = generate(ast);
console.log(code );
console.log(map);