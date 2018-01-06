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
    '4 3',
    '3 2 4',
    '2 0 3',
    '1 1 5',
    '2 2 5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------
const nm = gets().split(' ').map(Number);
const n = nm[0];
const m = nm[1];
const lab = [];
let pouch = 0;


const validate = (x, y) => {
    return 0 <= x && x < n && 0 <= y && y < m;
};
// ------------
let col = 0;
let row = 0;
for (let i = 0; i < n; i += 1) {
    lab.push(gets().split(' ').map(Number));
    const where2Begin = lab[i].indexOf(0);
    if (where2Begin !== -1) {
        row = i;
        col = where2Begin;
    }
}
for (;;) {
    if (validate(row, col) && lab[row][col] !== 0) {
        lab[row][col] -= 1;
        pouch += 1;
    }
    let max = 0;
    const up = validate(row - 1, col) ? lab[row - 1][col] : -1;
    max = up > max ? up : max;
    const down = validate(row + 1, col) ? lab[row + 1][col] : -1;
    max = down > max ? down : max;
    const left = validate(row, col - 1) ? lab[row][col - 1] : -1;
    max = left > max ? left : max;
    const right = validate(row, col + 1) ? lab[row][col + 1] : -1;
    max = right > max ? right : max;

    if (max <= 0) {
        break;
    }

    if (left === max && validate(row, col - 1)) {
        col -= 1;
    } else if (right === max && validate(row, col + 1)) {
        col += 1;
    } else if (up === max && validate(row - 1, col)) {
        row -= 1;
    } else if (down === max && validate(row + 1, col)) {
        row += 1;
    }
}
console.log(pouch);
