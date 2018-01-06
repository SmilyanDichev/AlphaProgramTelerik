// let n = 'string';
// const m = n.slice(1, 5);
// const r = m.repeat(6);
// n = n.split('');
// n.splice(1, 5-1, r);
// n = n.join('');
// console.log(n);
let n = 'б4{р}е5{й}';
let numStr = '';
const numStack = [];
const bracketStack = [];
for (let i = 0; i < n.length; i+=1) {
    if (!isNaN(+n[i])) {
        numStr += +n[i];
        continue;
    } else if (isNaN(n[i]) && +numStr !== 0) {
        numStack.push(+numStr);
        numStr = '';
    }

    if (n[i] === '{') {
        bracketStack.push(i);
    }
    if (n[i] === '}') {
        const begin = bracketStack.pop() + 1;
        const end = i;
        const whatToRepeat = n.slice(begin, end);
        let howMany = numStack.pop();
        const repeated = whatToRepeat.repeat(howMany);
        n = n.split('');
        howMany = howMany.toString().length;
        n.splice(begin - howMany -1, end - begin + howMany + 2, repeated);
        n = n.join('');
        i = begin - 1;
    }
}
console.log(n);
