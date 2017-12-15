const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    123.45,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const reverseStr = (number) => {
    if ( number.length === 1) {
        return number;
    }
    let first = number[0];
    let rest = number.slice(1);
    return reverseStr(rest) + first;
};
let num = gets();
num = num.toString();

num = reverseStr(num);
print(num);
