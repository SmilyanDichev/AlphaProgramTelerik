const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [10,
    '1 1 1 1 1 1 1 1 1 11',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// sort the array, and brute force it
const S = +gets();
const numbers = gets()
    .split(' ')
    .map((el) => parseInt(el, 10))
    .sort(function (a, b) {
        return b - a;
    });

const len = numbers.length;
let sum = 0;
let output = 'no';
for (let q = 0; q < len; q += 1) {
    for (let i = q; i < len; i += 1) {
        if (S >= sum + numbers[i]) {
            sum += numbers[i];
            if (sum === S) {
                output = 'yes';
                break;
            }
        }
    }
    sum = 0;
}

print(output);
// quit(0);