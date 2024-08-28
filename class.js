/*
1.Array.from()--changes string into Array//we can give array also
console.log(Array.from("Ayush"));
2.Array.of()--Takes multiple strings and make them and array
console.log(Array.of("Ayush",6,10,"Ankit",78));
3.Array.copyWithin()--Copies 
let arr = [7,0,4,12,8,3,34,90];
console.log(arr.copyWithin(3,1,4));//last parameter is excluded....
4.Array.find()
5.Array.findIndex()
6.Array.enteries()
7.Array.keys()
8.Array.values()
9.Array.fill()
*/


// let arr1 = [9,7,5,4,7,2];
// satisfiedeven = arr1.find((arr1)=>{
//     return arr1%2==0;
// });
// console.log(satisfiedeven);

// satisfiedIndex = arr1.findIndex((arr1)=>{
//     return arr1%2==0;
// });
// console.log(satisfiedIndex);

let arr=[7,0,4,12,8,3,34,90];
console.log(...arr.entries());
console.log(...arr.keys());
console.log(...arr.values());
arr.fill(9,3,6);//last parameter is excluded...
console.log(arr);