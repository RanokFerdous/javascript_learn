/*  TIME: 10:37:00 TIME
TOPIC: FETCH API
=> THE fetch API provides an interface for fetching ( sending/receiving) resources.
=>it uses Request & Response objects.
=>The fetch() method is used to fetch a resource (data).
SYNTAX:
let promise = fetch (url, [options])
*/

//here, learn how to promises uses day by day life in code.
/*
request  -> ( API) -> send response .
API: ( APPLICATION PROGRAMMING INTERFACE );
FOR FREE API SEARCH GO:  free apis
go: github.com/public-apis/public-apis , here see many free api list. can go : book ,food,dog,cat,
API: is endpoint .
**EXAMPLE:  free-apis.github.io/#/browse  => this link saw many free api list .
go: cat-facts -> view on github -> in API documentation -> go:start developing page:
API Documentation
Base URL for all endpoints:  https://cat-fact.herokuapp.com
Endpoints
/facts : Retrieve and query facts

/users*  : Get user data

in browser write: https://cat-fact.herokuapp.com/facts

give data cat related

*/
// when API is : call, page not reload , update all thing in the: RUN TIME .
const URL = "https://cat-fact.herokuapp.com/facts";
const URL2="https://cataas.com/";
const facePara= document.querySelector("#btn");

//here, response is obj , based on prototype.
const getFacts = async ()=>{
    console.log("getting data....");
    let response = await fetch(URL2);
    console.log(response);
    console.log(response.status);
    // take json input data
    let data= await response.json();
    //o.p: is  js object format
    console.log(data);
    console.log(data[0]);
    console.log(data[0].text);
    facePara.innerText=data[2].text;
};
//=============================
/*
1) AJAX:  is a asynchronous JS & XML . ( PREVIOUS WE USE THESE XML PROCESS OR  WAYS.)
TODAY USE : JSON FORMAT:
2) JSON: is javascript object notation .
json() method: returns a second promise that resolve with the result of parsing the response body text as JSON. ( INOUT IS JSON, output is JS object.)
*/

// json() is also : a async method and return promise method.

//all work can done by using promise chain
/*
function getFacts(){
    fetch(URL2)
    .then((Response)=>{
        return Response.json();
    })
    .then((data)=>{
        console.log(data);
        facePara.innerText= data[2].text;
    });
}
    */
////////==========Request & Response
/*
HTTP VERBS ,Response headers also contain details about the response, such as content type , HTTP status code etc.
http verbs: means : which type of request: ex: get,post, put, delete
post: for send some data.
PATCH: for update something in page.
GET: use fetch API for get request.
*/

/*
status: 200        -> means: ok.
1.information ( 100-199)
2.
*/
// homework: **^^sending post request using fetch API.

