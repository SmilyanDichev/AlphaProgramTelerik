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
    10,
    2,
    3,
    -6,
    -1,
    2,
    -1,
    6,
    4,
    -8,
    8,
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const N = +gets();
const numbers = [];
let maxSum = 0;
let currSum = 0;
for ( let i = 0; i < N; i += 1) {
    numbers[i] = +gets();
}
for ( let i = 0; i < N; i += 1) {
    if (currSum + numbers[i] > 0) {
        currSum += numbers[i];
    } else {
        currSum = 0;
    }
    if (currSum > maxSum) {
        maxSum = currSum;
    }
    console.log('current sum is '+currSum);
}
print(maxSum);
quit(0);
