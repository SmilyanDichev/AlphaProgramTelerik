
//2*i+1
//2*i+2
const pushToHeap = (arr, value) => {
    arr.push(value);
    if (arr.length > 1) {
        let currI = arr.length - 1;
        while (currI > 0) {
            const parentI = (currI - 0.5) | 0;
            if (arr[parentI] > arr[currI]) {
                [arr[currI], arr[parentI]] = [arr[parentI], arr[currI]];
                currI = parentI;
            } else break;
        }
    }
};
const arr = [];
pushToHeap(arr, 5);
console.log(arr);
pushToHeap(arr, 25);
console.log(arr);
pushToHeap(arr, 100);
console.log(arr);
pushToHeap(arr, 7);
console.log(arr);
pushToHeap(arr, 6);
console.log(arr);
pushToHeap(arr, 101);
console.log(arr);
