// ==========================================
// LOOPS IN JAVASCRIPT
// ==========================================

// 1. FOR LOOP
// ==========================================

console.log("--- FOR Loop ---");

// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// Loop through array
let fruits = ["apple", "banana", "orange", "grape"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// Loop in reverse
console.log("\nReverse order:");
for (let i = 4; i >= 0; i--) {
  console.log("Count down:", i);
}

// Loop with step
console.log("\nEven numbers:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 2. WHILE LOOP
// ==========================================

console.log("\n--- WHILE Loop ---");

let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// While with condition
let number = 1;
while (number <= 100) {
  if (number % 15 === 0) {
    console.log("First number divisible by 15:", number);
    break;
  }
  number++;
}

// 3. DO-WHILE LOOP
// ==========================================

console.log("\n--- DO-WHILE Loop ---");

let i = 0;
do {
  console.log("Value:", i);
  i++;
} while (i < 5);

// Do-while executes at least once
let x = 10;
do {
  console.log("This runs once even though condition is false");
} while (x < 5);

// 4. FOR...OF LOOP (ES6)
// ==========================================

console.log("\n--- FOR...OF Loop ---");

// Loop through array
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("Color:", color);
}

// Loop through string
let word = "Hello";
for (let char of word) {
  console.log("Character:", char);
}

// Loop through Set
let uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (let num of uniqueNumbers) {
  console.log("Number:", num);
}

// 5. FOR...IN LOOP
// ==========================================

console.log("\n--- FOR...IN Loop ---");

// Loop through object properties
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Loop through array indices (not recommended)
let numbers = [10, 20, 30, 40];
for (let index in numbers) {
  console.log(`Index ${index}: ${numbers[index]}`);
}

// 6. ARRAY METHODS (forEach, map, filter, etc.)
// ==========================================

console.log("\n--- Array Methods ---");

let nums = [1, 2, 3, 4, 5];

// forEach - execute function for each element
console.log("forEach:");
nums.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// map - create new array with transformed elements
console.log("\nmap:");
let doubled = nums.map(num => num * 2);
console.log("Doubled:", doubled);

// filter - create new array with elements that pass test
console.log("\nfilter:");
let evenNumbers = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce - reduce array to single value
console.log("\nreduce:");
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// 7. BREAK STATEMENT
// ==========================================

console.log("\n--- BREAK Statement ---");

// Break out of loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at", i);
    break;
  }
  console.log(i);
}

// Break in nested loop
console.log("\nBreak in nested loop:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log("Breaking outer loop");
      break outerLoop;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// 8. CONTINUE STATEMENT
// ==========================================

console.log("\n--- CONTINUE Statement ---");

// Skip iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping", i);
    continue;
  }
  console.log(i);
}

// Skip even numbers
console.log("\nPrint only odd numbers:");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// 9. NESTED LOOPS
// ==========================================

console.log("\n--- Nested Loops ---");

// Multiplication table
console.log("Multiplication table (3x3):");
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += (i * j) + "\t";
  }
  console.log(row);
}

// Pattern printing
console.log("\nPattern:");
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// 10. INFINITE LOOPS (CAREFUL!)
// ==========================================

console.log("\n--- Infinite Loops (with safety) ---");

// Infinite loop with break condition
let counter = 0;
while (true) {
  console.log("Counter:", counter);
  counter++;
  if (counter >= 3) {
    console.log("Breaking infinite loop");
    break;
  }
}

// 11. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Find prime numbers
function findPrimes(limit) {
  let primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
}

console.log("Primes up to 20:", findPrimes(20));

// Example 2: Factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("Factorial of 5:", factorial(5));

// Example 3: Fibonacci sequence
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i-1] + sequence[i-2]);
  }
  return sequence;
}

console.log("Fibonacci (10 terms):", fibonacci(10));

// Example 4: Sum of array elements
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log("Sum of [1,2,3,4,5]:", sumArray([1,2,3,4,5]));

// Example 5: Reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log("Reverse 'Hello':", reverseString("Hello"));

// Example 6: Count vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));

// 12. PERFORMANCE TIPS
// ==========================================

console.log("\n--- Performance Tips ---");

// Cache array length
let largeArray = [1, 2, 3, 4, 5];
console.log("Cache length in loop:");
for (let i = 0, len = largeArray.length; i < len; i++) {
  // length is only calculated once
}

// Use for...of for simple iteration
console.log("Use for...of when you don't need index");
for (let item of largeArray) {
  // cleaner and often faster
}

// Use array methods for functional operations
console.log("Use array methods:");
let transformed = largeArray
  .filter(x => x > 2)
  .map(x => x * 2);
console.log("Result:", transformed);
