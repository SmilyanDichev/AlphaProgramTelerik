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
    '6',
    '7',
    '3',
    '4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const N = +gets(); // rows
const M = +gets(); //col of MAtRIX
const R = +gets(); // start row
const C = +gets(); // start col

const field = [];

// class Queue {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     enqueue(value) {
//         const node = {
//             value: value,
//             next: null,
//         }
//         if (!this.head) {
//             this.head = node;
//             this.tail = node;
//             this.length += 1;
//             return;
//         }
//         this.tail.next = node;
//         this.tail = node;
//         this.length += 1;
//         return;
//     }

//     dequeue() {
//         if (!this.head) {
//             return;
//         }
//         this.length -=1;
//         const value = this.head;
//         this.head = this.head.next;
//         return value.value;
//     }
// }

// const q = new Queue();

for (let I = 0; I < N; I+=1) {
    field.push( Array.from( { length: M } ).fill(0));
}

field[R][C] = 1;

const validate = (x, y) => {
    const isOnField = (0 <= x && x < N) && (0 <= y && y < M);
    if (isOnField) {
        const isEmpty = field[x][y] === 0;
        return isEmpty && true;
    }
     return false;
}
const arr = [];
const attackHere = (x, y, value) => {
    if (validate(x, y)) {
        field[x][y] = value + 1;
        // DFS
        // print(field);
        // attackFrom(x, y);

        // BFS
        // q.enqueue([x, y]);
        arr.push([x, y]);
    }
};

const attackFrom = (x, y) => {
    // validate and go on each position
    attackHere(x - 2, y - 1, field[x][y]);// go up up left
    attackHere(x - 2, y + 1, field[x][y]); // go up up right
    attackHere(x - 1, y - 2, field[x][y]); // go up left left
    attackHere(x - 1, y + 2, field[x][y]);// go up right right
    attackHere(x + 1, y - 2, field[x][y]);// go down left left
    attackHere(x + 1, y + 2, field[x][y]);// go down right right
    attackHere(x + 2, y - 1, field[x][y]);// go down down left
    attackHere(x + 2, y + 1, field[x][y]);// go down down right
};
attackFrom(R, C);

while  (arr.length > 0) {
    // const item = q.dequeue();
    const item = arr.shift();
    // print(field);

    attackFrom(item[0], item[1]);
}
for (let i = 0; i < N; i+=1) {
    print( field[i][  (M/2) | 0 ] );
}
