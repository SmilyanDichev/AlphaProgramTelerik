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
    8,
    3,
    3,
    2,
    3,
    -2,
    5,
    4,
    2,
    7,
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const N = +gets();
const K = +gets();
const numbers = [];
let sum = 0;

for ( let i = 0; i < N; i += 1) {
    numbers[i] = +gets();
}

numbers.sort(function(a, b) {
    return b - a;
  });

for ( let i = 0; i < K; i += 1) {
    sum += numbers[i];
}
print(sum);
quit(0);
