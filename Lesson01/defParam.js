// Tham số mặc định
// khai báo ở phần cuối danh sách tham số

function add(num1, num2=100){
    let res = num1+num2;
    console.log(num1 + "+" + num2 + "=" + res);
}

add(100,200); // 300
add(100); // 200

// Khai báo bên trong hàm

function showName (name){
    name = name || "Devmaster Academy";
    console.log("Welcome to,", name);
}

showName();
showName("Chung Trịnh Văn");
