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
    '6 7',
    '5',
    'UR 5',
    'RD 2',
    'DL 3',
    'LU 6',
    'DR 5',
];

const test1 = [
    '2 2',
    '10 ',
    'UR 2',
    'LD 100',
    'DR 500',
    'UL 500',
    'UL 5',
    'LD 120',
    'RD 123',
    'LU 321',
    'UR 2',
    'LD 100',
];
const test2 = [
    '3 3',
    '4',
    'UR 22',
    'DL 2',
    'DR 8',
    'UL 75',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);

const numberLines = +gets();
const field = Array.from({
    length: rows,
});

for (let i = 0; i < rows; i += 1) {
    field[i] = Array.from({
        length: cols,
    }).fill(0);
}

for (let bar = 1; bar < rows; bar += 1) {
    field[bar][0] = field[bar - 1][0] + 3;
}
for (let foo = 0; foo < rows; foo++) {
    for (let bar = 1; bar < cols; bar += 1) {
        field[foo][bar] += field[foo][bar - 1] + 3;
    }
}
field.reverse();

let x = rows - 1;
let y = 0;
let summation = 0;

const isPathValid = (rower, coler) => {
    return (rower >= 0 && rower < rows) && (coler >= 0 && coler < cols);
};
const move = (direction) => {
    switch (direction) {
        case 'RU':
        case 'UR':
            if (isPathValid(x - 1, y + 1)) {
                x--;
                y++;
            }
            break;

        case 'LU':
        case 'UL':
            if (isPathValid(x - 1, y - 1)) {
                x--;
                y--;
            }
            break;
        case 'DL':
        case 'LD':
            if (isPathValid(x + 1, y - 1)) {
                x++;
                y--;
            }
            break;
        case 'RD':
        case 'DR':
            if (isPathValid(x + 1, y + 1)) {
                x++;
                y++;
            }
            break;
            default: break;
    }
};
for (let i = 0; i < numberLines; i += 1) {
    let [way, steps] = gets().split(' ');
    steps = +steps;

    for (let baz = 0; baz < steps - 1; baz++) {
        move(way);
        summation += field[x][y];
        field[x][y] = 0;
    }
}
print(summation);
