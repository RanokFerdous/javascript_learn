console.log("Learing DOM PART_1 HERE");

// TIME:  5:39:00  START
/*
our code must be  this quality:
1. readable : when in company,  other people read our code, it must be easy to understand.
2.Modularity: we divided our code into multiple segment or section and every section  done different task of related project.

3.Browser Caching:  reduce the reload time .
*/

//====TOPIC: WINDOW IN JS==
// 5:58:00 TIME

//console:
//>window
//< Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/*
WHAT IS WINDOW OBJECT?
ANS: ** the window object represents an **open window in a browser. it is browser's object ( not javascript) & is **automatically **created by browser.

=> It is a **global object with lots of : **properties & methods.
*/

console.log(window); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log("hello"); //hello
window.console.log("hello2"); //hello2
//NOTE: console.log  is window object .
//window.alert("i am alert.");
//////////////////////////

/* TOPIC: DOM . WHAT IS DOM?
ANS: WHEN  the webpage is loaded , the browser creates a Document Object Model (DOM) of the page.

window -> document ->html-> 1) head:(meta, meta,title,link )
2)body  ((div:img,h1,p,div ) and script )

NOTE: ** ALL ARE OBJECT : window, document, html, head, meta,title, link,body,img,div,h1,p,script...all obj.
*/


/*

in console:

>window
< Window {window: Window, self: Window, document: document, name: '', location: Location, …}

if ** we go here:  document -> all-> ( in all section show all the  tag which we use in current  program: )  all
:
HTMLAllCollection(12)
0:html 1 : head 2 : meta 3 :meta 4:title5:style 6:div
7:body 8:script    9:script  10:div   11:div
 viewport : meta

div
length
:
12
[[Prototype]]: HTMLAllCollection


NOTE: ***  IN THIS document object : all html code include.
*/

/*
>window.document
< #document =>  here has all html code .

topic: console.dir( )  =>
>console.dir( window.document)
< #document   ( *** that print : all method and properties of related document )

>
*/

console.log(window);
console.log(window.document);
console.log(document);

console.dir(window);
console.dir(window.document);
console.dir(document);
console.dir(document.body);

console.log(document.body);
 //print body obj and  print full body section. in childnode  all html tag can find.

console.dir(document.body.childNodes[3]);
console.log(document.head);

/* **    SO, WHAT IS DOM?
ANS:  html ka  javascript er vitor access korar upai hocca DOM.

DOM is : tree like structure.
//====================
QS:*** WHEN WE USE THIS DOM?
ans: in page runtime, html, css can't change page,
that time: we use DOM for change our page .

using this javascript or DOM ,  we change dynamically in page.

   ===QS==01:
NOTE: WE WANT TO CHANGE OUR BACKGROUND COLOR , HOW ?
ANS:
> document.body.style.background ="green";
<'green'
*** now our page bg color is: green.

*/

document.body.style.background ="green"; //Change dynamically of page bg color.

//==========TOPIC: 02: 6:13:00