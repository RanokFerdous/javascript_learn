// string: 3:10:00
//string create way :
let str ="ranok ferdous";
let str2='ranok ferdous';

console.log(str2.length);//13
console.log(str2[4]); //k

// TEMPLATE LITERALS
// -> this is special type of string : use backtic

let specialstring =`this is template literal`;
console.log(typeof specialstring); //string

let obj = {
    item:"pen",
    price:10,
};
//without template literals :
console.log("the cost of", obj.item,"is", obj.price," rupees");

//using template literals we can write :
let output = ` the cost of ${obj.name} is ${obj.price} rupees.` ;
// NOTE: inside template literal, all are part of a string.
console.log(output);

// #####String Interpolation =>also called the: template literals ///////
/* STRING INTERPOLARATION : To create string by doing substitution of placeholder :
EX:
`string text ${ expression } string text   `

*/
let  Interpolation_use =`this here use string interpolation or template literal like ${ 1+2+3} ok .`;
console.log(Interpolation_use);


//TOPIC: ESCAPE CHARACTER
//Example: \n  is escape character , give next line
// more example: \t ,
let str3= "ranok\tferdous"; // \t count as 1 character lenght.
console.log(str3.length); // 13

//=============================================
// string fnx or method: these are built in fnx to manipulate a string.
/*
str.toUpperCase() , str.trim()
*/

let str4= "apna College";
console.log(str4.toUpperCase());
str4="   how are  ";
console.log(str4.trim());
//ans:how are ( remove starting and end position  white space)

console.log(str4); //  how  are
//================================

// string : are immutable ( not change).


let str5="0123456789";
console.log(str5.slice(0,4)); // 0123
console.log(str5.slice(4));//456789
console.log(str5.slice()); //0123456789

let str6="how are you?";
let res1 = str5.concat(str6);
console.log(res1);  //0123456789how are you?

console.log(str5+str6+str4);
 //0123456789how are you?   how are

 //==========================
//str.replace ( searchVal, newVal)

let str7="hellololo";
console.log(str7.replace("h","y")); //yellololo
console.log(str7.replace("o","p"));
//hellplolo    change jsut 1st match value.

console.log(str7.replaceAll("o","p"));
//hellplplp

//========str.charAt(idx)=========
console.log(str7.charAt(3));
//ans: l  , print 3rd idx char value.

let str8="ilovejs";
str[2]="p";    // not change
console.log(str8);
 //ilovejs   not change because of immutable of string property.

 // for change , we have to create new string

 str= str8.replace("i","s");
 console.log(str);// slovejs
//=======practice QS===========
//QS1: take an username as input and show that as @username(username_lenght)

let fullName1= prompt("enter you fullName without space: ");
let userName1= "@"+fullName1+fullName1.length;
console.log(userName1); //@ranok_ferdous13

//GO : mojila for more information about .

