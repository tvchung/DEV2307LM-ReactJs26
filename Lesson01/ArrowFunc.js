// normal function / arrow function

// normal function
function add(num1, num2){
    return num1 +num2;
}

console.log("add:",add(100,200));

var sum = function(num1, num2){
    return num1+num2;
}
console.log("sum:",sum(100,200));

//arrow function

var fn_Add = (num1, num2) =>{
    return num1+num2;
}
console.log("fn_Add:", fn_Add(200,100));

const fn_Show = (name="Devmaster") =>{
    console.log("Welcome to, ", name);
}

fn_Show();
fn_Show("Chuung Trịnh");