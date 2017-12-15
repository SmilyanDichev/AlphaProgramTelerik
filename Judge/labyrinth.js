const lab = [
    [' ', ' ', ' ', 'x', ' ', ' ', ' '],
    ['x', 'x', ' ', 'x', ' ', 'x', 'e'],
    [' ', 'e', ' ', ' ', ' ', ' ', ' '],
    [' ', 'x', 'x', 'x', ' ', 'x', ' '],
    [' ', ' ', ' ', ' ', 'e', 'x', 'e'],
];

const N = lab.length;
const M = lab[0].length;

const printLab = (lab) => {
    for (const row of lab) {
        console.log(row
            .map((cell) => {
                if (cell < 10 || cell.length === 1) {
                    return ' ' + cell;
                }

                return cell;
            })
            .join(' '));
    }
    console.log('-'.repeat(10));
};

const inRange = (value, max) => {
    return 0 <= value && value < max;
};

const pathFinder2 = (lab, x, y, step) => {
    if (!inRange(x, N) ||
        !inRange(y, M) ||
        (lab[x][y] !== ' ' && lab[x][y] !== 'e')) {
        return;
    }

    if (lab[x][y] === 'e') {
        printLab(lab);
        // return;
    }
    const cell = lab[x][y];
    lab[x][y] = step;
    pathFinder2(lab, x + 1, y, step + 1);// down
    pathFinder2(lab, x - 1, y, step + 1);// up
    pathFinder2(lab, x, y + 1, step + 1);// right
    pathFinder2(lab, x, y - 1, step + 1);// left
    lab[x][y] = cell;
};

const pathFinder = (lab, x, y, step) => {
    const cell = lab[x][y];
    if (cell === 'e') {
        // if (x === N - 1 && y === M - 1) {
        console.log('eyy i did it, lads!');
        lab[x][y] = step;
        printLab(lab);
        lab[x][y] = cell;
        return;
    } else if (cell === ' ' || cell === 'e') {
        if (cell === ' ') {
            lab[x][y] = step;
        }
        step += 1;
        // right
        if (0 <= x &&
            x < N &&
            0 <= y + 1 &&
            y + 1 < M &&
            (lab[x][y + 1] === ' ' ||
                lab[x][y + 1] === 'e')) {
            pathFinder(lab, x, y + 1, step);
        }
        // down
        if (0 <= x + 1 &&
            x + 1 < N &&
            0 <= y &&
            y < M &&
            (lab[x + 1][y] === ' ' ||
                lab[x + 1][y] === 'e')) {
            pathFinder(lab, x + 1, y, step);
        }
        // left
        if (0 <= x &&
            x < N &&
            0 <= y - 1 &&
            y - 1 < M &&
            (lab[x][y - 1] === ' ' ||
                lab[x][y - 1] === 'e')) {
            pathFinder(lab, x, y - 1, step);
        }
        // up
        if (0 <= x - 1 &&
            x - 1 < N &&
            0 <= y &&
            y < M &&
            (lab[x - 1][y] === ' ' ||
                lab[x - 1][y] === 'e')) {
            pathFinder(lab, x - 1, y, step);
        }
    }
    lab[x][y] = cell;
};
pathFinder2(lab, 0, 0, 1);