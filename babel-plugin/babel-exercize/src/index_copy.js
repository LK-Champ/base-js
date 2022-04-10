/* eslint-disable no-undef */
// 我们经常会打印一些日志来辅助调试，但是有的时候会不知道日志是在哪个地方打印的。
// 希望通过 babel 能够自动在 console.log 之前自动插入行号和列号

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');
const template = require('@babel/template');

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

traverse(ast, {
  CallExpression(path) {
    if (path.node.isNew) return;
    // 或者执行表达式代码
    const calleeName = generate(path.node.callee).code;
    if (targetCalleeName.includes(calleeName)) {
      // 获取行号和列号
      const { line, column } = path.node.loc.start;
      const newNode = template.expression(`console.log("filename: (${line}, ${column})")`)();
      newNode.isNew = true;

      if (path.findParent(path => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]))
        path.skip();
      } else {
        path.insertBefore(newNode);
      }
    }
  }
});

const { code } = generate(ast);
console.log(code);