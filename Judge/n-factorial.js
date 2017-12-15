// Write a method that multiplies a number 
// represented as an array of digits by a
//  given integer number.
//  Write a program to calculate N!.

const n = 5;//+gets();
const number = [];
number[0] = 1;
let pos = 0;
for ( let i = 1; i <= n; i += 1) {
    number[pos] *= i;
    if (number[pos] > 9) {
        const temp = number[pos] - 10;
        number[pos] -= 10;
        pos += 1;
        number[pos] = temp;
    }
}
console.log(number.reverse());