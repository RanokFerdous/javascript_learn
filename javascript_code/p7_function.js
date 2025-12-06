// function :part_7_lean function topic

/*
Function : Block of code that perform a specific task, can be invoked whenever needed.
*/

console.log("function Learn now , in part_7");

console.log("abc".toLowerCase());
console.log([1,35,23].push(34)); // ans: 4 size print

/*
function definition:

function functionName(){
//do some work
}


 ***function call:
 functionName();

 function functionName(param1,param2...){
 //do some work
 }

*/

//create fnx
function myFunction (){
    console.log("welcome to Apna College");
    console.log("we are learning js.");
}

//call fnx
myFunction();  // print the upper 2 line

//fnx : remove redundancy , repeat.

//fnx with parameter
//NOTE: FNX  defination : it called : "parameter"
function message(msg){ // msg: is parameter .
    console.log(msg);
}
// in fnx call: it called :argument.
message("how "); // how : is a argument.
//NOTE: **
//===============================================

function sum(x,y){
    console.log(x+y); //8
}

sum(3,5);

// return from fnx

function mul(a,b){
    m=a*b;
    return m;
}
console.log(mul(4,6)); // ans: 24
//=======

// topic: Arrow Function : Compact way of writing a function .

/*
const functionName = ( param1, param2,..)=> {
    //do some work
}
*/
(e,f)=> { console.log(9*9); }  //don't print

const sum1=(a,b)=> {  return a+b ;  }

console.log(sum1(4,9)); //13

const mul1=(c,d)=>  console.log(c*d); // not give parenthesis here, this also run.
mul1(4,8); //32

// without parameter
const printHello=()=> { console.log("Hello "); }
printHello();

/* QS1: Create a fnx using "function" keyword that takes as string as an argument & returns the number of vowels in the string .
QS2: Create an arrow fnx to perform the same task .
*/

function count(  name){

let cnt=0;
for ( const char of name){
    if(char ==="a" ||char ==="e"||char ==="i"||char ==="o"||char ==="u"   ){
        cnt++;
    }
}
console.log(cnt); //ans:8
}

count("ranok ferdous haque");
//============================
//using arrow fnx

const countVow= (str)=> {
    let cnt=0;
for ( const char of str){
    if(char ==="a" ||char ==="e"||char ==="i"||char ==="o"||char ==="u"   ){
        cnt++;
    }
}console.log(cnt);
}
countVow("sjuki nobata doramon senchen"); //ans: 10

//======================forEach loop=======
// TOPIC:  forEach LOOP IN ARRAYS

/*   arr.forEach (callBackFunction )

CallBackFunction: Here, it is a function to execute for each element in the array.

QS: *** WHAT IS CALLBACK FUNCTION?
NOTE: ** A callback is a function passed as an **argument to another **function
*/
/*
forEach is: actually a method.

what is method?
ans: if we connect any function with an object , then that will be : method.

*/
/*  SYNTAX:
arr.forEach(( val) =>{
    console.log(val );
})

*/

/*
we can't use:  [1,2,3].toUpperCase();

we need a string every time to use function.
we can use:  "abc".toUpperCase();  and it is: also method.
*/

//arr.forEach (callBackFunction )
// NOTE: ** FUNCTION  in javascript , can pass as a parameter. Also can return value.
//EXAMPLE:

let arr=[1,2,3,4,5];

arr.forEach(function  printVal(val) {  //pass value at each idx from array  one by one .
    console.log(val);

});  //ans: 1 2 3 4 5   print all element.
//=========================================

// we can pass as arrow function

let name=["ranok","ratul","rished","rased"];

name.forEach((val)=> {
    console.log(val.toUpperCase());
});  //ans: RANOK RATUL RISHED RASED

/* name.forEach( callback fnx )
//  callback fnx:
(val)=> {
    console.log(val.toUpperCase());
}
//=========================
NOTE: arr.forEach  has another 2 parmeter : idx and arr
idx: give index number , arr: print the entire array.

*/

name.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(), idx,arr);
});

/*  OUTPUT:
RANOK 0      (4) ['ranok', 'ratul', 'rished', 'rased']
RATUL 1         (4) ['ranok', 'ratul', 'rished', 'rased']
 RISHED 2     (4) ['ranok', 'ratul', 'rished', 'rased']
 RASED 3        (4) ['ranok', 'ratul', 'rished', 'rased']
*/

//note:  forEach only can use for: array , not for STRING.

// ***INTERVIEW QUESTION
//QS:1: WHAT IS HIGHER ORDER FUNCTION ?
/*
ANS:  THIS forEach : can be say as: higher order-> method or fnx.

***higher order fnx: is :which  use  another fnx as a parameter  or ***return another fnx.

EXAMPLE:  **HERE, forEach  : it's parameter is:  callback function ( EX:(val,idx,arr)=>{
    console.log(val.toUpperCase(), idx,arr);
}    it is callback fnx.  )
*/

/* QS 1: for  a given array of numbers, print the square of each value using the forEach loop.
*/

let number =[3,5,6,8,9];

number.forEach((val)=>{ console.log( val*val); });
//ans: 9 25 36 64 81

//another way:
let marks2=[32,5,45,74];

let calcSquare = (num)=> {console.log(num**2); }

marks2.forEach(calcSquare);

//=======some more array method=======IMPORTANT======
/*
MAP:
Creates a **new array with the results of some operation . The value its callback returns are used to form ** new array.

MAP METHODS:
arr.map( callbackFnx ( val, index,array))

*/

/*SYNTAX:

let newArr = arr.map((val) => {
    return val*2;
})
*/
//QS: USE MAP FOR PRINT ALL VALUE
let colors=["red","green","blue"];

colors.map((val)=> {console.log(val); }); //use arrow fnx

//QS: create new array using map:
let score=[42,2,5,34];

let newScore=score.map((val)=> { return score*score;});
console.log(newScore);

// here, return value store in newScore variable as array.
//==========================
//NOTE: QS: WHEN USE forEach? when USE MAP , ? generally?
/*ANS:
forEach:  for calculation somethings.
MAP:  using value , create new array.

*/

/////////////FILTER  METHOD : ( condition based ) //////
/*
Filter:  **Create a new array of elements that give true for a condition/filter .
Ex: take all even element and create new array .
code:
*/  // go on every value and filter the value and store new array
//ans:
let  tree_no=[23,643,634,234,64];

let evenTree= tree_no.filter((val)=> {
    return val%2==0;
} );

//let evenTree= tree_no.filter((val)=> { return val%2==0;} );
console.log(evenTree); //(3) [634, 234, 64]

// ******REDUCE METHOD........( ***RETURN SINGLE VALUE )
//// reduce method : perform some operation & reduce the **array to a **single value. it *returns that** single value

//EX: INPUT: [3,2,53]  OUTPUT: 58

//***TRICKEY.... code:  learn this ..*/
// 5:27:00 time :
let arr4=[1,2,3,4];
const output = arr.reduce(( res,curr)=> {
    return res+curr;
});
console.log(output); //ans: 10
/*explain: at first iteration, res=1,curr=2;  res=res+curr=3
iter 2: now,curr=3, so, res=res+curr=3+3=6
iter3: now,curr=4, so, res=res+curr=6+4= 10  and return 10;

return 10 and store it in: output variable.
*/

//QS: return largest value :

const largestVal = arr4.reduce((prev,curr)=>{
    return prev>curr? prev: curr;
});
console.log(largestVal); //ans: 4

/*
explain:  iter1: prev=1,curr=2 ,  reuturn 2
iter2: prev=2 ,curr=3,  return 3
iter3: prev=3, curr=4, return 4
*/

/*
QUESTION:  LET'S PRACTICE :
QS1:  we are given array of marks of student. filter our of the marks of students that score 90+.

QS02: Take a number n as input from user. Create an array of number from 1 to n.
=> use reduce method to calculate sum of all numbers in then array.
=>use reduce method to calculate product of all numbers in the array.
*/
// ans: QS1:

let marks3=[43,99,93,83];

let answer= marks3.filter((val)=> {
    return val>90;
});
console.log(answer);// (2) [99, 93]

//QS02:
let n = prompt("enter a number:");
let stor_arr=[];
for(let i=0;i<n;i++){
    stor_arr[i]=i+1;
}

console.log(stor_arr); //(5) [1, 2, 3, 4, 5]

// use  reduce for calculate sum

let tot_sum = marks3.reduce((res,val)=> { return res+val;});
console.log(tot_sum);// 318

let tot_mul = marks3.reduce((res,val)=> { return res*val;});
console.log(tot_mul); //3

//CALCULTE FACTORIAL
let fac=[1,2,3,4,5];

let tot_factorial = fac.reduce((res,val)=> { return res*val;});
console.log(tot_factorial); //120
//========COMPLETE=======

