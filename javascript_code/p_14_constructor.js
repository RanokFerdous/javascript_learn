// TIME: 8:51:00 CONSTRUCTOR LEARN

class ToyotaCar{
    // constructor(){
    //     console.log("i am constructor");
    // }
    // argument in constructor
constructor(brand,milege){
        console.log("take a brand name");
        this.brand=brand;
        this.milege=milege;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand,milege){
        this.brand=brand;
        this.milege=milege;
    }
}

let fortuner = new ToyotaCar(); //ans:i am constructor
fortuner.setBrand("fortuner");

let lexus = new ToyotaCar(); //ans: i am constructor
lexus.setBrand("lexus");

// send brandName as argument
let fortuner1 = new ToyotaCar("Bata",10); //ans:i am constructor
console.log(fortuner1);

//> fortuner1
//< ToyotaCar {brand: 'Bata',mileage:10 }

//====INHERITANCE===8:57:00   ===
/*
Defination:  INHERITANCE is passing down properties & method from parent class to child class.

=> use  extends  for  inheritance
METHOD OVERRIDING:  if child & parent have same method , child's method will be used .[ THAT IS method overriding. ]

*/

class parent {
    constructor(){
       console.log("enter parent constructor");
       this.species= "homo sapiens"; // that is property.
    }
    hello(){ console.log("hello"); }
}

// class Child extends parent {

// }
// let obj = new Child();
// console.log(obj.hello()); // hello

class Person extends parent {
    eat( ){ console.log("eat.."); }
    sleep(){ console.log("sleep.."); }
}

class Engineer extends Person {
    constructor(branch){
    console.log("enter child constructor");
        super(branch); // to invoke parent class constructor.
// child class: is derived class.
// if we create constructor in :  child class , then use:  super ()
        this.branch = branch;
    console.log("exit child constructor");
    }

    work(){
        super.eat();  // at first eat,then work
        console.log("solve problem..");
    }
}

let ranok_obj = new Engineer();
//enter child constructor
// enter parent constructor
// exit child constructor
console.log(ranok_obj.eat());
console.log(ranok_obj.hello());
console.log(ranok_obj); //Engineer {species: 'homo sapiens', branch: undefined}

//=====SUPER KEYWORD: used to call the constructor of its parent class to access the parent's properties & method.
// super ( args) //  calls Parent's constructor.
//super.parentMethod( args)

//here. super() => it call the parent class constructor.

//========PRACTICE QUESTION =============
/*
prac: 01: Y ARE creating a website for your college. Create a class User with 2 properties, name & email. it also has a method called viewData() that allows to view website data.

QS 02: create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website.
*/
//solve :

let DATA ="secret information";
class User {
    constructor( name,email){
        this.name=name;
        this.email= email;
    }

    viewData(){
        console.log(DATA);
    }
}
//QS 02:
class Admin extends User{
// child a constructor create korla, we have to call also parent class constructor using super keyword.
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA= "some new value";
    }
}

let stu1 = new User("ranok","ra@emil.com");
let stu2 = new User("imran","imran@email.com");
console.log(stu1.viewData()); // secret infor..

//=======TOPIC: ERROR HANDLING==
/*  try(){
    // normal code
    } catch(err) {  // err is error object
     //handle error
    }
*/
let a=3;
let b=23;
console.log("a= ",a);
console.log("b=",b);
try{
    console.log("a+b=",a+c); //give error
}catch(err){
    console.log(err);
}
console.log("a+b= ",a+b); // a+b=26
