/* eslint-disable no-undef */
const { transformFileAsync } = require('@babel/core');
const insertParametersPlugin = require('./params-insert-plugin');
const path = require('path');

const result = transformFileAsync(path.join(__dirname, './sourceCode.jsx'), {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
});

result.then((res) => {
  console.log(res.code);
}).catch((res) => {
  console.log('2:', res);
});