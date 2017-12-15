const str = '5 * (123 * (1 + 3) + ((4 - 3) / 6))';
const stack = [];
let res;

for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
        stack.push(i);
    }
    if (str[i] === ')') {
        // console.log(stack.pop() + ' ' + i);
        res = str.slice(stack.pop(), i + 1);
        console.log(res);
    }
}
