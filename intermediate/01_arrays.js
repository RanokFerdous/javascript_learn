// ==========================================
// ARRAYS AND ARRAY METHODS IN JAVASCRIPT
// ==========================================

// 1. CREATING ARRAYS
// ==========================================

console.log("--- Creating Arrays ---");

// Array literal
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Empty array with length
let emptyArray = new Array(5);
console.log("Empty array:", emptyArray);

// Mixed types
let mixed = [1, "hello", true, null, { name: "John" }];
console.log("Mixed:", mixed);

// 2. ACCESSING ARRAY ELEMENTS
// ==========================================

console.log("\n--- Accessing Elements ---");

let colors = ["red", "green", "blue", "yellow"];

console.log("First element:", colors[0]);
console.log("Last element:", colors[colors.length - 1]);
console.log("Array length:", colors.length);

// Negative indexing (ES2022 - using at())
console.log("Last element with at():", colors.at(-1));
console.log("Second last:", colors.at(-2));

// 3. MODIFYING ARRAYS
// ==========================================

console.log("\n--- Modifying Arrays ---");

let arr = [1, 2, 3];

// Add element
arr.push(4); // Add to end
console.log("After push:", arr);

arr.unshift(0); // Add to beginning
console.log("After unshift:", arr);

// Remove element
let lastElement = arr.pop(); // Remove from end
console.log("After pop:", arr, "Removed:", lastElement);

let firstElement = arr.shift(); // Remove from beginning
console.log("After shift:", arr, "Removed:", firstElement);

// Change element
arr[1] = 10;
console.log("After change:", arr);

// 4. ARRAY METHODS - ADDING/REMOVING
// ==========================================

console.log("\n--- Adding/Removing Methods ---");

let items = [1, 2, 3, 4, 5];

// splice - add/remove elements at specific position
items.splice(2, 1); // Remove 1 element at index 2
console.log("After splice remove:", items);

items.splice(2, 0, 3, 3.5); // Add elements at index 2
console.log("After splice add:", items);

// slice - create new array from portion
let sliced = items.slice(1, 4); // From index 1 to 4 (not inclusive)
console.log("Sliced:", sliced);
console.log("Original:", items); // Original unchanged

// 5. ARRAY ITERATION METHODS
// ==========================================

console.log("\n--- Iteration Methods ---");

let nums = [1, 2, 3, 4, 5];

// forEach - execute function for each element
console.log("forEach:");
nums.forEach((num, index) => {
  console.log(`  Index ${index}: ${num}`);
});

// map - create new array with transformed elements
console.log("\nmap:");
let doubled = nums.map(num => num * 2);
console.log("  Doubled:", doubled);

// filter - create new array with elements that pass test
console.log("\nfilter:");
let evenNums = nums.filter(num => num % 2 === 0);
console.log("  Even numbers:", evenNums);

// reduce - reduce array to single value
console.log("\nreduce:");
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log("  Sum:", sum);

let product = nums.reduce((acc, num) => acc * num, 1);
console.log("  Product:", product);

// reduceRight - reduce from right to left
let reversed = nums.reduceRight((acc, num) => {
  acc.push(num);
  return acc;
}, []);
console.log("  Reversed:", reversed);

// 6. ARRAY SEARCH METHODS
// ==========================================

console.log("\n--- Search Methods ---");

let animals = ["cat", "dog", "bird", "cat", "fish"];

// indexOf - find first index of element
console.log("indexOf 'cat':", animals.indexOf("cat"));
console.log("indexOf 'elephant':", animals.indexOf("elephant")); // -1

// lastIndexOf - find last index of element
console.log("lastIndexOf 'cat':", animals.lastIndexOf("cat"));

// includes - check if element exists
console.log("includes 'dog':", animals.includes("dog"));
console.log("includes 'elephant':", animals.includes("elephant"));

// find - find first element that passes test
let numbers2 = [5, 12, 8, 130, 44];
let found = numbers2.find(num => num > 10);
console.log("First number > 10:", found);

// findIndex - find index of first element that passes test
let foundIndex = numbers2.findIndex(num => num > 10);
console.log("Index of first number > 10:", foundIndex);

// findLast - find last element that passes test (ES2023)
let lastFound = numbers2.findLast(num => num > 10);
console.log("Last number > 10:", lastFound);

// 7. ARRAY TESTING METHODS
// ==========================================

console.log("\n--- Testing Methods ---");

let values = [2, 4, 6, 8, 10];

// every - check if all elements pass test
let allEven = values.every(num => num % 2 === 0);
console.log("All even?", allEven);

// some - check if any element passes test
let hasLarge = values.some(num => num > 5);
console.log("Has number > 5?", hasLarge);

// 8. ARRAY SORTING
// ==========================================

console.log("\n--- Sorting Methods ---");

// sort - sort array (modifies original)
let letters = ["c", "a", "b", "d"];
letters.sort();
console.log("Sorted letters:", letters);

// Sort numbers (need compare function)
let nums2 = [40, 100, 1, 5, 25];
nums2.sort((a, b) => a - b); // Ascending
console.log("Sorted numbers (asc):", nums2);

nums2.sort((a, b) => b - a); // Descending
console.log("Sorted numbers (desc):", nums2);

// reverse - reverse array order
let reversed2 = [1, 2, 3, 4, 5];
reversed2.reverse();
console.log("Reversed:", reversed2);

// 9. ARRAY TRANSFORMATION
// ==========================================

console.log("\n--- Transformation Methods ---");

// concat - merge arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log("Concatenated:", merged);

// join - create string from array
let words = ["Hello", "World"];
let sentence = words.join(" ");
console.log("Joined:", sentence);

// split - create array from string (String method)
let str = "a,b,c,d";
let splitArr = str.split(",");
console.log("Split:", splitArr);

// flat - flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
let flattened = nested.flat(2); // depth 2
console.log("Flattened:", flattened);

// flatMap - map then flatten
let sentences = ["hello world", "foo bar"];
let allWords = sentences.flatMap(s => s.split(" "));
console.log("FlatMapped:", allWords);

// 10. ARRAY COPYING
// ==========================================

console.log("\n--- Copying Arrays ---");

let original = [1, 2, 3];

// Shallow copy methods
let copy1 = [...original]; // Spread operator
let copy2 = Array.from(original);
let copy3 = original.slice();

copy1[0] = 99;
console.log("Original:", original);
console.log("Copy:", copy1);

// 11. ARRAY DESTRUCTURING
// ==========================================

console.log("\n--- Array Destructuring ---");

let [first, second, third] = ["a", "b", "c"];
console.log("First:", first, "Second:", second, "Third:", third);

// Skip elements
let [one, , three] = [1, 2, 3];
console.log("One:", one, "Three:", three);

// Rest in destructuring
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log("Head:", head, "Tail:", tail);

// Default values
let [x = 0, y = 0] = [10];
console.log("X:", x, "Y:", y);

// 12. MULTI-DIMENSIONAL ARRAYS
// ==========================================

console.log("\n--- Multi-dimensional Arrays ---");

// 2D array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Matrix[1][2]:", matrix[1][2]); // 6

// Iterate 2D array
console.log("Matrix:");
matrix.forEach(row => {
  console.log("  " + row.join(" "));
});

// 13. ARRAY-LIKE OBJECTS
// ==========================================

console.log("\n--- Array-like Objects ---");

// Convert array-like to array
function testArrayLike() {
  // arguments is array-like
  let argsArray = Array.from(arguments);
  console.log("Arguments as array:", argsArray);
}

testArrayLike(1, 2, 3);

// 14. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Unique:", removeDuplicates([1, 2, 2, 3, 3, 4]));

// Example 2: Chunk array
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log("Chunked:", chunkArray([1, 2, 3, 4, 5, 6], 2));

// Example 3: Intersection of arrays
function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log("Intersection:", intersection([1, 2, 3], [2, 3, 4]));

// Example 4: Difference of arrays
function difference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}
console.log("Difference:", difference([1, 2, 3], [2, 3, 4]));

// Example 5: Group by property
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
}

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

console.log("Grouped by age:", groupBy(people, "age"));

// Example 6: Shuffle array
function shuffle(arr) {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
console.log("Shuffled:", shuffle([1, 2, 3, 4, 5]));

// Example 7: Range
function range(start, end, step = 1) {
  let result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
console.log("Range 1-10:", range(1, 10));
console.log("Range 0-20 step 2:", range(0, 20, 2));
