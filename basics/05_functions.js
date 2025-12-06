// ==========================================
// FUNCTIONS IN JAVASCRIPT
// ==========================================

// 1. FUNCTION DECLARATION
// ==========================================

console.log("--- Function Declaration ---");

// Basic function
function greet() {
  console.log("Hello, World!");
}

greet(); // Call the function

// Function with parameters
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Alice");
greetPerson("Bob");

// Function with return value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum);

// 2. FUNCTION EXPRESSION
// ==========================================

console.log("\n--- Function Expression ---");

// Anonymous function assigned to variable
const multiply = function(a, b) {
  return a * b;
};

console.log("Multiply:", multiply(4, 5));

// Named function expression
const divide = function divideNumbers(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

console.log("Divide:", divide(10, 2));

// 3. ARROW FUNCTIONS (ES6)
// ==========================================

console.log("\n--- Arrow Functions ---");

// Basic arrow function
const square = (x) => {
  return x * x;
};
console.log("Square of 5:", square(5));

// Concise arrow function (implicit return)
const cube = x => x * x * x;
console.log("Cube of 3:", cube(3));

// Arrow function with multiple parameters
const addNumbers = (a, b) => a + b;
console.log("Add:", addNumbers(10, 20));

// Arrow function with no parameters
const sayHello = () => "Hello!";
console.log(sayHello());

// Arrow function returning object (use parentheses)
const createPerson = (name, age) => ({ name, age });
console.log("Person:", createPerson("John", 30));

// 4. FUNCTION PARAMETERS
// ==========================================

console.log("\n--- Function Parameters ---");

// Default parameters
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetWithDefault("Alice");
greetWithDefault(); // Uses default

// Multiple default parameters
function createUser(name = "Anonymous", age = 0, role = "user") {
  return { name, age, role };
}

console.log(createUser());
console.log(createUser("Bob", 25));

// Rest parameters (collect remaining arguments)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of multiple:", sum(1, 2, 3, 4, 5));

// Mix regular and rest parameters
function introduce(greeting, ...names) {
  console.log(`${greeting} ${names.join(", ")}`);
}

introduce("Hello", "Alice", "Bob", "Charlie");

// 5. FUNCTION ARGUMENTS
// ==========================================

console.log("\n--- Function Arguments ---");

// arguments object (traditional functions only)
function showArguments() {
  console.log("Arguments:", arguments);
  console.log("Number of arguments:", arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argument ${i}:`, arguments[i]);
  }
}

showArguments(1, "hello", true);

// 6. RETURN STATEMENT
// ==========================================

console.log("\n--- Return Statement ---");

// Return value
function getMax(a, b) {
  return a > b ? a : b;
}

console.log("Max:", getMax(10, 20));

// Early return
function checkAge(age) {
  if (age < 0) {
    return "Invalid age";
  }
  if (age < 18) {
    return "Minor";
  }
  return "Adult";
}

console.log(checkAge(15));
console.log(checkAge(25));

// Return multiple values using array/object
function getStats(numbers) {
  let sum = numbers.reduce((a, b) => a + b, 0);
  let avg = sum / numbers.length;
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return { sum, avg, max, min };
}

console.log("Stats:", getStats([1, 2, 3, 4, 5]));

// 7. FUNCTION SCOPE
// ==========================================

console.log("\n--- Function Scope ---");

let globalVar = "I'm global";

function testScope() {
  let localVar = "I'm local";
  console.log("Inside function:", globalVar); // Can access global
  console.log("Inside function:", localVar);
}

testScope();
console.log("Outside function:", globalVar);
// console.log(localVar); // Error: localVar is not defined

// Block scope with let/const
function blockScope() {
  if (true) {
    let blockVar = "I'm in block";
    console.log(blockVar);
  }
  // console.log(blockVar); // Error: blockVar is not defined
}

blockScope();

// 8. CLOSURES
// ==========================================

console.log("\n--- Closures ---");

function outer() {
  let count = 0;
  
  function inner() {
    count++;
    console.log("Count:", count);
  }
  
  return inner;
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// Practical closure example
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));

// 9. HIGHER-ORDER FUNCTIONS
// ==========================================

console.log("\n--- Higher-Order Functions ---");

// Function that takes function as argument
function operate(a, b, operation) {
  return operation(a, b);
}

console.log("Add:", operate(5, 3, (x, y) => x + y));
console.log("Multiply:", operate(5, 3, (x, y) => x * y));

// Function that returns function
function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

let sayHi = createGreeting("Hi");
let sayHola = createGreeting("Hola");

console.log(sayHi("Alice"));
console.log(sayHola("Bob"));

// 10. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ==========================================

console.log("\n--- IIFE ---");

(function() {
  console.log("This function runs immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log(`Hello, ${name} from IIFE!`);
})("World");

// IIFE with return value
let result = (function() {
  let x = 10;
  let y = 20;
  return x + y;
})();

console.log("IIFE result:", result);

// 11. CALLBACK FUNCTIONS
// ==========================================

console.log("\n--- Callback Functions ---");

function processArray(arr, callback) {
  let result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5];
let doubled = processArray(numbers, x => x * 2);
console.log("Doubled:", doubled);

// Simulating async callback
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback({ name: "John", age: 30 });
  }, 100);
}

fetchData((data) => {
  console.log("Received data:", data);
});

// 12. RECURSION
// ==========================================

console.log("\n--- Recursion ---");

// Factorial using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));

// Fibonacci using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(7):", fibonacci(7));

// Countdown using recursion
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

console.log("Countdown from 5:");
countdown(5);

// 13. PURE FUNCTIONS
// ==========================================

console.log("\n--- Pure Functions ---");

// Pure function - same input always gives same output, no side effects
function pureAdd(a, b) {
  return a + b;
}

console.log("Pure add:", pureAdd(2, 3)); // Always 5

// Impure function - has side effects
let total = 0;
function impureAdd(a) {
  total += a; // Modifies external variable
  return total;
}

console.log("Impure add:", impureAdd(5));
console.log("Impure add:", impureAdd(5)); // Different result!

// 14. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Temperature converter
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("77°F in Celsius:", fahrenheitToCelsius(77));

// Example 2: Palindrome checker
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}

console.log("Is 'racecar' palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' palindrome?", isPalindrome("hello"));

// Example 3: Array utilities
const arrayUtils = {
  max: arr => Math.max(...arr),
  min: arr => Math.min(...arr),
  avg: arr => arr.reduce((a, b) => a + b, 0) / arr.length,
  unique: arr => [...new Set(arr)]
};

let testArray = [1, 2, 3, 4, 5, 3, 2, 1];
console.log("Max:", arrayUtils.max(testArray));
console.log("Min:", arrayUtils.min(testArray));
console.log("Average:", arrayUtils.avg(testArray));
console.log("Unique:", arrayUtils.unique(testArray));

// Example 4: String utilities
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function titleCase(str) {
  return str.split(' ')
    .map(word => capitalize(word))
    .join(' ');
}

console.log("Title case:", titleCase("hello world from javascript"));

// Example 5: Validation functions
const validators = {
  isEmail: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  isPhone: phone => /^\d{10}$/.test(phone),
  isURL: url => /^https?:\/\/.+/.test(url)
};

console.log("Valid email?", validators.isEmail("test@example.com"));
console.log("Valid phone?", validators.isPhone("1234567890"));
console.log("Valid URL?", validators.isURL("https://example.com"));
