
//==========TOPIC: 02: 6:13:00 DOM MANIPULATION ==

/*
01) Selecting with id:
document.getElementById ("myid")

02) selecting with class
document.getElementsByClassName("myClass")

03) Selecting with tag
document.getElementsByTagName("p")

*/  ///  id ====

let heading =document.getElementById("heading");
console.dir(heading);  // if this id not present , then it will be print : null

let button = document.getElementById("myId"); //button er id is : myId
console.dir(button);
 // button#myId => here will be all button related info.
// =========for class :=================
//note:  so, document.getElementsByClassName( ) : that return a htmlcollection ; that is similar to an array.
let heading3= document.getElementsByClassName("heading3");
console.dir(heading3);
console.log(heading3);
//HTMLCollection(2) [h1.heading3, h1.heading3]

//======access : selecting with tag: ======

let  paras= document.getElementsByTagName("p");
console.dir(paras);
//HTMLCollection(2) : 2 because in html has <P> tag, in this collection has all info about this two paragraph.

//========LEVEL UP: more advance : Query Selector use.
/*

NOTE: ** HERE,  we can pass: id/ class/tag .

document.querySelector("myId/ myClass/ tag");
// it return *** first element.

document.querySelectorAll("myId/myClass/tag");
//it return a NodeList
*/

// EX: 01: WE WANT 1st PARAGRAPH info  and all para..info.

let element_p = document.querySelector("p");
console.dir(element_p); //  return 1st paragraph all info.

let all_p_element = document.querySelectorAll("p");
console.dir(all_p_element);  //NodeList(2) 0:p 1:p  => it return a nodeList where all paragraph info has.

// ***since in document: p, img, div  all are node, so , if in html , no_of_count of any property is more than>1 , then it return a : NodeList (n)


//====search by class name ====

let all_class_list = document.querySelectorAll(".heading3");
console.dir(all_class_list);
// NodeList(2)  0:h1.heading3 1:h1.heading3

//===search by id  : ( use button id here for search)

// QS: search all list : where id name is: myId
let all_id_list = document.querySelectorAll("#myId");
console.dir(all_id_list);
 //NodeList(1)    0 : button#myId

 //=========================

 //====TOPIC: DOM MANIPULATION :  PROPERTIES
 /*
 using these properties: we can change, update, the value:
1. tagName: returns tag for element nodes.
2.innerText: returns the text content of the element and all its children.
3.innerHTML : returns the plain text or HTML contents in the element
4.textContent:  returns textual content even for hidden elements.
 */
// tagName
let firstEl =document.querySelector("p");
console.log(firstEl);  //<p> Let's learn about DOM </p>

//>firstEl.tagName
//<  'p'

//========2.innerText
//see: 6:27:00 - 6:36:00 time again  learn:( here discuss some topic with picture )
// what is parent? decendent? sibling?
//sibling: brother,sister

/* 1.what is firstChild property?
2. what is lastChild property?

*/
console.dir(document.body.firstChild); // #text
//ans:**bydefault in body tag, firsChild is: #text node.

/* DOM tree has 3 type node :
1.text nodes 2.element nodes 3.comment nodes.

in DOM -> WE ALWAYS WORK ON: element nodes.
** elements  are most important:

***HOMEWORK: ** learn this 3:i) text, 2.element 3.comment.

*/

// innerText:

let div = document.querySelector("div");
console.dir(div); // > div   ( all div property )

//<div.innerText
//> 'abcd\n\nhello\n\nmango\norange\nlitchi'

// <div.innerHTML
//> abcd \n <div></div>\n <p>hello</p>\n \n<div> <ul>\n
//<li>mango</li>\n  <li>orange</li>\n <li>litchi</li>\n
//  </ul>\n   </div>\

// NOTE: innerText : give just text
// innerHTM: give innerText + tag element + nex line

/*  in console : we can change innerText and innerHTML , in dynamically : but it is ***temporary .

*/

let heading_id = document.querySelector("h1");

/*  in console:
> heading_id
< <h1 id="heading">DOM demo by Apna college</h1>
​
<  heading_id.innerText="change the heading "
> 'change the heading '
<  heading_id.innerHTML="<i> new Heading </i>"
>  '<i> new Heading </i>'
*/

/* textContent: give also hidden element

*/

let  hidden_heading = document.querySelector("h5");
// > hiddent_heading
// <  <h5 h5 style="visibility: hidden;">hiddent heading h5 </h5>

/*
>  hidden_heading.innerText
<  ''
>  hidden_heading.innerHTML
<  'hidden heading h5 '
*/

/* PRACTICE QS:
QS 01:  Create a H2 heading element with text - "Hello javascript". Append "from Apna College Students" to this text using js */

let h2 = document.querySelector("h2");
h2.innerText=h2.innerText + ("from Apna College Student");
console.dir(h2.innerText);
//Hello JavaScriptfrom Apna College Student

/*QS: 02: create 3 divs with common class name-"box" . Access them & add some unique text to each of them. */

// create 3 div in html
let divs= document.querySelectorAll(".box");
console.log(divs); // NodeList(3) [div.box, div.box, div.box]
console.log(divs[1]); // <div class="box">second div</div>
//change property value
divs[1].innerText="new unique value of 2";

//use for loop in js code:
let idx=1;
for ( div of divs){
    div.innerText= `new unique value ${idx} ok`;
   console.log(div.innerText);
    idx++;
}
