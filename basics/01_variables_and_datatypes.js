// ==========================================
// VARIABLES AND DATA TYPES IN JAVASCRIPT
// ==========================================

// 1. DECLARING VARIABLES
// ==========================================

// var - old way (function-scoped, can be redeclared)
var name = "John";
var age = 25;
console.log("Name:", name, "Age:", age);

// let - modern way (block-scoped, cannot be redeclared)
let city = "New York";
let country = "USA";
console.log("City:", city, "Country:", country);

// const - for constants (block-scoped, cannot be reassigned)
const PI = 3.14159;
const GRAVITY = 9.8;
console.log("PI:", PI, "Gravity:", GRAVITY);

// 2. DATA TYPES
// ==========================================

// Primitive Data Types:

// Number - for numeric values
let num1 = 42;
let num2 = 3.14;
let negative = -10;
console.log("Numbers:", num1, num2, negative);

// String - for text
let str1 = "Hello";
let str2 = 'World';
let str3 = `Template literal ${str1}`;
console.log("Strings:", str1, str2, str3);

// Boolean - true or false
let isActive = true;
let isComplete = false;
console.log("Booleans:", isActive, isComplete);

// Undefined - variable declared but not assigned
let undefinedVar;
console.log("Undefined:", undefinedVar);

// Null - intentional absence of value
let emptyValue = null;
console.log("Null:", emptyValue);

// Symbol - unique identifier (ES6)
let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
console.log("Symbols are unique:", symbol1 !== symbol2);

// BigInt - for very large integers (ES2020)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// 3. REFERENCE DATA TYPES
// ==========================================

// Object
let person = {
  name: "Alice",
  age: 30,
  city: "Boston"
};
console.log("Object:", person);

// Array
let fruits = ["apple", "banana", "orange"];
console.log("Array:", fruits);

// Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Function:", greet("Bob"));

// 4. CHECKING DATA TYPES
// ==========================================

console.log("\n--- Type Checking ---");
console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof "hello");
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // Note: returns "object" (historical bug)
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []); // Note: returns "object"
console.log("typeof function(){}:", typeof function(){});

// 5. TYPE CONVERSION
// ==========================================

console.log("\n--- Type Conversion ---");

// String to Number
let strNum = "123";
let converted1 = Number(strNum);
let converted2 = parseInt(strNum);
let converted3 = parseFloat("123.45");
console.log("String to Number:", converted1, converted2, converted3);

// Number to String
let num = 456;
let strFromNum1 = String(num);
let strFromNum2 = num.toString();
console.log("Number to String:", strFromNum1, strFromNum2);

// Boolean conversion
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean('hello'):", Boolean("hello")); // true

// 6. VARIABLE SCOPE
// ==========================================

console.log("\n--- Variable Scope ---");

// Global scope
var globalVar = "I am global";

function testScope() {
  // Function scope (var)
  var functionVar = "I am in function";
  
  // Block scope (let, const)
  if (true) {
    let blockVar = "I am in block";
    const blockConst = "I am also in block";
    console.log("Inside block:", blockVar);
  }
  // console.log(blockVar); // Error: blockVar is not defined
  
  console.log("Inside function:", functionVar);
}

testScope();
console.log("Global:", globalVar);

// 7. BEST PRACTICES
// ==========================================

console.log("\n--- Best Practices ---");

// Use const by default
const MAX_USERS = 100;

// Use let when you need to reassign
let counter = 0;
counter++;

// Avoid var in modern JavaScript
// var oldStyle = "avoid this";

// Use meaningful variable names
const userAge = 25; // Good
const a = 25; // Bad

// Use camelCase for variable names
const firstName = "John"; // Good
const first_name = "John"; // Not conventional in JavaScript

console.log("Always use meaningful names and modern syntax!");
