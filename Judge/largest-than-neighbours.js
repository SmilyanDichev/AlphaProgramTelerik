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
    '6',
    '-26 -25 -28 31 2 27',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const num = gets().split(' ').map(Number);
let s = 0;
const checker = (i) => {
    if (num[i - 1] < num[i] && num[i + 1] < num[i]) {
        return true;
    }
    return false;
};
for (let i = 1; i < n - 1; i += 1) {
    if (checker(i)) {
        s += 1;
    }
}
s = s || -1;
print(s);