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
    '6 3',
    '92 11 48',
    '09 92 14',
    '17 63 95',
    '34 12 95',
    '26 88 95',
    '26 34 95',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const inputNM = gets(); 
const inputArr = inputNM.split(' ');

const n = inputArr[0];
const m = inputArr[1];
let lines = '';
const matrix = [];
for (let row = 0; row < n; row++) {
    lines = gets();
    matrix[row] = lines.split(' ').map((element) => parseInt(element, 10));
    // matrix[row] = lines.split(' ');
}
// console.log(matrix);
let maxCounter = 0;
let counter = 1;

for (let row = 0; row < matrix.length; row += 1) {
    // Check the element horisontally
    for (let col = 0; col < matrix[row].length - 1; col += 1) {
        if (matrix[row][col] === matrix[row][col + 1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else counter = 1;
    }
    counter = 1;
}

// Check the element vertically
for (let col = 0; col < matrix[col].length; col += 1) {
    for (let row = 0; row < matrix.length - 1; row += 1) {
        if (matrix[row][col] === matrix[row + 1][col]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else counter = 1;
    }
    counter = 1;
}
// '92 11 48',
// '09 92 14',
// '17 63 95',
// '34 12 95',
// '26 88 95',
// '26 34 95',
// Check the diagonal and under diagonal
let rowCount = 0; // save row
for (let row = 0; row < matrix.length - 1; row += 1) {
    rowCount = row;
    for (let col = 0; col < matrix[row].length - 1 && row < matrix.length - 1; col += 1, row +=1) {
        if (matrix[row][col] === matrix[row + 1][col+1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    row = rowCount;
}
counter = 1;
console.log(maxCounter);
// Check over the main diagonal without it
// '92 11 48',
// '09 92 14',
// '17 63 95',
// '34 12 95',
// '26 88 95',
// '26 34 95',
let rowCount2 = 0;
for (let row = 0; row < matrix.length - 1; row += 1) {
    rowCount2 = row;
    for (let col = 0; col < matrix[row].length - 1 && row < matrix.length - 1; col += 1, row +=1) {
        if (matrix[row][col] === matrix[row + 1][col+1]) {
            counter += 1;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    row = rowCount2;
}
counter = 1;
print(maxCounter);
