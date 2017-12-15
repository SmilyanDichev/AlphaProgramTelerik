const n = 23;// +gets();
const array = Array.from( { length: n + 1 } );
array.fill(1);

const length = n;
for (let i = 2; i < length + 1; i += 1 ) {
    if (array[i] === 1) {
        for ( let q = 2*i; q < length + 1; q += i) {
array[q] = 0;
}
    }
}
print(array.lastIndexOf(1));
/* console.log(array.lastIndexOf(1););
for (let i = length; i > 0; i -= 1) {
    if ( array[i] === 1) {
        //console.log(array.lastIndexOf(1););
        print(i);
        break;
    }
}*/
