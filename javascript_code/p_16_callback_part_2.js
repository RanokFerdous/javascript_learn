function getData(mark) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("mark is:", mark);
            resolve("get mark, resolve");
        }, 3000);
    });
};

// Async-await (easy and simple code)
/*
async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(83);
};

*/
//getAllData();

//promise chain
/*
console.log("getting data1 ....");
getData(1)
    .then((res)=>{
        console.log("getting data2..");
        return getData2();
    })
    .then((res)=>{
        console.log("getting data3..");
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
});
*/

//callback hell
/*
getData(1,()=>{
    console.log("getting data2....");
    getData(2,()=>{
        console.log("getting data2..");
        getData(3,()=>{
            console.log("getting data3..");
            getData(4);
        })
    })
})
*/

// NOTE: WHERE .then ,.catch use, there async ,await is not use,  when async ,await use ,there not use .then, .catch .
//=====IIFE  : IMMEDIATELY invoked function expression =====
/*
IIFE is a function that is called : immediately  as soon as it is defined.
// it is function , but not*** any name,
//where write , execute there.
(function () {
//
})();

(()=>{
    //...
})();

(asnyc ()=>{
    //,,,,
})();
*/

//****that is most better way:  */

(async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(83);
}) ();
// now ,don't need to call the: getAlldata() , automatic execute these getAllData() now, because using: IIFE  function.

// NOTE: WHY USE IIFE ? ( MDN REFERENCE: IIFE)
// 1.AVOID  polluting the global namespace
//2.Execute an async function
//3. 