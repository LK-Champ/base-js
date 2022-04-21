/* eslint-disable no-undef */

const template = require('@babel/template').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const buildRequire = template(`
  var %%importName%% = require(%%source%%);
`);

const ast = buildRequire({
  importName: t.identifier("myModule"),
  source: t.stringLiteral("my-module"),
});

const { code, map } = generate(ast, { sourceMaps: true })
console.log(code);
console.log(map);