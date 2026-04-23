// const add = (a,b) => a+b;
// console.log(add(2,3));
// const multiply = (a,b) => a*b;
// console.log(multiply(2,3));
// const sayhi = () => console.log("hi everyone");
// sayhi();
let orginal_array = [1, 2, 3, 4, 5];
let squarred_array = orginal_array.map(num=> num*num);
for( i=0; i<squarred_array.length; i++)
{
    console.log(squarred_array[i]);
}
let total = orginal_array.reduce((a,c)=>a+c,0);
console.log(total);