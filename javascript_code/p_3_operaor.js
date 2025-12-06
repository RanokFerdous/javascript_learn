// part_3 : operator learn

// topic: comment
// single line comment
/*   hello
show the multiline comment */

/*
1.Arithmetic operator: +,-,/,* ,
2. Modulus : %
3.Exponentiation : 2^3  use : 2**3
4.Increament : ++
5.Decreament: --
 */

let a =23;
let b =12;

console.log("a +b =", a+b);
console.log("a/b =", a/b);
console.log("a %b =", a%b);
console.log(" 2 power 3: ", 2**3);

//unary operator

console.log( "a++= ",a++ ); //23
console.log( "a=",a );//24

console.log( "++a=",++a ); //25
console.log( "a=",a ); //25

// assignment operator: ==, +=, -=, %=, **=

let c=3;
c**=2;
console.log(c);  // ans: 9

//comparison operator:  equal to : ==,not equal to  !=,
//equal to & type: ===, not equal to & type: !==
// > ,>=, <, <=

let x= 2;
let y="2"; // string -> int
console.log("x==y",x==y); //true

// but i don't want to convert string to int.
//use strick version : check value and data type

let m =23;
let n = "23";
let o= 12;
console.log("m===n", m===n); // false
console.log(" m>o :", m>o); //ans: true

// LOGICAL OPERATOR
//logical and : && , logical OR : || , logical NOT : !

// bitwise operator: &, |, !

let cond1 = m>o; // true
let cond2 = m===23; //true
console.log("cond1 && cond2 =",cond1 && cond2 ); //ture

console.log("cond1 && cond2 =",m<o || m===23 ); //true
console.log(" !(6<5)=",!(6<5) ); // ans: true

// =========================
//conditional statement :

let number =13;
if ( number>32){
    console.log("pass");
}else if (number==33){
    console.log("pass");
}else{
    console.log("fail");  //ans: fail
}

let mode="dark";
if( mode ==="dark") console.log(mode); //ans: dark

//========TERNARY OPERATOR =============

// condition ? true output: false output

let result = number>40 ? "pass,vai ":"fail, vai";
console.log(result); // fail vai

//another way:
let mark=43;

mark>=40? console.log("pass"):console.log("fail"); //pass

//==============

//GO : MDN Docs for more information .....

// Practice question :
//qs1: get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

// alert("give message");  give pop up message
// prompt : give message and take input also .
let x1 = prompt("hello, give value");
console.log(x1);

// show , hello, give value: this message and take an input: and store it in x1
x1%5==0 ?console.log("yes"):console.log("no"); //yes

if( x1%5===0){
    console.log("yes,");
}else{
    console.log("NOt");
}

//========
// let score =23;
let score = prompt ("enter your score ( 0 -100): ")
let grade ;

if ( score>=90 &&score<=100){
    grade="A";
}else if( score>=80 && score<=89){
    grade="B";
}else {
    grade="C";
}

console.log(grade );