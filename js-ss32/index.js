// //object literal-{}a
let person = {
//     //Properties:thuộc tính -tính chất 
//     //dùng để chỉ đến các đối tượng cần mo tả 
//     // key:value
//     //key 2:value2,
//     //..
//     //keyN:valueN
    name : "xuân đức",
    age : 20,
    school:"phổ thông ha giang",
    favoriteFood:["mèn mén","thịt chó","pịa"],
    bestFriend: ["thái anh"],
    exBoyfriend:["xuân trường"],
    height:150,
    weight:70,
    single:true,
//     // methods:phương thức - hành động mà các đối tượng có thể thực hiện được
//     // co thể thực hiện được 
//     // key:value (function)
//     // ...
//     // keyN:valueN
    eat:function(){
        console.log("xuân dức ăn mèn mén nhồm nhoàm.Ngon quá...");
    },
    seeFriends:function(){
        console.log("mày bị điên à");
    },
};

// dot Notation(.)
console.log(
    `xin chào,toi la $(person.name),tôi thích món ${person.favoriteFood[2]}`
);

person["height" ];
// read all - duyet qua toan bộ thuoc tính trong 1 đối tượng
// for..in 
for(let key in person){
    person(key)
}
console.log(person);
// let sth = {
//     name:"bàn",
//     age:10,
//     country:"vietnam",
//     material:"wood",
//     height:30,
//     weight:100,
//     useful:true,

//     sing:function(){
//         console.log("la la la"); 
//     },
//     seePeople:function(){
//         console.log("omg...");
//     },
// };
// console.log(sth);

// let student1={
//     id:3,
//     name:"manh hung",
//     age: 18,
//     school:"ptit",
// };

// let student2={
//     id:4,
//     name:"xuan duc",
//     age: 18,
//     school:"ptit",
// };

// let student3={
//     id:3,
//     name:"duc manh",
//     age: 18,
//     school:"ptit",
// };

// function Student(name,id,age,school){
    // keyword"this"
    // khi được sử dụng trong constructor function
    // sẽ đc ngắm ràng buoc tới chính constructor function đó
//     this.id= id;
//     this.name= name;
//     this.age= age;
//     this.school=school;
// }
// let student1 = new Student("thái anh",1,18,"ptit");
// let student2 = new Student("xuan duc",2,18,"ptit");
// let student3 = new Student("tri duc",3,18,"ptit");

// console.log("Student1",student1);
// console.log("Student2",student2);
// console.log("Student3",student3);

class Person {
    constructor (id,name,age,school){
        this.id =id;
        this.name=name;
        this.age=age;
        this.school=school;                                         
    }  
    introduce(){
        console.log("xin chào!!!");
    }
}
    let person1 = new Person("hai anh",2,22,"usa");
    let person2 = new Person("huyen anh",3,22,"usa");
    let person3 = new Person("lan anh",4,22,"usa");
    
    console.log(person1);
    console.log(person2);
    console.log(person3);

    // thuộc tính prototype là gì??
    // cơ chế prototype-based inheritance (kế thừa dạng prototypes)
    // trong javascript la ntn??


