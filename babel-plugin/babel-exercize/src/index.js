/* eslint-disable no-undef */
// 我们经常会打印一些日志来辅助调试，但是有的时候会不知道日志是在哪个地方打印的。
// 希望通过 babel 能够自动在 console.log 等 api 中插入文件名和行列号的参数，方便定位到代码。

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generate = require('@babel/generator').default;

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

traverse(ast, {
    CallExpression(path) {
        if (types.isMemberExpression(path.node.callee)
            && path.node.callee.object.name === 'console'
            && path.node.callee.property.name === 'log'
        ) {
            path.node.arguments.unshift(types.expressionStatement(`var a = 1`))
        }
        // console.log(path.node.callee);
    }
});

const { code } = generate(ast);
console.log(code);