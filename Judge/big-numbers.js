const entryF = (input) => {
    return input.split(' ').map(Number);
};
const nm = entryF(gets());
const N = +nm[0];
const M = +nm[1];
const firstNum = entryF(gets());
const secondNum = entryF(gets());
