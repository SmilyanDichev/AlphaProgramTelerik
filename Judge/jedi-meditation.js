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
  '7',
  'P4 P2 P3 M1 K2 P1 K1',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const jedi = gets().split(' ');
let s = '';
const line = [];
const jediLine = (ch) => {
    for (let i = 0; i < n; i += 1) {
        if (jedi[i][0] === ch) {
        line.push(jedi[i]);
        }
    }
}
// for (let i = 0; i < n; i += 1) {
//     if (jedi[i][0] === 'M') {
//     line.push(jedi[i]);
//     }
// }
jediLine('M');
jediLine('K');
jediLine('P');
s = line.join(' ');
console.log(s);

