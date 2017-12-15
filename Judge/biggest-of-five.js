

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
    '0',
    '-900',
    '1',
    '-1','1',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a =[];
for (let i = 0; i < 5; i += 1) {
    a[i] = +gets();
}
a.sort((a,b) => {
    return b - a
})
print(a[0]);
/*
const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();
let result;
if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                result = a;
            } else {
                result = e;
            }
        } else {
            if (d > e) {
                result = d;
            } else {
                result = e;
            }
        }
    } else {
        if (c > d) {
            if (c > e) {
                result = c;
            } else {
                result = e;
            }
        } else {
            if (d > e) {
                result = d;
            } else {
                result = e;
            }
        }
    }
} else {
    if (b > c) {
        if (b > d) {
            if (b > e) {
                result = b;
            } else {
                result = e;
            }
        } else {
            if (d > e) {
                result = d;
            } else {
                result = e;
            }
        }
    } else {
        if (c > d) {
            if (c > e) {
                result = c;
            } else {
                result = e;
            }
        } else {
            if (d > e) {
                result = d;
            } else {
                result = e;
            }
        }
    }
}
    print(result);
    //quit(0);*/