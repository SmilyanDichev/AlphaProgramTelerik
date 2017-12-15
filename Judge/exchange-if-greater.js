let a = +gets();
let b = +gets();
if ( a > b) {
    let temp = a;
    a = b;
    b = temp;
}
print(a + " " + b);
quit(0);