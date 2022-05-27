/* eslint-disable no-undef */
const lqip = require('lqip');
const path = require('path');
const file = path.resolve(__dirname, './1.png');

lqip.base64(file).then(res => {
  console.log(res);
});