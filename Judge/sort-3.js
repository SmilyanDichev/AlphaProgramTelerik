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
  '1','2','3',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();
let s = a+' '+b+' '+c;
if ( a > b && a > c) {
    if (b > c) {
        s = a+' '+b+' '+c;
    } else {
        s = a+' '+c+' '+b;
    }
}
if ( b > a && b > c) {
    if (a > c) {
        s = b+' '+a+' '+c;
    } else {
        s = b+' '+c+' '+a;
    }
}
if ( c > b && c > a) {
    if (b > a) {
        s = c+' '+b+' '+a;
    } else {
        s = c+' '+a+' '+b;
    }
}
print(s);
