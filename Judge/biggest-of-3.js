/*const a =[];
for(let i = 0; i < 3; i += 1) {
    a[i] = +gets();
}
a.sort((a,b) => {
    return b - a
})
print(a[0]);*/

a = +gets();
b = +gets();
c = +gets();
let str = a;
if (a >= b)
{
    if (a >= c)
    {
        str = a;
    }else
    {
        str = c;
    }
}else if (b >= a)
{
    if (b >= c)
    {
        str = b;
    }
    else
    {
        str = c;
    }
}
print(str);