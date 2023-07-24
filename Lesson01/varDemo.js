// Demo var
// -- Local / Global
// Global variable
var x = 100;
console.log("Gia trị biến x=",x);
function VarDemo(){
    var y=200;
    console.log("Giá trị x trong hàm:",x);
    console.log("Giá trị y trong hàm:",y);

    var x=1000;
    console.log("Giá trị x trong hàm:",x);
}

VarDemo();
console.log("Giá trị x ngoài hàm:",x);
//console.log("Giá trị y ngoài hàm:",y); // Error
var x = 500; // khai báo lại
console.log("Gia trị biến x=",x);
