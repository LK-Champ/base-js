/* eslint-disable no-undef */
var pngquant = require('node-pngquant-native');
var fs = require('fs');
var path = require('path')

fs.readFile(path.resolve(__dirname, './image/product.png'), function (err, buffer) {
  if (err) throw err;
  var resBuffer = pngquant.compress(buffer, {
    "speed": 1
  });

  fs.writeFile(path.resolve(__dirname, './image/produc_out.png'), resBuffer, {
      flags: 'wb'
  }, function(err){
    console.log(err);
  });
});