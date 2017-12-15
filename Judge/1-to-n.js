const input = +gets();
let str = '';
for ( let i = 1; i <= input; i += 1) {
    str = str + i;
    if ( i !== input) {
        str += ' ';
    }
}
print(str);