console.log("Apna college");

// for connect this .js file, i have to create an html file and connect with .js file .
console.log("i love python language");

// Variable Rules
//  1.Variable names are case sensitive; “a” & “A” is different.
//2.  Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// 3. Only a letter, underscore( _ ) or $ should be 1st character.
// 4. Reserved words cannot be variable names.

// =========topic: VARIABLE =========
// CREATE VARIABLE

fullname ="tony Stark";
console.log(fullname);  //
price =24;
console.log(price);

x=null;  // here has empty value
y=undefined;  // don't know what is here?
console.log(y) ; //ans: undefined

isFollow = true
console.log(isFollow)

//** js is dynamic type variable  : means: don't need to give type name,  it runtime a take it's type. */

//
_fullName ="ranok";
console.log(_fullName); //ans: ranok

//camel_case: fullName

//================================
/*
let, const & var
 var : Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.

*/

// var not use ok. in ES6 in 2015 , came let and const.
var age=32;
var age=445
console.log(age); //ans: 445

//
let name="ranok";
//let name ="ferdous";  give wrong
//but can update:
// name="ferdous";

const PI =3.14    //can't update it.

let a;
console.log(a); //ans: undefined

// but const must be initialize
//const x;  // give error
//const x =10;  // must be initialize value .

//===============================

// var :  a global scope.
//let : a block scope. work inside a { } , not outside .
// const  also a block scope vairable .

{
    let y=30;
    console.log(y); //ans: 30
}
{
    console.log(y); //ans: undefined

    let x=234;
    console.log(x); //ans: 234
}

// =====TOPIC: DATA TYPES=======
// Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol

let price =100.3
// console.log(typeof(price));
// >price
// <100.3
// >typeof price
// < 'number'
//in console
//=====================

isFollow =true

// >typeof isFollow
// <'boolean'

let b;

// >typeof x
// < 'undefined'

let x= null;

// >typeof x
// < 'object'   ( means: absence of object .)

let y= Bigint("123");

// >x
// < 123n
// >typeof x
// < 'bigint'

let y=Symbol ("Hello !");

// >y
// <Symbol( Hello!)
// >typeof y
// < 'symbol'

//=================================

/*
Non-primitive dataType :
object : 1) Array, 2.function .

object: is a collection of  many values .

ex: students -> name , age,isPass ,marks .

note: in object : data store in value , pair way .
*/

// create Object
const studnet = {
    fullName:"Rahul Kumer",
    age:20,
    cgpa:3.2,
    isPass:true
};

// >studnet
// < { fullName: 'Rahul Kumer', age:20,cgpa:3.2,isPass:true }

//> typeof  student
//< 'object'

// >student["fullName"]
// <'Rahul Kumer'

console.log(student["age"]); //ans:20
console.log(student.age); // ans: 20

//change value of object .
student["age"]+= 23;
console.log(student.age); // 43

// though,  we give const of this object , we can change the value of key .
// we can't update const , but can change const object keys value.
//======================================

