/* eslint-disable no-undef */
var { execFile } = require('node:child_process');
var jpegtran = require('jpegtran-bin');

execFile(jpegtran, ['-outfile', 'color.jpg', 'color_out.jpg'], (error) => {
	console.log('Image minified!');
  console.log(error);
});