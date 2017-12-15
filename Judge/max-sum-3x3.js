const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '5 5',
    '1 1 3 3 5',
    '-6 -7 2 -3 -1',
    '3 0 -4 5 9',
    '7 -7 0 1 0',
    '-7 -6 -4 -4 9',
    //     '5 5',
    //     ' 1  1 3  3  5',
    //     '-6 -7 2 -3 -1',
    //    '  3  0-4  5  9',
    //    '  7 -7 0  1  0',
    //     '-7 -6-4 -4  9',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const nm = gets().split(' ');
const N = nm[0];
const M = nm[1];

// array.from makes an array with a predetermined size
const matrix = [];

for (let i = 0; i < N; i += 1) {
    const tempArray = gets().split(' ')
        .map((el) => parseInt(el, 10));
    matrix.push(tempArray);
}
let bigSum = -123456;
let currentSum;
for (let row = 0; row < N - 2; row += 1) {
    for (let col = 0; col < M - 2; col += 1) {
        currentSum =
            matrix[row][col] + matrix[row][col + 1] + matrix[row][col + 2] +
            matrix[row + 1][col] + matrix[row + 1][col + 1] + matrix[row + 1][col + 2] +
            matrix[row + 2][col] + matrix[row + 2][col + 1] + matrix[row + 2][col + 2];

        // const str = matrix[row][col] + ' ' + matrix[row][col + 1] + ' ' + matrix[row][col + 2] + ' ' +
        //     matrix[row + 1][col] + ' ' + matrix[row + 1][col + 1] + ' ' + matrix[row + 1][col + 2] + ' ' +
        //     matrix[row + 2][col] + ' ' + matrix[row + 2][col + 1] + ' ' + matrix[row + 2][col + 2];
        //  console.log(str);
        //  console.log('meme');
        if (currentSum > bigSum) {
            bigSum = currentSum;
        }
    }
}
print(bigSum);
//quit(0);
