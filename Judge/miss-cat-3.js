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
  '5',
  '1',
  '3',
  '3',
  '2',
  '2',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


// find most frequent, if more than one have the same
// freq then pick the smallest one
const n = +gets();
const arr = [];
const table = new Map();
for (let i = 0; i < n; i += 1) {
    arr[i] = +gets();
    let count = 0;
    count = table.get(arr[i], count) || 0;
    table.set(arr[i], count + 1);
}
let freq = 0;
arr.forEach((el) => {
    if (table.get(el) > freq) {
        freq = table.get(el);
    }
});
const finalRound = [];
arr.forEach((el) => {
    if (table.get(el) === freq) {
        finalRound.push(el);
    }
});
print(Math.min(...finalRound));

