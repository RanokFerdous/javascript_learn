// async await >> promise chains >> callback hell

// time: 9:22:00
// async await is most useful way :
// at first: callback hell learn:

//Synchronous means the code runs in a particular sequence of instructions given in the program.
 //Each instruction waits for the previous instruction to complete its execution

 // synchronous: serial maintain.
 console.log("one");
 console.log("two");
 console.log("three");

 // async
 // Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

//** asynchronous:   not execute line by line,  allow execute next instruction ,  not wait for other instruction which take more time.  */

function hello(){
    console.log("hello");
}
setTimeout(hello,2000); // call it after 2 second.

setTimeout(()=> {
    console.log("how are y?");
},2000);
console.log("three");

//====CALLBACK: IS a function passed as an argument to another fnx.

// new method for ***callback
// QS: how below code work?
function sum(a,b) {
    console.log(a+b);
}

function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}
//calculator(1,2,sum); //ans: 03

//another way:
calculator(1,2,(a,b)=>{
    console.log(a+b);  //ans:  3
});

const hello3=()=> { console.log("hello3 bro");}
setTimeout(hello3,3000);

//=====TOPIC: CALLBACK HELL
/*
WHAT IS CALLBACK HELL?
ANS: ***NESTED CALLBACKS STACKED , FORMING PYRAMID structure.   **difficult to manage ,understand.

*/

function getData(dataId){
    console.log("data",dataId);
}
function getData2(dataId){
    setTimeout(()=>{
        console.log("data=",dataId);
    },2000);
}
getData(132, ); //data 132
getData(2);
getData2(43);

//==================vviiipp 8i88***9
//QS: we want after 2s print 1st data, after 2s print the next data.
function getInfo(dataid,getNextData){
    //2s
    setTimeout(() => {
        //console.log("data",dataId);
        // if(getNexData){
        //     getNextDAta();
        // }
    }, 2000);
}

// getInfo( value,callBack fnx)
// getInfo(1,()=>{
//     getInfo(2);
// })
//print 4 data: using callback , these looks very complex syntax
//callback hell: this is:
getInfo(1,()=>{
    getInfo(2,()=>{
        getInfo(324,()=>{
            console.log("get data 4:");
            getInfo(23);
        });
    });
})

//====these looks very complex syntax ,so we use:  promises  topic ** //
/*=>  WHAT IS PROMISES?
ANS: => Promises is for  "eventual" completion of task.It is an object in js. It is solution to callback hell.

=> it is solution of callback hell.
=> syntax: let promise = new Promise( (resolve,reject)=> {............})

//resolve , reject are callback provide by js.
*/

// resolve : promise complete,work complete
//reject: work complete ,but get error.

//promise has ^^^3 state: i) pending ii)fuilfilled,(resolve) iii)reject ( order return )

let promise = new Promise ((resolve,reject)=>{
    console.log(" i am a promise");
    resolve("success");
    //reject("show error: print:below reject string with error");
});

console.log(promise);
/*
 i am a promise

Promise {<fulfilled>: 'success'}
[[Prototype]]:Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]:"success"
*/

// NOTE: promise create automatic.
//GENERALLY:  when we send request to API , these API send us some: promise, we work with promise, find data.  we just handle promise. but ,here we create promise.

// EXAMPLE: PROMISES
function getPromise (dataId,getNextInfo){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("info =",dataId);
            resolve("success");
            reject("error");// it gives error of code.
            if(getNextInfo){
                getNextInfo();
            }
        },5000)
    });
};

let promise1 = getPromise(1231);
console.log(promise1);
//=====================
//QS: how to use promise?  ans: use:  .then() and .catch() function.
// promise.then((res)=> {..})  promise.catch((err)=>{....})
//.then  only execute when: our promise will be fullfilled.
const getPromise2 =()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
       // resolve("success");
        //if reject
        reject("error");
    });
}
let promise3 =getPromise2(); // call
// if promise resolve, .then fnx will be called
promise3.then((res)=>{
    console.log("promise fullfilled",res);
});
//if promise reject  .catch fnx call
promise3.catch((err)=>{
    console.log("rejected the promise",err);
});

//===promise chain=======================
// => suppose, below fnx is api, which return data1
function asyncFunc1(){
    return new Promise (( resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("succcccess");
        },4000);
    });
}
// we create another api ,that return 2nd data
function asyncFunc2(){
    return new Promise (( resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("succcccess");
        },4000);
    });
}

/*
// these part: execution two fnx at a time
console.log("fetching data1...");
let p1= asyncFunc1();
p1.then((res)=>{
    console.log(res);
});

console.log("fetching data2...");
let p2= asyncFunc2();
p1.then((res)=>{
    console.log(res);
});

*/
//QS:we want if 1st fnx execute, then execute 2nd fnx.
//answer:
console.log("fetching data1...");
/*
let p1= asyncFunc1();
p1.then((res)=>{
    console.log("fetching data1...");
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log("fetching data2....");
        //let p3=....
    });
});   */

//more easier way to write:
asyncFunc1().then(()=>{
    console.log("fetching data2..");
    asyncFunc2().then((res)=>{ })
})

//=======EXAMPLE====
function Data( data_id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data_info:",data_id);
            resolve("solve")
        }, 5000);
    })
}
//promise chain
Data(1)
.then((res)=>{
    console.log("gettting data1..");
    return Data(2);
})
.then((res)=>{
     console.log("gettting data2..");
    return Data(3);
})
.then((res)=>{
     console.log("gettting data3..");
    console.log(res);
});

//=========more better way is: async ,await ....
/*
==.> we can convert any normal fnx to an async function to write: async at first.
=> async function always returns a promise.
=> async function myFunc() {   }
=> ****await pauses the execution of its surrounding async function until the promise is settled.
NOTE:** AWAIT FNX CAN ONLY USE : INSIDE ASYNC FNX.
*/
async function hello() {
    console.log("hello async fnx");
}
//await fnx use:
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data..");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api(); //1st call:print=>weather data..
    await api(); //2nd call:after 2s print:weather data..
}
console.log(getWeatherData());
//>getWeatherData()
//< Promise {<pending>}
//>  weather data..

//=========another example: async-await
function getMark( mark){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("mark is:",mark);
            resolve("get mark,resolve");
        },3000);
    });
}
//Async-await
async function getAllData(){
// when use: await, after call 1st fnx, wait the given time, then call next await fnx , wait ,again call next await fnx..continue.
console.log("getting mark1");
    await getMark(23);//mark is 23
    console.log("getting mark2");
    await getMark(88);//mark is: 88
    console.log("getting mark3");
    await getMark(90);//mark is:90
}
console.log(getAllData());
