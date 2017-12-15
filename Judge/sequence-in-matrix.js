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

const nm = gets().split(' ');
const N = +nm[0];
const M = +nm[1];

const matrix = [];
for (let i = 0; i < N; i += 1) {
    const line = gets().split(' ').map(Number);
    matrix.push(line);
}
let seq = 0;
let maxSeq = 0;
// horizontal pass
for (let i = 0; i < N; i += 1) {
    for (let q = 0; q < M - 1; q += 1) {
        const first = matrix[i][q];
        const second = matrix[i][q + 1];
        if (first === second) {
            seq += 1;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        } else seq = 1;
    }
}
seq = 1;
// vertical pass
for (let i = 0; i < M; i += 1) {
    for (let q = 0; q < N - 1; q += 1) {
        const first = matrix[q][i];
        const second = matrix[q + 1][i];
        if (first === second) {
            seq += 1;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        } else seq = 1;
    }
}
seq = 1;

// under main diagonal pass

for (let i = 0; i < N - 1; i += 1) {
    const saveI = i;
    for (let q = 0; q < M - 1 && i < N - 1; q += 1, i += 1) {
        if (matrix[i][q] === matrix[i + 1][q + 1]) {
            seq += 1;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        } else seq = 1;
    }
    i = saveI;
}
seq = 1;
// over diagonal
for (let i = 0, q = 0; q < M - 1 && i < N - 1; q += 1) {
    const saveQ = q;
    for (; q < M - 1 && i < N - 1; q += 1, i += 1) {
        if (matrix[i][q] === matrix[i + 1][q + 1]) {
            seq += 1;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        } else {
            seq = 1;
        }
    }
    i = 0;
    q = saveQ;
}
seq = 1;
// under reverse diagonal

for ( let row = 0; row < N - 1; row += 1) {
    const saveRow = row;
    for ( let col = M - 1; col > 0 && row < N - 1; col -= 1, row += 1) {
        if (matrix[row][col] === matrix[row + 1][col - 1]) {
            seq += 1;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        } else {
            seq = 1;
        }
    }
    row = saveRow;
}

seq = 1;
// ********over reverse diagonal
// '6 3',
// '92 11 48',
// '09 92 14',
// '17 63 95',
// '34 12 95',
// '26 88 95',
// '26 34 95',

for ( let row = 0, col = M - 1; row < N - 1 && col > 0; col -= 1 ) {
    const saveCol = col;
    for (; col > 0 && row < N - 1; col -= 1, row += 1) {
        if (matrix[row][col] === matrix[row + 1][col - 1]) {
            seq += 1;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        } else {
            seq = 1;
        }
    }
    row = 0;
    col = saveCol;
}

print(maxSeq);
//quit(0);