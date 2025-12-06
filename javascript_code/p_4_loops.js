console.log("learn loops");

for ( let i=1;i<=5;i++){
    console.log("serial: ",i);
}


/*infinite loop:
 for ( let i=1;i<=-9;i++){
    console.log("serial: ",i);
}
*/
let i=1;
while( i<=5){
    console.log("i=",i);
    i++;
}

//do -while loop

let j=3;
do {
     console.log("j=",j);
     j++;
}while(j<=7);

//for of loop
/*
for ( let val of strVal){
    //do some work
}

*/

// for of loop: print character 1 by 1

let str ="Ranok";
let size =0;
for (let i of str){
    // iterator->character .
     console.log("i=",i);
     // i=R , i=a, i=n....
     size++;
}
 console.log("string size =",size); //5

 //====================

 // for in loop use: for object, arrays
/*
 for ( let key in objVal) {
    //do some work
 }
    */

 //for in loop

 let stu ={
    name:"ranok",
    age:23,
    cpge:4.0,
    isPass:true,

 };

 // for in loop: pass key every time

 for( let i in stu){ // iterat: key
    console.log("key is =",i);
 }
 // ans:key= name key= age cgpa isPass

  for( let key in stu){ // iterat: key
    console.log("key is =",key," value= ", stu[key]);

 }
 //op:
//  key is = name  value=  ranok
//  key is = age  value=  23
//  key is = cpge  value=  4
//  key is = isPass  value=  true
//===============================

//practice question
/*
QS1 : print from 0 to 100
QS2: print all odd number from 0 to 100
QS3:  guess number game
*/

let gameNum =25;

let userNumber=prompt( "Guess the game number ");

while ( userNumber !=gameNum){

   userNumber = prompt("you enter wrong number. Guess again: ");
}
console.log("congrates , "); // when guess correct,print this .

//===================================


