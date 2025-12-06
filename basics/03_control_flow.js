// ==========================================
// CONTROL FLOW IN JAVASCRIPT
// ==========================================

// 1. IF STATEMENT
// ==========================================

console.log("--- IF Statement ---");

let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
}

// 2. IF-ELSE STATEMENT
// ==========================================

console.log("\n--- IF-ELSE Statement ---");

let age = 17;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 3. IF-ELSE IF-ELSE STATEMENT
// ==========================================

console.log("\n--- IF-ELSE IF-ELSE Statement ---");

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// 4. NESTED IF STATEMENTS
// ==========================================

console.log("\n--- Nested IF Statements ---");

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("User is logged in");
  
  if (isAdmin) {
    console.log("User has admin privileges");
  } else {
    console.log("User has regular privileges");
  }
} else {
  console.log("Please log in");
}

// 5. SWITCH STATEMENT
// ==========================================

console.log("\n--- SWITCH Statement ---");

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Day:", dayName);

// 6. SWITCH WITH MULTIPLE CASES
// ==========================================

console.log("\n--- SWITCH with Multiple Cases ---");

let fruit = "apple";

switch (fruit) {
  case "banana":
  case "apple":
  case "orange":
    console.log("This is a common fruit");
    break;
  case "mango":
  case "papaya":
    console.log("This is a tropical fruit");
    break;
  default:
    console.log("Unknown fruit");
}

// 7. SWITCH WITH EXPRESSIONS
// ==========================================

console.log("\n--- SWITCH with Expressions ---");

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent! (90-100)");
    break;
  case "B":
    console.log("Good! (80-89)");
    break;
  case "C":
    console.log("Fair (70-79)");
    break;
  default:
    console.log("Needs improvement");
}

// 8. TERNARY OPERATOR (CONDITIONAL OPERATOR)
// ==========================================

console.log("\n--- Ternary Operator ---");

let userAge = 20;
let canVote = userAge >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);

// Nested ternary (use sparingly - can be hard to read)
let userScore = 75;
let result = userScore >= 90 ? "A" : 
             userScore >= 80 ? "B" : 
             userScore >= 70 ? "C" : "F";
console.log("Result:", result);

// 9. LOGICAL OPERATORS IN CONDITIONS
// ==========================================

console.log("\n--- Logical Operators in Conditions ---");

let username = "john";
let password = "1234";

// AND operator
if (username === "john" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

// OR operator
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Time to relax!");
} else {
  console.log("Work day!");
}

// NOT operator
let isClosed = false;

if (!isClosed) {
  console.log("Store is open");
} else {
  console.log("Store is closed");
}

// 10. TRUTHY AND FALSY VALUES
// ==========================================

console.log("\n--- Truthy and Falsy Values ---");

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

let value1 = 0;
if (value1) {
  console.log("This won't print");
} else {
  console.log("0 is falsy");
}

let value2 = "Hello";
if (value2) {
  console.log("Non-empty string is truthy");
}

let value3 = [];
if (value3) {
  console.log("Empty array is truthy");
}

// 11. SHORT-CIRCUIT EVALUATION
// ==========================================

console.log("\n--- Short-Circuit Evaluation ---");

// AND short-circuit
let hasPermission = true;
let canAccess = hasPermission && console.log("Access granted"); // Executes

// OR short-circuit
let defaultName = "Guest";
let userName = "" || defaultName; // Uses defaultName
console.log("Username:", userName);

// 12. NULLISH COALESCING
// ==========================================

console.log("\n--- Nullish Coalescing ---");

let count = 0;
let displayCount = count ?? 10; // 0 is not null/undefined, so uses 0
console.log("Display count:", displayCount);

let userInput = null;
let defaultValue = userInput ?? "Default";
console.log("Value:", defaultValue);

// 13. OPTIONAL CHAINING IN CONDITIONS
// ==========================================

console.log("\n--- Optional Chaining ---");

let user = {
  name: "Alice",
  address: {
    city: "Boston"
  }
};

// Safe property access
if (user?.address?.city) {
  console.log("City:", user.address.city);
}

// Won't throw error even if property doesn't exist
if (user?.profile?.bio) {
  console.log("Bio:", user.profile.bio);
} else {
  console.log("No bio available");
}

// 14. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Age verification
function checkAge(age) {
  if (age < 0) {
    return "Invalid age";
  } else if (age < 13) {
    return "Child";
  } else if (age < 18) {
    return "Teenager";
  } else if (age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }
}

console.log("Age 25:", checkAge(25));

// Example 2: Grade calculator
function calculateGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log("Score 88:", calculateGrade(88));

// Example 3: Login validation
function validateLogin(username, password) {
  if (!username || !password) {
    return "Username and password are required";
  }
  
  if (username.length < 3) {
    return "Username must be at least 3 characters";
  }
  
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  
  return "Login valid";
}

console.log(validateLogin("ab", "123")); // Invalid
console.log(validateLogin("john", "secret123")); // Valid
