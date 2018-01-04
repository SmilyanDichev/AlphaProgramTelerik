class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}
class BinTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        let curr = this.root;
        const newNode = new Node(value);
        while (curr) {
            if (value > curr.value) {
                if (!curr.right) {
                    curr.right = newNode;
                    break;
                } else {
                    curr = curr.right;
                }
            } else {
                if (!curr.left) {
                    curr.left = newNode;
                    break;
                } else {
                    curr = curr.left;
                }
            }
        }
    }
    find(value) {
        // prints node as discount manual validation
        let curr = this.root;
        while (curr) {
            if (curr.value === value) {
                console.log(curr);
                return;
            }
            if (curr.value < value) {
                if (!curr.right) {
                    console.log('no such node');
                    return;
                }
                if (curr.right.value === value) {
                    console.log(curr.right);
                    return;
                }
                curr = curr.right;
            } else {
                if (!curr.left) {
                    console.log('no such node');
                    return;
                }
                if (curr.left.value === value) {
                    console.log(curr.left);
                    return;
                }
                curr = curr.left;
            }
        }
    }
}

const binTree = new BinTree();
binTree.add(1);
binTree.add(2);
binTree.add(3);
binTree.add(25);
binTree.add(-10);
binTree.find(3);
