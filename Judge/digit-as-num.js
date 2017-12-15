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
  '9',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
let str;
switch (gets())
{
    case '0': str = 'zero'; break;
    case '1': str = 'one';break;
    case '2': str = 'two';break;
    case '3': str = 'three';break;
    case '4': str = 'four';break;
    case '5': str = 'five';break;
    case '6': str = 'six';break;
    case '7': str = 'seven';break;
    case '8': str = 'eight';break;
    case '9': str = 'nine';break;
    default: str =  'not a digit';break;
} print(str);