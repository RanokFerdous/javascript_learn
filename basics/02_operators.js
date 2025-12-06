// ==========================================
// OPERATORS IN JAVASCRIPT
// ==========================================

// 1. ARITHMETIC OPERATORS
// ==========================================

console.log("--- Arithmetic Operators ---");

let a = 10;
let b = 3;

console.log("Addition (+):", a + b);        // 13
console.log("Subtraction (-):", a - b);     // 7
console.log("Multiplication (*):", a * b);  // 30
console.log("Division (/):", a / b);        // 3.333...
console.log("Modulus (%):", a % b);         // 1 (remainder)
console.log("Exponentiation (**):", a ** b); // 1000

// Increment and Decrement
let count = 5;
console.log("count++:", count++); // 5 (post-increment, returns then increments)
console.log("After post-increment:", count); // 6
console.log("++count:", ++count); // 7 (pre-increment, increments then returns)
console.log("count--:", count--); // 7 (post-decrement)
console.log("After post-decrement:", count); // 6

// 2. ASSIGNMENT OPERATORS
// ==========================================

console.log("\n--- Assignment Operators ---");

let x = 10;
console.log("x = 10:", x);

x += 5;  // x = x + 5
console.log("x += 5:", x);

x -= 3;  // x = x - 3
console.log("x -= 3:", x);

x *= 2;  // x = x * 2
console.log("x *= 2:", x);

x /= 4;  // x = x / 4
console.log("x /= 4:", x);

x %= 5;  // x = x % 5
console.log("x %= 5:", x);

x **= 2; // x = x ** 2
console.log("x **= 2:", x);

// 3. COMPARISON OPERATORS
// ==========================================

console.log("\n--- Comparison Operators ---");

console.log("5 == '5':", 5 == '5');     // true (loose equality, type coercion)
console.log("5 === '5':", 5 === '5');   // false (strict equality, no type coercion)
console.log("5 != '5':", 5 != '5');     // false
console.log("5 !== '5':", 5 !== '5');   // true

console.log("10 > 5:", 10 > 5);         // true
console.log("10 < 5:", 10 < 5);         // false
console.log("10 >= 10:", 10 >= 10);     // true
console.log("10 <= 9:", 10 <= 9);       // false

// 4. LOGICAL OPERATORS
// ==========================================

console.log("\n--- Logical Operators ---");

let isAdult = true;
let hasLicense = false;

console.log("AND (&&):", isAdult && hasLicense);  // false
console.log("OR (||):", isAdult || hasLicense);   // true
console.log("NOT (!):", !isAdult);                 // false

// Short-circuit evaluation
let result1 = true || console.log("This won't execute");
let result2 = false && console.log("This won't execute either");

// 5. STRING OPERATORS
// ==========================================

console.log("\n--- String Operators ---");

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName);

// Concatenation assignment
let greeting = "Hello";
greeting += " World";
console.log("Concatenation assignment:", greeting);

// 6. CONDITIONAL (TERNARY) OPERATOR
// ==========================================

console.log("\n--- Ternary Operator ---");

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade);

// 7. TYPE OPERATORS
// ==========================================

console.log("\n--- Type Operators ---");

// typeof - returns type of variable
console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof "hello");
console.log("typeof true:", typeof true);

// instanceof - checks if object is instance of class
let arr = [1, 2, 3];
let date = new Date();
console.log("arr instanceof Array:", arr instanceof Array);
console.log("date instanceof Date:", date instanceof Date);

// 8. BITWISE OPERATORS
// ==========================================

console.log("\n--- Bitwise Operators ---");

let num1 = 5;  // 0101 in binary
let num2 = 3;  // 0011 in binary

console.log("AND (&):", num1 & num2);   // 1 (0001)
console.log("OR (|):", num1 | num2);    // 7 (0111)
console.log("XOR (^):", num1 ^ num2);   // 6 (0110)
console.log("NOT (~):", ~num1);         // -6
console.log("Left shift (<<):", num1 << 1);   // 10 (1010)
console.log("Right shift (>>):", num1 >> 1);  // 2 (0010)

// 9. NULLISH COALESCING OPERATOR
// ==========================================

console.log("\n--- Nullish Coalescing (??) ---");

let value1 = null;
let value2 = 0;
let value3 = "Hello";

console.log("null ?? 'default':", value1 ?? "default");   // "default"
console.log("0 ?? 'default':", value2 ?? "default");      // 0
console.log("'Hello' ?? 'default':", value3 ?? "default"); // "Hello"

// 10. OPTIONAL CHAINING OPERATOR
// ==========================================

console.log("\n--- Optional Chaining (?.) ---");

let user = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

console.log("user?.address?.city:", user?.address?.city);  // "New York"
console.log("user?.phone?.number:", user?.phone?.number);  // undefined (no error)

// 11. COMMA OPERATOR
// ==========================================

console.log("\n--- Comma Operator ---");

let i = 1, j = 2, k = 3;
console.log("Multiple declarations:", i, j, k);

let result = (1 + 2, 3 + 4, 5 + 6); // Returns last expression
console.log("Comma in expression:", result); // 11

// 12. OPERATOR PRECEDENCE
// ==========================================

console.log("\n--- Operator Precedence ---");

let precedence = 2 + 3 * 4; // Multiplication before addition
console.log("2 + 3 * 4 =", precedence); // 14

let withParens = (2 + 3) * 4; // Parentheses change order
console.log("(2 + 3) * 4 =", withParens); // 20

// Best practice: use parentheses for clarity
let complex = ((10 + 5) * 2) / 3;
console.log("Complex with parentheses:", complex);
