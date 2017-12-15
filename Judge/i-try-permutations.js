const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    1, 2, 3,
  ];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
//INPUT is wrong
const input = gets();
const numbers =[];
for ( let i = 1; i <= input; i += 1) {
    numbers.push(i);
}
const result = [];
const permute = (arr, temp = []) => {
    const len = arr.length;
    if (len === 0) {
        result.push(temp);
    } else {
        for ( let i = 0; i < len; i += 1) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permute(curr.slice(), temp.concat(next));
        }
    }
};
permute(numbers);
print(result);