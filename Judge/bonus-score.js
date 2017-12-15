//const n = +gets();
const a = (n) => {
let s;
if ( 1 <= n && n <= 3) {
    s = n*10;
} else
if ( 4 <= n && n <= 6) {
    s = n*100;
} else
if ( 7 <= n && n <= 9) {
    s = n*1000;
} else
if ( 0 >= n || n > 9) {
    s = 'invalid score';
}
console.log(s);
};
a(0);
a(1);
a(3);
a(4);
a(6);
a(7);
a(9);

