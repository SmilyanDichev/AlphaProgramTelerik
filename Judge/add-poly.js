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
  '3',
  '5 0 1',
  '7 4 -3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const a1 = gets().split(' ').map(Number);
const a2 = gets().split(' ').map(Number);
let num = [];
for ( let i = 0; i < n; i += 1) {
a1[i] += a2[i];
}
const s = a1.join(' ');
print(s);