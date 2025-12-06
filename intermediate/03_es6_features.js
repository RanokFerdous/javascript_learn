// ==========================================
// ES6 FEATURES IN JAVASCRIPT
// ==========================================

// 1. LET AND CONST
// ==========================================

console.log("--- Let and Const ---");

// let - block-scoped, can be reassigned
let count = 0;
count = 1;
console.log("Let count:", count);

if (true) {
  let blockVar = "I'm in block";
  console.log("Inside block:", blockVar);
}
// console.log(blockVar); // Error: not defined

// const - block-scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error: cannot reassign
console.log("Const PI:", PI);

// const with objects/arrays (content can be modified)
const user = { name: "John" };
user.name = "Jane"; // OK
user.age = 30; // OK
// user = {}; // Error: cannot reassign
console.log("Const object:", user);

// 2. ARROW FUNCTIONS
// ==========================================

console.log("\n--- Arrow Functions ---");

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;
console.log("Arrow add:", addArrow(5, 3));

// Single parameter (parentheses optional)
const square = x => x * x;
console.log("Square:", square(5));

// No parameters
const greet = () => "Hello!";
console.log("Greet:", greet());

// Multiple lines (need curly braces and return)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("Multiply:", multiply(4, 5));

// Returning object (use parentheses)
const createPerson = (name, age) => ({ name, age });
console.log("Person:", createPerson("Alice", 25));

// 3. TEMPLATE LITERALS
// ==========================================

console.log("\n--- Template Literals ---");

let name = "John";
let age = 30;

// String interpolation
let message = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(message);

// Expressions in template literals
let price = 100;
let tax = 0.1;
console.log(`Total: $${price + (price * tax)}`);

// Multi-line strings
let multiLine = `
  This is a
  multi-line
  string
`;
console.log(multiLine);

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] ? `**${values[i]}**` : "");
  }, "");
}

let highlighted = highlight`Hello ${name}, you are ${age} years old`;
console.log("Highlighted:", highlighted);

// 4. DESTRUCTURING ASSIGNMENT
// ==========================================

console.log("\n--- Destructuring ---");

// Array destructuring
let [first, second, third] = [1, 2, 3];
console.log("Array:", first, second, third);

// Skip elements
let [a, , c] = [1, 2, 3];
console.log("Skipped:", a, c);

// Rest in destructuring
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log("Head:", head, "Tail:", tail);

// Default values
let [x = 0, y = 0, z = 0] = [1, 2];
console.log("With defaults:", x, y, z);

// Object destructuring
let person = { firstName: "John", lastName: "Doe", age: 30 };
let { firstName, lastName } = person;
console.log("Object:", firstName, lastName);

// Rename variables
let { firstName: fName, lastName: lName } = person;
console.log("Renamed:", fName, lName);

// Nested destructuring
let user = {
  id: 1,
  profile: {
    username: "johndoe",
    email: "john@example.com"
  }
};

let { profile: { username, email } } = user;
console.log("Nested:", username, email);

// Function parameter destructuring
function printUser({ name, age, city = "Unknown" }) {
  console.log(`${name}, ${age}, ${city}`);
}

printUser({ name: "Alice", age: 25 });

// 5. SPREAD OPERATOR
// ==========================================

console.log("\n--- Spread Operator ---");

// Array spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined);

// Copy array
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 99;
console.log("Original:", original, "Copy:", copy);

// Spread in function calls
let numbers = [5, 2, 8, 1, 9];
console.log("Max:", Math.max(...numbers));

// Object spread
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log("Merged objects:", merged);

// Override properties
let defaults = { color: "red", size: "medium" };
let custom = { ...defaults, color: "blue" };
console.log("Custom:", custom);

// 6. REST PARAMETERS
// ==========================================

console.log("\n--- Rest Parameters ---");

// Collect remaining arguments
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));

// Mix regular and rest parameters
function introduce(greeting, ...names) {
  console.log(`${greeting} ${names.join(", ")}`);
}

introduce("Hello", "Alice", "Bob", "Charlie");

// 7. DEFAULT PARAMETERS
// ==========================================

console.log("\n--- Default Parameters ---");

function greetUser(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greetUser(); // Uses defaults
greetUser("Alice"); // Uses default greeting
greetUser("Bob", "Hi"); // No defaults

// Default with expressions
function createId(prefix = "ID", suffix = Date.now()) {
  return `${prefix}_${suffix}`;
}

console.log("Generated ID:", createId());

// 8. ENHANCED OBJECT LITERALS
// ==========================================

console.log("\n--- Enhanced Object Literals ---");

let propName = "dynamicProp";
let value = 100;

let enhanced = {
  // Property shorthand
  value,
  
  // Computed property names
  [propName]: "dynamic value",
  [`computed_${propName}`]: "another value",
  
  // Method shorthand
  greet() {
    return "Hello!";
  },
  
  // Getter
  get double() {
    return this.value * 2;
  },
  
  // Setter
  set newValue(val) {
    this.value = val;
  }
};

console.log("Enhanced object:", enhanced);
console.log("Double:", enhanced.double);

// 9. FOR...OF LOOP
// ==========================================

console.log("\n--- for...of Loop ---");

// Iterate over array
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// Iterate over string
let word = "Hello";
for (let char of word) {
  console.log("Char:", char);
}

// Iterate over Map
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

for (let [key, val] of map) {
  console.log(`${key}: ${val}`);
}

// Iterate over Set
let set = new Set([1, 2, 3, 4, 5]);
for (let num of set) {
  console.log("Number:", num);
}

// 10. CLASSES
// ==========================================

console.log("\n--- Classes ---");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Instance method
  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old`;
  }
  
  // Getter
  get info() {
    return `${this.name} (${this.age})`;
  }
  
  // Setter
  set updateAge(age) {
    if (age > 0) this.age = age;
  }
  
  // Static method
  static create(name, age) {
    return new Person(name, age);
  }
}

let person1 = new Person("Alice", 25);
console.log(person1.introduce());
console.log("Info:", person1.info);

let person2 = Person.create("Bob", 30);
console.log(person2.introduce());

// 11. CLASS INHERITANCE
// ==========================================

console.log("\n--- Class Inheritance ---");

class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks`;
  }
  
  getBreed() {
    return this.breed;
  }
}

let dog = new Dog("Max", "Golden Retriever");
console.log(dog.speak());
console.log("Breed:", dog.getBreed());

// 12. MODULES (IMPORT/EXPORT)
// ==========================================

console.log("\n--- Modules (syntax examples) ---");

// Export examples (would be in separate file)
// export const PI = 3.14159;
// export function add(a, b) { return a + b; }
// export default class Calculator {}

// Import examples
// import { PI, add } from './module.js';
// import Calculator from './module.js';
// import * as Math from './module.js';

console.log("Module syntax shown in comments");

// 13. PROMISES (BASIC)
// ==========================================

console.log("\n--- Promises (basic) ---");

// Create a promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 100);
});

// Use promise
promise.then(result => {
  console.log("Promise result:", result);
});

// Promise chaining
Promise.resolve(5)
  .then(x => x * 2)
  .then(x => x + 3)
  .then(result => console.log("Chained result:", result));

// 14. SYMBOLS
// ==========================================

console.log("\n--- Symbols ---");

// Create unique symbols
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbols are unique:", sym1 !== sym2);

// Symbol as object property
let id = Symbol("id");
let obj = {
  [id]: 123,
  name: "Object"
};

console.log("Symbol property:", obj[id]);

// 15. ITERATORS AND GENERATORS
// ==========================================

console.log("\n--- Generators ---");

// Generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
console.log("Gen next:", gen.next().value); // 1
console.log("Gen next:", gen.next().value); // 2

// Generator with loop
function* countTo(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

console.log("Generated numbers:");
for (let num of countTo(5)) {
  console.log("  " + num);
}

// 16. MAP AND SET
// ==========================================

console.log("\n--- Map and Set ---");

// Map - key-value pairs (any type as key)
let userMap = new Map();
userMap.set("name", "John");
userMap.set(1, "one");
userMap.set(true, "yes");

console.log("Map get:", userMap.get("name"));
console.log("Map size:", userMap.size);

// Set - unique values
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log("Set:", [...uniqueNumbers]); // [1, 2, 3, 4]

uniqueNumbers.add(5);
console.log("After add:", [...uniqueNumbers]);

// 17. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical ES6 Examples ---");

// Example 1: Swap variables
let p = 1, q = 2;
[p, q] = [q, p];
console.log("Swapped:", p, q);

// Example 2: Function returning multiple values
function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

let { min, max } = getMinMax([5, 2, 8, 1, 9]);
console.log("Min:", min, "Max:", max);

// Example 3: Clone and modify
let settings = { theme: "dark", lang: "en" };
let newSettings = { ...settings, theme: "light" };
console.log("New settings:", newSettings);

// Example 4: Filter and map with arrow functions
let nums = [1, 2, 3, 4, 5];
let result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n);
console.log("Filtered and mapped:", result);

// Example 5: Template literals for HTML
function createCard(title, content) {
  return `
    <div class="card">
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;
}

console.log(createCard("ES6", "Modern JavaScript"));
