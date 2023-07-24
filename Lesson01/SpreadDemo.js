// cú pháp spread
// cho phép lặp lại giá trị (clone)
var oldArr = [1,2,3];
var newArr = [oldArr,4,5,6];
console.log("oldArr:",oldArr);
console.log("newArr:",newArr);

console.log("=========spread");
var oldArr = [1,2,3];
var newArr = [...oldArr,4,5,6];
console.log("oldArr:",oldArr);
console.log("newArr:",newArr);