// ==========================================
// CLASSES IN JAVASCRIPT
// ==========================================

// 1. CLASS BASICS
// ==========================================

console.log("--- Class Basics ---");

// Define a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Instance method
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  }
}

// Create instance
let person1 = new Person("Alice", 25);
console.log(person1.introduce());

// Check instance
console.log("Is person1 a Person?", person1 instanceof Person);

// 2. CONSTRUCTOR
// ==========================================

console.log("\n--- Constructor ---");

class User {
  constructor(username, email) {
    // Initialize instance properties
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
  }
  
  getInfo() {
    return `${this.username} (${this.email})`;
  }
}

let user1 = new User("johndoe", "john@example.com");
console.log(user1.getInfo());

// 3. CLASS METHODS
// ==========================================

console.log("\n--- Class Methods ---");

class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
    return this; // Return this for chaining
  }
  
  subtract(num) {
    this.result -= num;
    return this;
  }
  
  multiply(num) {
    this.result *= num;
    return this;
  }
  
  getResult() {
    return this.result;
  }
  
  reset() {
    this.result = 0;
    return this;
  }
}

let calc = new Calculator();
let result = calc.add(10).multiply(2).subtract(5).getResult();
console.log("Calculation result:", result);

// 4. GETTERS AND SETTERS
// ==========================================

console.log("\n--- Getters and Setters ---");

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  
  // Getter
  get area() {
    return this._width * this._height;
  }
  
  get perimeter() {
    return 2 * (this._width + this._height);
  }
  
  // Setter with validation
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be positive");
    }
  }
  
  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log("Height must be positive");
    }
  }
}

let rect = new Rectangle(10, 5);
console.log("Area:", rect.area);
console.log("Perimeter:", rect.perimeter);

rect.width = 20;
console.log("New area:", rect.area);

// 5. STATIC METHODS
// ==========================================

console.log("\n--- Static Methods ---");

class MathUtils {
  static add(a, b) {
    return a + b;
  }
  
  static max(...numbers) {
    return Math.max(...numbers);
  }
  
  static min(...numbers) {
    return Math.min(...numbers);
  }
  
  static PI = Math.PI;
}

// Call static methods on class (not instance)
console.log("Add:", MathUtils.add(5, 3));
console.log("Max:", MathUtils.max(5, 2, 8, 1));
console.log("PI:", MathUtils.PI);

// 6. STATIC PROPERTIES
// ==========================================

console.log("\n--- Static Properties ---");

class Config {
  static apiUrl = "https://api.example.com";
  static timeout = 5000;
  static version = "1.0.0";
  
  static getConfig() {
    return {
      apiUrl: this.apiUrl,
      timeout: this.timeout,
      version: this.version
    };
  }
}

console.log("Config:", Config.getConfig());

// 7. CLASS INHERITANCE
// ==========================================

console.log("\n--- Class Inheritance ---");

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  speak() {
    return `${this.name} makes a sound`;
  }
  
  getInfo() {
    return `${this.name} is a ${this.species}`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks`;
  }
  
  fetch() {
    return `${this.name} fetches the ball`;
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, "Cat");
    this.color = color;
  }
  
  speak() {
    return `${this.name} meows`;
  }
}

let dog = new Dog("Max", "Golden Retriever");
console.log(dog.speak());
console.log(dog.getInfo());
console.log(dog.fetch());

let cat = new Cat("Whiskers", "orange");
console.log(cat.speak());
console.log(cat.getInfo());

// 8. SUPER KEYWORD
// ==========================================

console.log("\n--- Super Keyword ---");

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  getDetails() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Call parent constructor
    this.year = year;
  }
  
  getDetails() {
    // Call parent method
    return `${super.getDetails()} (${this.year})`;
  }
}

let car = new Car("Toyota", "Camry", 2020);
console.log(car.getDetails());

// 9. PRIVATE FIELDS (ES2022)
// ==========================================

console.log("\n--- Private Fields ---");

class BankAccount {
  #balance = 0; // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }
  
  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.getBalance());
// console.log(account.#balance); // Error: private field

// 10. PRIVATE METHODS
// ==========================================

console.log("\n--- Private Methods ---");

class DataProcessor {
  #data = [];
  
  addData(item) {
    this.#data.push(item);
  }
  
  #validate(item) {
    return item !== null && item !== undefined;
  }
  
  processData() {
    return this.#data.filter(item => this.#validate(item));
  }
}

let processor = new DataProcessor();
processor.addData(1);
processor.addData(null);
processor.addData(3);
console.log("Processed data:", processor.processData());

// 11. CLASS EXPRESSIONS
// ==========================================

console.log("\n--- Class Expressions ---");

// Named class expression
const MyClass = class NamedClass {
  constructor(value) {
    this.value = value;
  }
  
  getValue() {
    return this.value;
  }
};

let instance = new MyClass(42);
console.log("Instance value:", instance.getValue());

// Anonymous class expression
const AnonClass = class {
  sayHello() {
    return "Hello!";
  }
};

let anon = new AnonClass();
console.log(anon.sayHello());

// 12. INSTANCEOF AND TYPE CHECKING
// ==========================================

console.log("\n--- Type Checking ---");

class Parent {}
class Child extends Parent {}

let child = new Child();

console.log("child instanceof Child:", child instanceof Child);
console.log("child instanceof Parent:", child instanceof Parent);
console.log("child instanceof Object:", child instanceof Object);

// 13. MIXINS
// ==========================================

console.log("\n--- Mixins ---");

// Mixin function
const CanFly = {
  fly() {
    return `${this.name} is flying`;
  }
};

const CanSwim = {
  swim() {
    return `${this.name} is swimming`;
  }
};

class Bird {
  constructor(name) {
    this.name = name;
  }
}

// Apply mixins
Object.assign(Bird.prototype, CanFly);

let bird = new Bird("Eagle");
console.log(bird.fly());

// Multiple mixins
class Duck extends Bird {}
Object.assign(Duck.prototype, CanSwim);

let duck = new Duck("Donald");
console.log(duck.fly());
console.log(duck.swim());

// 14. ABSTRACT CLASS PATTERN
// ==========================================

console.log("\n--- Abstract Class Pattern ---");

class AbstractShape {
  constructor() {
    if (new.target === AbstractShape) {
      throw new Error("Cannot instantiate abstract class");
    }
  }
  
  area() {
    throw new Error("Must implement area method");
  }
}

class Circle extends AbstractShape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  area() {
    return Math.PI * this.radius ** 2;
  }
}

let circle = new Circle(5);
console.log("Circle area:", circle.area());

// 15. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: User management
class UserManager {
  #users = [];
  
  addUser(name, email) {
    const user = {
      id: this.#users.length + 1,
      name,
      email,
      createdAt: new Date()
    };
    this.#users.push(user);
    return user;
  }
  
  getUser(id) {
    return this.#users.find(user => user.id === id);
  }
  
  getAllUsers() {
    return [...this.#users]; // Return copy
  }
  
  removeUser(id) {
    const index = this.#users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.#users.splice(index, 1);
      return true;
    }
    return false;
  }
}

let userManager = new UserManager();
userManager.addUser("Alice", "alice@example.com");
userManager.addUser("Bob", "bob@example.com");
console.log("All users:", userManager.getAllUsers());

// Example 2: Event emitter
class EventEmitter {
  #events = {};
  
  on(event, listener) {
    if (!this.#events[event]) {
      this.#events[event] = [];
    }
    this.#events[event].push(listener);
  }
  
  emit(event, ...args) {
    if (this.#events[event]) {
      this.#events[event].forEach(listener => {
        listener(...args);
      });
    }
  }
  
  off(event, listener) {
    if (this.#events[event]) {
      this.#events[event] = this.#events[event].filter(l => l !== listener);
    }
  }
}

let emitter = new EventEmitter();
emitter.on("message", msg => console.log("Received:", msg));
emitter.emit("message", "Hello World!");

// Example 3: Stack implementation
class Stack {
  #items = [];
  
  push(item) {
    this.#items.push(item);
  }
  
  pop() {
    return this.#items.pop();
  }
  
  peek() {
    return this.#items[this.#items.length - 1];
  }
  
  isEmpty() {
    return this.#items.length === 0;
  }
  
  size() {
    return this.#items.length;
  }
  
  clear() {
    this.#items = [];
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack peek:", stack.peek());
console.log("Stack pop:", stack.pop());
console.log("Stack size:", stack.size());

// Example 4: Singleton pattern
class Database {
  static #instance = null;
  #connection = null;
  
  constructor() {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.#connection = "Connected to DB";
    Database.#instance = this;
  }
  
  query(sql) {
    return `Executing: ${sql}`;
  }
  
  static getInstance() {
    if (!Database.#instance) {
      Database.#instance = new Database();
    }
    return Database.#instance;
  }
}

let db1 = Database.getInstance();
let db2 = Database.getInstance();
console.log("Same instance?", db1 === db2); // true

// 16. BEST PRACTICES
// ==========================================

console.log("\n--- Best Practices ---");

// ✅ Use classes for object blueprints
// ✅ Use private fields for encapsulation
// ✅ Use static methods for utility functions
// ✅ Call super() first in derived class constructor
// ✅ Keep classes focused (Single Responsibility)
// ✅ Use getters/setters for computed properties
// ✅ Prefer composition over inheritance

console.log("Classes are a clean syntax for prototypal inheritance!");
