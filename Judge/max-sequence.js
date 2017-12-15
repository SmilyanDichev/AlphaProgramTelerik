const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const gets = getGets(
['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);

    let array = [];
    const N = gets();
    array = array.slice(1);
    for ( let i = 0; i < N; i += 1) {
        array[i] = +gets();
    }
    let maxSeq = 1;
    let seq = 1;
    for ( let i = 0; i < N - 1; i += 1) {
        if (array[i] === array[i + 1]) {
            seq += 1;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        } else {
            seq = 1;
        }
    }
    print(maxSeq);

    quit(0);