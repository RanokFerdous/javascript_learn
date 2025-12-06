// ==========================================
// OBJECTS IN JAVASCRIPT
// ==========================================

// 1. CREATING OBJECTS
// ==========================================

console.log("--- Creating Objects ---");

// Object literal
let person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log("Person:", person);

// Object constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log("Car:", car);

// Empty object
let empty = {};
console.log("Empty:", empty);

// 2. ACCESSING OBJECT PROPERTIES
// ==========================================

console.log("\n--- Accessing Properties ---");

let user = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25
};

// Dot notation
console.log("First name:", user.firstName);

// Bracket notation
console.log("Last name:", user["lastName"]);

// Dynamic property access
let prop = "age";
console.log("Dynamic access:", user[prop]);

// 3. MODIFYING OBJECTS
// ==========================================

console.log("\n--- Modifying Objects ---");

let student = {
  name: "Bob",
  grade: "A"
};

// Add property
student.age = 20;
student["school"] = "MIT";
console.log("After adding:", student);

// Modify property
student.grade = "A+";
console.log("After modifying:", student);

// Delete property
delete student.school;
console.log("After deleting:", student);

// 4. OBJECT METHODS
// ==========================================

console.log("\n--- Object Methods ---");

let calculator = {
  num1: 10,
  num2: 5,
  
  add: function() {
    return this.num1 + this.num2;
  },
  
  // Shorthand method syntax
  subtract() {
    return this.num1 - this.num2;
  },
  
  // Arrow function (doesn't have own 'this')
  multiply: () => {
    console.log("Arrow functions don't have own 'this'");
    return 0;
  }
};

console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());

// 5. THIS KEYWORD
// ==========================================

console.log("\n--- 'this' Keyword ---");

let employee = {
  name: "John",
  salary: 50000,
  
  getSalary() {
    return this.salary;
  },
  
  giveRaise(amount) {
    this.salary += amount;
    return this.salary;
  }
};

console.log("Salary:", employee.getSalary());
console.log("After raise:", employee.giveRaise(5000));

// 6. OBJECT DESTRUCTURING
// ==========================================

console.log("\n--- Object Destructuring ---");

let profile = {
  username: "alice",
  email: "alice@example.com",
  age: 28
};

// Basic destructuring
let { username, email } = profile;
console.log("Username:", username, "Email:", email);

// Rename variables
let { username: uname, age: userAge } = profile;
console.log("Uname:", uname, "User age:", userAge);

// Default values
let { city = "Unknown" } = profile;
console.log("City:", city);

// Nested destructuring
let company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "Boston"
  }
};

let { address: { city: companyCity } } = company;
console.log("Company city:", companyCity);

// 7. OBJECT SPREAD OPERATOR
// ==========================================

console.log("\n--- Spread Operator ---");

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Merge objects
let merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// Copy object
let original = { x: 1, y: 2 };
let copy = { ...original };
copy.x = 99;
console.log("Original:", original);
console.log("Copy:", copy);

// Override properties
let defaults = { color: "red", size: "medium" };
let custom = { ...defaults, color: "blue" };
console.log("Custom:", custom);

// 8. OBJECT METHODS (BUILT-IN)
// ==========================================

console.log("\n--- Built-in Object Methods ---");

let testObj = {
  name: "Test",
  value: 100,
  active: true
};

// Object.keys() - get array of keys
console.log("Keys:", Object.keys(testObj));

// Object.values() - get array of values
console.log("Values:", Object.values(testObj));

// Object.entries() - get array of [key, value] pairs
console.log("Entries:", Object.entries(testObj));

// Object.assign() - copy properties
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log("Assigned:", target);

// Object.freeze() - make object immutable
let frozen = { x: 1 };
Object.freeze(frozen);
frozen.x = 2; // Won't change
console.log("Frozen:", frozen);

// Object.seal() - prevent adding/removing properties
let sealed = { y: 1 };
Object.seal(sealed);
sealed.y = 2; // Can modify
sealed.z = 3; // Can't add
console.log("Sealed:", sealed);

// 9. CHECKING PROPERTIES
// ==========================================

console.log("\n--- Checking Properties ---");

let book = {
  title: "JavaScript Guide",
  author: "John Doe",
  pages: 300
};

// 'in' operator
console.log("'title' in book:", "title" in book);
console.log("'price' in book:", "price" in book);

// hasOwnProperty()
console.log("hasOwnProperty('author'):", book.hasOwnProperty("author"));

// Check if property is undefined
console.log("book.price === undefined:", book.price === undefined);

// 10. OBJECT ITERATION
// ==========================================

console.log("\n--- Object Iteration ---");

let product = {
  name: "Laptop",
  brand: "Dell",
  price: 1200
};

// for...in loop
console.log("for...in:");
for (let key in product) {
  console.log(`  ${key}: ${product[key]}`);
}

// Object.keys()
console.log("\nObject.keys():");
Object.keys(product).forEach(key => {
  console.log(`  ${key}: ${product[key]}`);
});

// Object.entries()
console.log("\nObject.entries():");
Object.entries(product).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});

// 11. COMPUTED PROPERTY NAMES
// ==========================================

console.log("\n--- Computed Property Names ---");

let prop1 = "firstName";
let prop2 = "lastName";

let dynamicObj = {
  [prop1]: "John",
  [prop2]: "Doe",
  ["age"]: 30,
  [`full${prop1}`]: "John Doe"
};

console.log("Dynamic object:", dynamicObj);

// 12. PROPERTY GETTERS AND SETTERS
// ==========================================

console.log("\n--- Getters and Setters ---");

let rectangle = {
  width: 10,
  height: 5,
  
  get area() {
    return this.width * this.height;
  },
  
  set dimensions(value) {
    [this.width, this.height] = value;
  }
};

console.log("Area:", rectangle.area);
rectangle.dimensions = [20, 10];
console.log("New area:", rectangle.area);

// 13. OBJECT COMPARISON
// ==========================================

console.log("\n--- Object Comparison ---");

let obj1a = { x: 1 };
let obj1b = { x: 1 };
let obj1c = obj1a;

console.log("obj1a == obj1b:", obj1a == obj1b); // false (different objects)
console.log("obj1a === obj1c:", obj1a === obj1c); // true (same reference)

// Deep equality check (manual)
function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log("deepEqual(obj1a, obj1b):", deepEqual(obj1a, obj1b));

// 14. NESTED OBJECTS
// ==========================================

console.log("\n--- Nested Objects ---");

let organization = {
  name: "TechCorp",
  employees: {
    developers: {
      count: 50,
      lead: "Alice"
    },
    designers: {
      count: 20,
      lead: "Bob"
    }
  },
  location: {
    city: "Boston",
    country: "USA"
  }
};

console.log("Developer lead:", organization.employees.developers.lead);
console.log("City:", organization.location.city);

// Optional chaining
console.log("Safe access:", organization?.employees?.marketing?.count);

// 15. OBJECT CLONING
// ==========================================

console.log("\n--- Object Cloning ---");

let originalObj = {
  name: "Test",
  nested: { value: 100 }
};

// Shallow clone
let shallowClone = { ...originalObj };
shallowClone.nested.value = 200; // Affects original!
console.log("Original after shallow clone:", originalObj.nested.value);

// Deep clone (simple objects)
let deepClone = JSON.parse(JSON.stringify(originalObj));
deepClone.nested.value = 300; // Doesn't affect original
console.log("Original after deep clone:", originalObj.nested.value);

// 16. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Object factory
function createUser(name, email, role = "user") {
  return {
    name,
    email,
    role,
    createdAt: new Date(),
    
    getInfo() {
      return `${this.name} (${this.role})`;
    }
  };
}

let newUser = createUser("Alice", "alice@example.com", "admin");
console.log("User info:", newUser.getInfo());

// Example 2: Count property occurrences
function countOccurrences(arr, prop) {
  return arr.reduce((acc, item) => {
    acc[item[prop]] = (acc[item[prop]] || 0) + 1;
    return acc;
  }, {});
}

let users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

console.log("Roles count:", countOccurrences(users, "role"));

// Example 3: Pick properties
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
}

let fullObj = { a: 1, b: 2, c: 3, d: 4 };
console.log("Picked:", pick(fullObj, ["a", "c"]));

// Example 4: Omit properties
function omit(obj, keys) {
  return Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

console.log("Omitted:", omit(fullObj, ["b", "d"]));

// Example 5: Flatten object
function flatten(obj, prefix = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(acc, flatten(obj[key], newKey));
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});
}

let nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

console.log("Flattened:", flatten(nestedObj));

// Example 6: Merge deep
function mergeDeep(target, source) {
  const output = { ...target };
  for (let key in source) {
    if (source[key] instanceof Object && key in target) {
      output[key] = mergeDeep(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}

let base = { a: 1, b: { c: 2 } };
let override = { b: { d: 3 }, e: 4 };
console.log("Merged deep:", mergeDeep(base, override));
