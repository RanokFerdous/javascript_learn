console.log("Learn Array in cheapter 06");

//Array: is collection of items.

let heroes=["ironman","hulk","thor","batman"];
let marks=[93,43,5,43,53];
let info=["habibur",85,"delhi"];

console.log(info);
console.log(info.length);
console.log(info[2]);

// >typeof marks
// <'object'
// that is object type like: (key:value)  pair.

// array are : mutable ; can change index value

info[1]=9232;   //change in array because: mutable.
console.log(info); //(3) ['habibur', 9232, 'delhi']

let str="ranok";
str[0]="k"; // rknok
console.log(str); //ranok  ; not change because: string are immutable , can't change .
//==============================

for ( let idx=0; idx<heroes.length;idx++){
    console.log(heroes[idx]);
}

// using : for of loop
for ( let el of heroes){
    console.log(el);
    console.log(el.toUpperCase());
}

let marks1=[93,43,5,43,53];
let sum=0;
for ( let val of marks1){
    sum+=val;
}
let avg = sum/ marks1.length;
console.log(`avg marks of the class = ${avg}`);
//avg marks of the class = 47.4

//================================

//QS 1:gives: items=[250,645,300,900,50] decrease 10% value of each item and store them in array and print .
//ans:

//solve this: using for of loop:

let items=[250,645,300,900,50];

let i=0;
for( let val of items){
    console.log(`value at index ${i} = ${val} `)
    let offer =val/10;
    //after price
    items[i]= items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}

//solve using : for loop

let items1=[250,645,300,900,50];

for (let i=0;i<items1.length;i++){
    let offer =items1[i]/10;
    items1[i]-= offer;
}

console.log(items1);  //5) [225, 580.5, 270, 810, 45]

//========Array method : Push():add to end,
//  Pop():delete from end and return ,
//  toString(): convert array to string.


let foodItems = ["potato","apple","litchi","tomato"];
foodItems.push("chips","burger","paneer");

console.log(foodItems); //ans:(7) ['potato', 'apple', 'litchi', 'tomato', 'chips', 'burger', 'paneer']

foodItems.pop();
foodItems.pop();
// console.log(foodItems.pop());
console.log(foodItems);
 //(5) ['potato', 'apple', 'litchi', 'tomato', 'chips']

let deletedItem = foodItems.pop();
console.log("deleted item:",deletedItem); //deleted item: chips

//toString() : convert array to string.
let foodItems1 = ["potato","apple","litchi","tomato"];
console.log(foodItems1); //(4) ['potato', 'apple', 'litchi', 'tomato']
console.log(foodItems1.toString());//potato,apple,litchi,tomato

//==================================
// 1. Concat(): joins multiple arrays & returns result.Not change original array .

let marvel_heroes=["thor","spiderman","ironman"];
let dcHeroes =["superman","batman"];
let indianHeroes =["krish","robot"];

let heroes32 = marvel_heroes.concat(dcHeroes,indianHeroes);
console.log(heroes32);
//ans:(7) ['thor', 'spiderman', 'ironman', 'superman', 'batman', 'krish', 'robot']

//=============================
//2.unshift(): ( same as push) add to start & return result.
// add at start
marvel_heroes.unshift("antman");
console.log(marvel_heroes); //(4) ['antman', 'thor', 'spiderman', 'ironman']




//3. shift() : (same as pop ) delete from start & return
let deletedVal =marvel_heroes.shift();
console.log("deleted value: ",deletedVal); //deleted value:  antman

//=============================

/*
slice():return a piece of the array.
slice(startIdx,endIdx) : returns a part of array.
endIdx not included.

splice():change original array(add,remove,replace)
splice(startIdx,delCount,newEl1...)

slice() : array not modified.
splice(): array modified.

*/

//slice():array not modified.
let arr =[1,2,3,4,5,6,7];
console.log(arr.slice(2,5)); //(3) [3, 4, 5]
console.log(arr.slice()); //(7) [1, 2, 3, 4, 5, 6, 7]

//splice():array modified.
let arr1 =[1,2,3,4,5,6,7];
//QS: replace 3,4 with 101,102
console.log(arr1.splice(2,2,101,102)); //(2) [3, 4]
console.log(arr1); //(7) [1, 2, 101, 102, 5, 6, 7]
//here, startIdx=2,delCount=2,add 101,102
console.log(arr.splice(4)); //delete from 4th idx to last of array.
 //delete:(3) [5, 6, 7]

console.log(arr); //ans:(4) [1, 2, 3, 4]
//arr=splice() ; // not change anything

//===============================
// some question :
/*
QS1: Create an array to store companies: "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

a) Remove the first company from the array.
b) Remove Uber & Add Ola in its place.
c) Add Amazon at the end.

*/

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift(); // delete 1st element

console.log(companies);
// b) remove Uber and add Ola.
companies.splice(2,1,"Ola");

companies.push("Amazon"); //push end
companies.unshift("BDTech"); // add 1st.
console.log(companies);//(7) ['BDTech', 'Microsoft', 'Uber', 'Ola', 'IBM', 'Netflix', 'Amazon']

