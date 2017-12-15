const n = +gets();
let s = '';
for ( let i = 0; i <= n; i += 1) {
    if (i % 3 !== 0 && i % 7 !== 0) {
        s = s + i + ' ';
    }
print(s.trim());