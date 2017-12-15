const N = +gets();
const numbers = [];
for (let i = 0; i < N; i += 1) {
    numbers[i] = +gets();
}

let currentNum;
let currentNumFreq;
let maxNum = 0;
let maxNumFreq = 0;
let nextNum;

for (let i = 0; i < N; i += 1) {
    currentNum = numbers[i];
    currentNumFreq = 0;
    for (let q = 0; q < N; q += 1) {
        nextNum = numbers[q];
        if (currentNum === nextNum) {
            currentNumFreq += 1;
        }
        if (currentNumFreq > maxNumFreq) {
            maxNumFreq = currentNumFreq;
            maxNum = currentNum;
        }
    }
}
console.log(`${maxNum} (${maxNumFreq} times)`);
//print(`${maxNum} (${maxNumFreq} times)`);
//quit(0);

frequentNumber(['13',
    '4', '1', '1', '4',
    '2', '3', '4', '4',
    '1', '2', '4', '9', '3'
]);