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
  '52', '5',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let n = +gets();
let k = +gets();
//N! / (K! * (N - K)!)
const fac = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i += 1) {
        fact *= i;
    }
    return (fact);
}
let nk = fac(n-k);
n = fac(n);
k = fac(k);
print(n/(k*nk)|0);