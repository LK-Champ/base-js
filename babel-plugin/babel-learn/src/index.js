/* eslint-disable no-undef */
require("core-js/modules/es.promise.finally");
const a = 1;
const fn = () => 1;
Promise.resolve().finally();
console.log(a);
console.log(fn);