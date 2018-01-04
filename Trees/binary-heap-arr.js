class Heap {
    constructor() {
        this._heap = [];
    }
    getLength() {
        return this._heap.length;
    }
    pushToHeap(value) {
        this._heap.push(value);
        const len = this.getLength();
        if (len > 1) {
            let currI = len - 1;
            while (currI > 0) {
                // backtrack up the tree to the parent
                // and swap if smaller
                const parentI = (currI - 0.5) | 0;
                if (this._heap[parentI] < this._heap[currI]) {
                    [this._heap[currI], this._heap[parentI]]
                    = [this._heap[parentI], this._heap[currI]];
                    currI = parentI;
                } else break;
            }
        }
        return this;
    }
    extractMax() {
        // swaps first with last el
        // pop last(former first)
        const len = this.getLength();
        [this._heap[0], this._heap[len - 1]] =
        [this._heap[len - 1], this._heap[0]];
        const extracted = this._heap.pop();
        let curr = this._heap[0];
        let i = 0;
        while (2*i+1 < len && 2*i+2 < len) {
            // loop runs if the indicies are within the heap
            // checks if at least one child is bigger
            // swaps biggest with the swaps biggest with parent
            // and keep swapping until it find its place in the tree
            if (curr < this._heap[2*i+1] || curr < this._heap[2*i+2]) {
                if (this._heap[2*i+1] <= this._heap[2*i+2]) {
                    [this._heap[i], this._heap[2*i+2]] =
                    [this._heap[2*i+2], this._heap[i]];
                    curr = this._heap[2*i+2];
                    i = 2*i+2;
                } else if (this._heap[2*i+1] > this._heap[2*i+2]) {
                    [this._heap[i], this._heap[2*i+1]] =
                    [this._heap[2*i+1], this._heap[i]];
                    curr = this._heap[2*i+1];
                    i = 2*i+1;
                } else break;
            }
        }
        return extracted;
    }
    print() {
        console.log(this._heap);
    }
}

const myHeap = new Heap();
myHeap.pushToHeap(5).pushToHeap(77).pushToHeap(25).pushToHeap(100);
myHeap.print();
console.log(myHeap.extractMax());
myHeap.print();
