"use strict";

/* eslint-disable no-undef */
require("core-js/modules/es.promise.finally");

var a = 1;

var fn = function fn() {
  return 1;
};

Promise.resolve()["finally"]();
console.log(a);
console.log(fn);