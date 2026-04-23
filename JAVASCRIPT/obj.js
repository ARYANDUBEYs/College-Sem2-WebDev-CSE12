let person = {
    name: "Aryan",
    age: 18,
    city: "jaunpur"
};
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

let numbers = [1,2,3];
let mixedArray = [1, "hello", true, {name: "Alice"}, [3,5,6]];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);

let squared_array = numbers.map(num => num * num);
//console.log(squared_array);
let com_array = mixedArray.map(num => num * num );
console.log(com_array);
console.log(typeof(mixedArray));

