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
  '4 3 2 5 2',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map(Number);

let oSum = 1;
let eSum = 1;
for (let i = 0; i < n; i += 1) {
    if ( i % 2 === 0) {
        oSum *= arr[i];
    } else {
        eSum *= arr[i];
    }
}
if (oSum === eSum) {
    print('yes ' + oSum);
} else {
    print('no ' + oSum + ' '+ eSum);
}
quit(0);