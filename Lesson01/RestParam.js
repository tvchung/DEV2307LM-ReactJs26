// Rest Parameter : Tham số còn lại

function add(num1, num2, ...otherNum){
    console.log("============");
    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("otherNum:", otherNum);
}

add(100,200); // 
add(100,200,300);
add(100,200,500,600,700);
