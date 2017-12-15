const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};



/*function getGets(arr) {
    let index = 0;
    return () => {
        return arr[index++];
    };
}
*/
const gets = getGets([
    '2',
    '1 3',
    '123 -3',
]);


const N = +gets();

for (let i = 0; i < N; i += 1) {
    const xy = gets().split(' ');
    console.log(+xy[0] + +xy[1]);
}

