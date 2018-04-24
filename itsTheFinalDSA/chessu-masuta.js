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
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3',
];

const test1 = [
    '5',
    '5',
    'Q---Q',
    '-----',
    '-B---',
    '--R--',
    'Q---Q',
    '10',
    'a1 a1',
    'a1 d4',
    'e1 b4',
    'a5 d2',
    'e5 b2',
    'b3 d5',
    'b3 a2',
    'b3 d1',
    'b3 a4',
    'c2 c5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const R = +gets();
const C = +gets();
const chessBoard = [];
for (let foo = 0; foo < R; foo+=1) {
    const line = gets().split('');
    chessBoard.push(line);
}
const T = +gets();
const calculateRow = (foo) => {
    return R - foo;
};
const calculateCol = (foo) => {
    return foo.charCodeAt(0) - 97; // 'a' to ASCII
};
const goBish = (y, x, rule, xRule, yRule) => {
    for (let i = 0; i < rule; i+=1) {
        x+=xRule;
        y+=yRule;
        if (chessBoard[x][y] !== '-') {
            return false;
        }
    }
    return true;
};
const moveDiagonally = (startY, startX, endY, endX) => {
    if (startY === endY || startX === endX) return false;
    if (Math.abs(startY - endY) !== Math.abs(startX - endX)) return false;
    if ( startY > endY && startX > endX) {
        return goBish(startY, startX, startY - endY, -1, -1);
    } else if ( startY < endY && startX > endX) {
        return goBish(startY, startX, endY - startY, -1, +1);
    } else if ( startY > endY && startX < endX) {
        return goBish(startY, startX, startY - endY, +1, -1);
    } else if ( startY < endY && startX < endX) {
        return goBish(startY, startX, endY - startY, +1, +1);
    } else return false;
};
const goRook = (rule, start, static, posRule, isRow) => {
    let pos = start;
    for (let i = 0; i < rule; i+=1) {
        pos += posRule;
        if (isRow) {
            if (chessBoard[pos][static] !== '-') {
                return false;
            }   
        } else {
            if (chessBoard[static][pos] !== '-') {
                return false;
            }   
        }
    }
    return true;
};
const moveOtherwise = (startY, startX, endY, endX) => {

    if (startY === endY) {
        if ( startX > endX) {
            return goRook(startX - endX, startX, startY, -1, true);
            // let pos = startX;
            // for (let i = 0; i < startX - endX; i+=1) {
            //     pos -= 1;
            //     if (chessBoard[pos][startY] !== '-') {
            //         return false;
            //     }   
            // }
            // return true;
        } else {
            return goRook(endX - startX, startX, startY, +1, true);
            // let pos = startX;
            // for (let i = 0; i < endX - startX; i+=1) {
            //     pos += 1;
            //     if (chessBoard[pos][startY] !== '-') {
            //         return false;
            //     }   
            // }
            // return true;
        }
    } else if (startX === endX) {
        if ( startY > endY) {
            return goRook(startY - endY, startY, startX, -1, false);
            // let pos = startY;
            // for (let i = 0; i < startY - endY; i+=1) {
            //     pos -= 1;
            //     if (chessBoard[startX][pos] !== '-') {
            //         return false;
            //     }   
            // }
            // return true;
        } else {
            return goRook(endY - startY, startY, startX, +1, false);
            // let pos = startY;
            // for (let i = 0; i < endY - startY; i+=1) {
            //     pos += 1;
            //     if (chessBoard[startX][pos] !== '-') {
            //         return false;
            //     }   
            // }
            // return true;
        }
    }
    return false;
};

const advance = (startY, startX, endY, endX) => {
    if (startY === endY && startX === endX) return print('no');
    if (chessBoard[startX][startY] === '-') return print('no');

    if (chessBoard[startX][startY] === 'R') {
        if (moveOtherwise(startY, startX, endY, endX)) {
        return print('yes');
        }
        return print('no');
    } else if (chessBoard[startX][startY] === 'B') {
        if (moveDiagonally(startY, startX, endY, endX)) {
            return print('yes');
        }
        return print('no');
    } else if (chessBoard[startX][startY] === 'Q') {
        const rook = moveOtherwise(startY, startX, endY, endX);
        if (rook) return print('yes');
        const bish = moveDiagonally(startY, startX, endY, endX);
        if (bish) return print('yes');
        return print('no');
    } else return print('no');
};
for (let foo = 0; foo < T; foo+=1) {
    const [moveFrom, moveTo] = gets().split(' ');
    const yFrom = calculateCol(moveFrom[0]);
    const xFrom = calculateRow(moveFrom[1]);
    const yTo = calculateCol(moveTo[0]);
    const xTo = calculateRow(moveTo[1]);
    // print(`x= ${xFrom} y= ${yFrom} => x= ${xTo} y= ${yTo}`);

    advance(yFrom, xFrom, yTo, xTo);
}
// print(chessBoard);
// R rooks
// B bishops
// Q queens
