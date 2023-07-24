// trích xuất dữ liệu từ mảng, đối tượng

var arr = [11,33,22,44];
console.log(arr);

const [a,b,c] = arr;
console.log("a=",a); // a=11
console.log("b=",b); // b=33
console.log("c=",c); // b=22

// object
var obj = {
    name:"Chung Trịnh",
    age:44,
    address:"25 Vũ Ngọc Phan",
    company:"Devmaster Academy"
}
// destructuring
const {name, company} = obj;
console.log("Welcome to,", name);
console.log("company:",company);

const {address, age} = obj;
console.log("Welcome to,", name);
console.log("age:",age);