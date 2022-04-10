/* eslint-disable no-undef */
const { transformFileAsync } = require('@babel/core');
const insertParametersPlugin = require('./params-insert-plugin');
const path = require('path');

const code = transformFileAsync(path.join(__dirname, './sourceCode.jsx'), {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
});
console.log(code.then(res => console.log(res)));