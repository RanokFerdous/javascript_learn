
/*  time:  6:52:00 TIME DOM PART_02
DOM Manipulation:
TOPIC: Attributes:
getAttribute (attr) // to get the attribute value

setAttribute( attr,value) // to set attribute val th.

topic: style
node.style


*/
let div= document.querySelector("div");
console.log(div);  //div#box  :give its property.
//console.dir(div);

let id = div.getAttribute("id");
console.log(id);  // box

let name=div.getAttribute("name");
console.log(name); // jsdiv

let para= document.querySelector("p");
console.log(para.getAttribute("class")); // para

// ====set method : for change attribute:
//QS: we want to change class name:  class to newClass

//SYNTAX: console.log(para.setAttribute("oldName","newName"));
console.log(para.setAttribute("class","newClass"));

/////////STYLE:  use to change style

//QS: we want to change the div  element style
let div1 =document.querySelector("div");
console.log(div1);  //      div#box

/*NOTE: IN JAVASCRIPT :  _ CONVERT TO CAMEL CASE:

css  vs javascript:
color             vs  color
background-color  vs  backgroundColor
font-size         vs  fontSize  */

div1.style.backgroundColor="green"; //change color
div1.style.fontSize="25px";
div.innerText="hello senjen city";
//div.style.visibility="hidden" ; // element will be hide

//==========INSERT  ===DELETE TOPIC
/* INSERT TOPIC:
let el = document.createElement("div");

node.append(el)   //add at : end of node (inside)
node.prepend(el )  // add at: start of node  (inside)

node.before(el)    // add before the node ( outside)
node.after(el)     // add after the node ( outside).

DELETE:
node.remove()  // removes the node.

*/
/* QS: NEW ELEMENT  add korar process is:  2 **step process:
STEP01: at first , create element.
STEP02:
*/
//step 02: CREATE new element button
let  newBtn = document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

// step 02: how to show in screen?
// ans:   for this we have to add . for this we can use any method from 4 method : node.append(el), node.prepend(el),node.before(el), node.after(el).

//QS: 01 : we want to add a button at last:
//add:
let div2 = document.querySelector('div');
div2.append(newBtn);
// // at the created button now add in div at  the last position .

//for add at first:  div.prepend(newBtn);
//QS: we want this button add before the div
// div.before(newBtn);
// QS: add button after the div
//ans:   div.after(newBtn);
//=============///

//QS: without write HTML code , create and add a heading in body at start of body section
//ans:
let newHeading = document.createElement("h6");
newHeading.innerHTML = "<i> Hi, I am new! </i>";

document.querySelector("body").prepend(newHeading);
// ans:  add  at first of this div.


//=========//======DELETE NODE======
// now ,  select a paragraph
let italik=document.querySelector("i");
italik.remove();

let newHeading1 = document.createElement("h3");
newHeading1.innerHTML = "<i> Hi, I am not  new! </i>";

document.querySelector("body").prepend(newHeading1);

//Qs: delete the
newHeading1.remove();

// H.W: append child ?  remove  child ?  topic;

//====PRACTICE QUESTION
/* QS 01:  Create a new button element. give text "click me", bg color :red, text color-white.
Insert the button as the first element inside the body tag.

*/

//solve 01:
//create button
let button2= document.createElement("button");
button2.innerText="click mw!";

button2.style.color="white";
button2.style.backgroundColor="red";

// now insert button or add button in webpage
document.querySelector("body").append(button2);

//==================
/*QS:02: Create a <p> tag in html, give it class & some styling.
Now, create a new class in CSS and try to append the <p> element .

Did you notice, how you overwrite the class name when you add a new one class name ?
*/

//solve: 02

//access the create paragraph which class name is: content
let para3=document.querySelector("p");

//  how to help class list ?
/*  NOTE: IF WE ADD OR GIVE A new class name  : using setAttribute like:
para3.setAttribute("class","newClass");
=> here ,we replace one class by another class with there style
=> the previous applied style which give in class  , the style will be gone , but using classList the previous style will be remain and previous class name also remain.

*** basically, in classLlst : here , will be add more class .in class list.
*/
// search what is classList : in javascript?
// it help to add more class in a list , not remove any previous class or previous class style .
/* in console:
> para3
< p class=​"newClass">​i am a paragraph​</>​
> para3.classList.add("newClass");
< undefined
> para3.classList
< DOMTokenList ['newClass', value: 'newClass']
> para3.classList.remove("newClass");
< undefined
> para3.classList
< DOMTokenList [value: '']

*/
