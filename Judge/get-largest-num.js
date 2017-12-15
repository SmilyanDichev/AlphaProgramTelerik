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
  '8 3 6',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets().split(' ').map(Number);
const getMax = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
};
const s = getMax(getMax(n[0], n[1]), n[2]);
print(s);
