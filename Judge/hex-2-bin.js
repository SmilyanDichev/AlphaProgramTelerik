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
    '1A2B3C4D5E6F',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const h2b = (n) => {
    switch (n) {
        case '0': return '0000'; break;
        case '1':
            return '0001';
            break;
        case '2':
            return '0010';
            break;
        case '3':
            return '0011';
            break;
        case '4':
            return '0100';
            break;
        case '5':
            return '0101';
            break;
        case '6':
            return '0110';
            break;
        case '7':
            return '0111';
            break;
        case '8':
            return '1000';
            break;
        case '9':
            return '1001';
            break;
        case 'A':
            return '1010';
            break;
        case 'B':
            return '1011';
            break;
        case 'C':
            return '1100';
            break;
        case 'D':
            return '1101';
            break;
        case 'E':
            return '1110';
            break;
        case 'F':
            return '1111';
            break;
    }
}
const n = gets();
let s = '';
for (let i = 0; i < n.length; i += 1) {
    s += h2b(n[i]);
}
print(s.replace(/^0+/, '')); print('000110100010101100111100010011010101111001101111');