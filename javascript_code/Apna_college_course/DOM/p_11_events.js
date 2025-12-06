
/* TIME: 7:17:00 TO 7:46:00
TOPIC: EVENTS
QS: WHAT IS EVENTS ?
=> ANS: THE CHANGE** IN THE STATE OF AN OBJECT IS KNOWN AS EVENT .
=> EVENTS ARE FIRED TO NOTIFY code of "interesting change" that may affect code **execution

1.Mouse event ( click, double, ..)
2.Keyboard events ( keypress,keyup,keydown).
3.Form events ( submit  )
4.print event & many more

*/

// search : event reference topic on mdn .
// correct way: use : for event handling:
 // node.event =()=> { //handle here }
//access btn
let btn1 =  document.querySelector("#btn1");
btn1.onclick = ()=> {
    console.log("btn1 was clicked");
    let a=24;
    a++;
    console.log(a);
};
//ans: btn1 was clicked   25  (when button y click)
//handle div
let div4 = document.querySelector("div");
div4.onmouseover=()=> {
    console.log("you are inside div");
}; //not print anything when hover.

// NOTE: ** IF WE HANDLE SAME THING : FROM JS CODE AND HTML CODE, THE JS CODE HANDLER WILL BE WORK. BECAUSE : JS CODE IS MORE PRIORITY.

// PRIORITY: inline handler < js code handler.

//=======TOPIC: EVENT object =====
/*
DEFINATION: It is a special object that has details about the event.
=>All event handlers have access to the Event Object's properties and methods.

=> node.event = (e)=>  { // handle here }
=>  here , e is event object and variable, it can eve,event,ec  anythings.
=> e.target, e.type, e.clientX, e.clientY  */

let btn2 =  document.querySelector("#btn2");
btn2.onclick = (e)=> {
    console.log(e); //PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
    console.log(e.type); //click
    console.log(e.target);//<button id="btn2">please! click me btn2</button>
    console.log(e.clientX,e.clientY); // 99 285
};

/*Till now, we learn for event handle :
way 1: inline handling  ( PROBLEM: HARD TO  find code, code not clear, bulky the code)
way 2: js node.event = ()=> {  }   ( PROBLEM: AT  A TIME,  WE CAN WRITE JUST : 1 FUNCTION FOR HANDLE THE EVENT .. )


NOW, MORE BETTER WAY: FOR EVENT HANDLE IS: BELOW:
*/
//===TOPIC:  WAY: 03 : EVENT LISTENERS==============
/*
define: *** we can think it as a function , which always listen for => event , when event is come: it execute it work.

=>  for one event: we can create : multiple event listener.
=>
node.addEventListener( event, callback)
node.removeEventListener( event,callback)

***NOTE: the callback reference should be same to remove.

CALLBACK: **( we already discuss): it is a function , that go another fnx as a argument.
event: can be click,dblclick, ; when event will be come, CALLBACK will be executed.

CALLBACK: ALSO CALLED EVENT HANDLER.
*/

btn3.addEventListener("click",(evt)=> {
    console.log("button3 was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn3.addEventListener("click",()=> {
    console.log("button3 was clicked-handle 2");
});
// ans: when btn3 will be called all 4 line will be printed. NOTE: *** IN THIS WAY: ** WE CAN DONE MULTIPLE WORK ON SAME EVENT .

// remove event listener

btn4.addEventListener("click",()=> {
    console.log("button4 was clicked-handle1 ");
});
btn4.addEventListener("click",()=> {
    console.log("button4 was clicked-handle2 ");
});

const handler3= ()=> {
    console.log("button4 was clicked-handle 3");
};


btn4.addEventListener("click",handler3);

//QS: we want to delete the 3rd handler ?
btn4.removeEventListener("click",handler3); //remove
btn4.addEventListener("click",()=> {
    console.log("button4 was clicked-handle4 ");
});

//ans: when btn4 click ,then print: handler 1 ,3,4

//=====PRACTICE QUESTION ====
// QS: 01 : create  a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.( toggle button create)

/*
let modeBtn = document.querySelector("#mode");
let currMode="light";

let body
modeBtn.addEventListener("click",()=>{
    if (currMode==="light"){
        currMode="dark";
document.querySelector("body").style.backgroundColor="black";

    }else{
        currMode="light";
    document.querySelector("body").style.backgroundColor="white";
    }
   // console.log("you are trying to change mode.");
});

*/
// =>  we can write this another way: using css class and more well-formed.
//ans:
let modeBtn = document.querySelector("#mode");
let currMode="light";
let body= document.querySelector("body"); //access body

modeBtn.addEventListener("click",()=>{
    if (currMode==="light"){
        currMode="dark";
    body.classList.add("dark"); //dark is css class
    //also remove after add
    body.classList.remove("light");
    }else{
        currMode="light";
    body.classList.add("light"); // light is css class
    body.classList.remove("dark");
}
   // console.log("you are trying to change mode.");
   console.log(currMode);
});

// HOMEWORK: MOUSEOVER  er upor create an example for practice eventListener.

//============&&&&&&&&&&&&&&&&&&&&&=========
