// bit convert

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
  '28,1,45,255',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------

const n = gets().split(',').map((el) => (+el).toString(2));
const bin = Array.from({ length: n.length }).fill('');
for (let i = 0; i < n.length; i += 1) {
    while (n[i].length < 8) {
        n[i] = '0' + n[i];
    }
    if (i % 2 ===0) {
        for (let q = 1; q < 8; q += 2) {
            bin[i] = bin[i] + n[i][q];
        }
    } else {
        for (let q = 0; q < 8; q += 2) {
            bin[i] = bin[i] + n[i][q];
        }
    }
}
print(bin.join(''));
print(bin);
print('0110000000111111');


// 28 = 00011100
// 1 = 00000001
// 45 = 00101101
// 255 = 11111111

