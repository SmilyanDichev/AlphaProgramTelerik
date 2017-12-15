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
  '8',
  '7',
  '3',
  '2',
  '3',
  '4',
  '2',
  '2',
  '4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const N = +gets();
const numbers = [];
for (let i = 0; i < N; i += 1) {
    numbers[i] = +gets();
}
let seq = 1;
let maxSeq = 1;
for (let i = 0; i < N - 1; i += 1) {
    if (+numbers[i + 1] > +numbers[i]) {
        seq += 1;
        if (seq > maxSeq) {
            maxSeq = seq;
        }
    } else seq = 1;
}
//console.log(maxSeq);
print(maxSeq);
quit(0);