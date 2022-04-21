/* eslint-disable no-undef */
// const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);
module.exports = function() {
    console.log(1);
    return {
        visitor: {
            ImportDeclaration(path) {
                console.log(path);
            },
            ImportSpicifier(path) {
                console.log(path);
            },
            ImportDefaultSpecifier(path) {
                console.log(path);
            },
            ImportNamespaceSpcifier(path) {
                console.log(path);
            },
            CallExpression(path) {
                console.log(path);
            },
        }
    }
}