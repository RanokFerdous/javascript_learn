
const student ={
    fullName:"shradha Khapra",
    marks:93,
    printMarks:function(){
        console.log("marks = ",this.marks); // this.marks means: student.marks
    },
};

/*
>  student
<  {fullName: 'shradha Khapra', marks: 93, printMarks: ƒ}
*/

let arr=["apple","mango","banana"];
console.log(typeof arr); //object

arr.push("tomato");

//> arr
//< (4) 1:'apple', 2:'mango', 3:'banana', 4:'tomato'
// [[Prototype]] : Array(0)
//this prototype has: all type of function like: push, pop,toString,
// Prototype=> objects => javascript object .

// **we can create own prototype or fnx.
const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
    //another way for fnx declare
    calcTax2:function(){
        console.log("tax rate is 15%");
    }

};

console.log(employee.calcTax()); //tax rate is 10%
console.log(employee.calcTax2()); //tax rate is 15%
// create new object.
const karanArjun ={
    salary:50000,

};
// we can set prototype( use : for another fnx's object using )
karanArjun.__proto__ = employee; //inherit employee fnx

console.log(karanArjun.calcTax2()); //tax rate is 15%

/* NOTE: WHAT IS PROTOTYPE?
ANS: =>  A javascript obj is an entity having state and behavior ( Properties & Method)
=> 2.js obj has an special properties called: Prototype.
=> 3.we can set ** prototype using: __proto__
=>**if obj & prototype have same method. Object's method will be used.

PROTOTYPE  : is actually is reference of an : object.
*/
karanArjun2.__proto__ = employee;
const karanArjun2 ={
    salary:70000,
    calcTax(){
        console.log("tax rate is 20%");
    }

};
//ans: tax rate is 20%
// if obj & prototype have same method. Object's method will be used.
// here, calTax() is same method , here , own method will be used.

//=========================================

const karan= {
    salary:5000 ,
};
const karan1= {
    salary:5000 ,
};
const karan2= {
    salary:5000 ,
};

karan.__proto__ = employee;
karan1.__proto__ = employee;
karan2.__proto__ = employee;

///==========TOPIC: CLASSES ===========================
/*
DEFINATION: Class is a program-code template for creating objects.
=> those obj will have some state ( variable) & some behaviour( function ) inside it.

class MyClass {
        constructor() { ....}
        myMethod(){...}
}

let myObj = new myClass();

*/

class ToytoCar1 {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop..");
    }
    setBrand(brand){
        this.brandName= brand;
    }
}

// create a new object : fortuner, through classes
let fortuner = new ToytoCar1();
// console.log(fortuner.start());

// > typeof fortuner
//< 'object'
// fortuner.start()  is work .
fortuner.setBrand("fortuner");

let lexus = new ToytoCar1();
lexus.setBrand("lexus");

// time: 8:51:00 p_14 part