/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
console.log(1);

function func() {
    console.info(2);
}

export default class Clazz {
    say() {
        const params = {a: 1};
        console.debug(3);
    }
    render() {
        return <div>{console.error(4)}</div>
    }
}
