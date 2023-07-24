// slide
class Person{
    // field:

    // constructor - hàm khởi tạo
    constructor(){
        this.name="Chung Trịnh",
        this.age=44
    }
    // getter / setter
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name
    }
    setAge(age){
        this.age=age;
    }
    getAge(){
        return this.age;
    }

    // method
    display(){
        console.log("Welcome to,", this.name);
        console.log("Age:", this.age);
    }
}

// sử dụng lớp đối tượng
var p1 = new Person();
p1.display();

p1=new Person("Devmaster",7);
p1.display();


p1.setName("Tuấn anh")
p1.setAge(20);
console.log("Name:",p1.getName());
console.log("Age:",p1.getAge());

p1.display();

// lớp kế thừa
class Student extends Person{
    //field
    address="25 Vũ Ngọc Phan";
    // hàm khởi tạo
    constructor(name, age, address, studentId){
        super(name,age);
        this.address=address;
        this.studentId=studentId;
    }

    // method
    getStudentInfo(){
        return "Mã:" + this.studentId + ";Tên:"+this.getName()+ "; Tuổi:"+this.getAge()+";Địa chỉ:"+this.address;
    }

}

var stud = new Student();
console.log(stud.getStudentInfo());
var stud = new Student("Chung chung",44, "25 VNP","SV002");
console.log(stud.getStudentInfo());