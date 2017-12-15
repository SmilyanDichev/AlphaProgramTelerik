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
  'integer',
  '25',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = gets(); 
let a;
let s;
switch (n) {
    case 'integer': 
    a = +gets();
    s = a + 1; 
    print(s); break;
    case 'real': 
    a = +gets();
    s = a + 1; 
    print(s.toFixed(2)); break;
    case 'text':
    s = gets() + '*';
    print(s); break;
}
