// ==========================================
// PROTOTYPES AND INHERITANCE IN JAVASCRIPT
// ==========================================

// 1. PROTOTYPE BASICS
// ==========================================

console.log("--- Prototype Basics ---");

// Every object has a prototype
let obj = {};
console.log("Has prototype?", Object.getPrototypeOf(obj) !== null);

// Functions have prototype property
function Person(name) {
  this.name = name;
}

console.log("Person.prototype:", Person.prototype);

// 2. PROTOTYPE CHAIN
// ==========================================

console.log("\n--- Prototype Chain ---");

let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal // Set prototype
};

console.log("rabbit.eats:", rabbit.eats); // Inherited from animal
console.log("rabbit.jumps:", rabbit.jumps); // Own property
rabbit.walk(); // Inherited method

// 3. CONSTRUCTOR FUNCTIONS
// ==========================================

console.log("\n--- Constructor Functions ---");

function User(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to prototype
User.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

User.prototype.haveBirthday = function() {
  this.age++;
};

let user1 = new User("Alice", 25);
let user2 = new User("Bob", 30);

console.log(user1.greet());
console.log(user2.greet());

// All instances share the same prototype
console.log("Same prototype?", 
  Object.getPrototypeOf(user1) === Object.getPrototypeOf(user2));

// 4. PROTOTYPE METHODS
// ==========================================

console.log("\n--- Prototype Methods ---");

// Object.getPrototypeOf()
let proto = Object.getPrototypeOf(user1);
console.log("Prototype has greet?", proto.hasOwnProperty("greet"));

// Object.setPrototypeOf()
let dog = { sound: "bark" };
let puppy = { age: 1 };
Object.setPrototypeOf(puppy, dog);
console.log("puppy.sound:", puppy.sound);

// Object.create()
let parent = {
  greet() {
    return "Hello from parent";
  }
};

let child = Object.create(parent);
console.log(child.greet());

// 5. CHECKING PROPERTIES
// ==========================================

console.log("\n--- Checking Properties ---");

function Car(brand) {
  this.brand = brand;
}

Car.prototype.type = "vehicle";

let car = new Car("Toyota");

// hasOwnProperty - only own properties
console.log("car.hasOwnProperty('brand'):", car.hasOwnProperty("brand"));
console.log("car.hasOwnProperty('type'):", car.hasOwnProperty("type"));

// in operator - own and inherited
console.log("'brand' in car:", "brand" in car);
console.log("'type' in car:", "type" in car);

// 6. PROTOTYPE INHERITANCE
// ==========================================

console.log("\n--- Prototype Inheritance ---");

// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  return `${this.name} is eating`;
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add child method
Dog.prototype.bark = function() {
  return `${this.name} barks`;
};

let myDog = new Dog("Max", "Labrador");
console.log(myDog.eat()); // Inherited
console.log(myDog.bark()); // Own method
console.log("Is Dog?", myDog instanceof Dog);
console.log("Is Animal?", myDog instanceof Animal);

// 7. OVERRIDING METHODS
// ==========================================

console.log("\n--- Overriding Methods ---");

function Bird(name) {
  Animal.call(this, name);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// Override parent method
Bird.prototype.eat = function() {
  return `${this.name} pecks food`;
};

let bird = new Bird("Tweety");
console.log(bird.eat()); // Overridden method

// 8. CALLING PARENT METHODS
// ==========================================

console.log("\n--- Calling Parent Methods ---");

function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.eat = function() {
  // Call parent method
  let parentResult = Animal.prototype.eat.call(this);
  return `${parentResult} gracefully`;
};

let cat = new Cat("Whiskers", "orange");
console.log(cat.eat());

// 9. MULTIPLE INHERITANCE (MIXIN PATTERN)
// ==========================================

console.log("\n--- Multiple Inheritance (Mixins) ---");

// Mixin objects
let canWalk = {
  walk() {
    return `${this.name} walks`;
  }
};

let canSwim = {
  swim() {
    return `${this.name} swims`;
  }
};

let canFly = {
  fly() {
    return `${this.name} flies`;
  }
};

// Duck can walk, swim, and fly
function Duck(name) {
  this.name = name;
}

Object.assign(Duck.prototype, canWalk, canSwim, canFly);

let duck = new Duck("Donald");
console.log(duck.walk());
console.log(duck.swim());
console.log(duck.fly());

// 10. PROTOTYPE POLLUTION (CAUTION)
// ==========================================

console.log("\n--- Prototype Pollution ---");

// DON'T DO THIS - it affects all objects
// Object.prototype.customMethod = function() { return "Custom"; };

// Better approach: create specific prototype
function SafeObject() {}
SafeObject.prototype.customMethod = function() {
  return "Safe custom method";
};

let safeObj = new SafeObject();
console.log(safeObj.customMethod());

// 11. MODERN CLASS SYNTAX
// ==========================================

console.log("\n--- Modern Class Syntax ---");

// Classes are syntactic sugar over prototypes
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

class Student extends Person2 {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  study() {
    return `${this.name} is studying`;
  }
}

let student = new Student("Charlie", 18, "A");
console.log(student.greet());
console.log(student.study());

// Under the hood, still uses prototypes
console.log("Student is constructor?", typeof Student === "function");
console.log("Has prototype?", Student.prototype !== undefined);

// 12. PROTOTYPE METHODS VS INSTANCE METHODS
// ==========================================

console.log("\n--- Prototype vs Instance Methods ---");

function Counter() {
  this.count = 0;
  
  // Instance method - created for each instance
  this.instanceIncrement = function() {
    this.count++;
  };
}

// Prototype method - shared by all instances
Counter.prototype.prototypeIncrement = function() {
  this.count++;
};

let counter1 = new Counter();
let counter2 = new Counter();

console.log("Same instance method?", 
  counter1.instanceIncrement === counter2.instanceIncrement); // false

console.log("Same prototype method?", 
  counter1.prototypeIncrement === counter2.prototypeIncrement); // true

// 13. PROPERTY DESCRIPTORS
// ==========================================

console.log("\n--- Property Descriptors ---");

let person = {
  name: "Alice"
};

// Get property descriptor
let descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log("Descriptor:", descriptor);

// Define property with descriptor
Object.defineProperty(person, "age", {
  value: 25,
  writable: false, // Cannot be changed
  enumerable: true,
  configurable: true
});

console.log("Age:", person.age);
person.age = 30; // Won't change
console.log("Age after change:", person.age);

// 14. PROTOTYPE-BASED FACTORY
// ==========================================

console.log("\n--- Prototype-based Factory ---");

let vehiclePrototype = {
  start() {
    return `${this.brand} started`;
  },
  stop() {
    return `${this.brand} stopped`;
  }
};

function createVehicle(brand, type) {
  let vehicle = Object.create(vehiclePrototype);
  vehicle.brand = brand;
  vehicle.type = type;
  return vehicle;
}

let car1 = createVehicle("Toyota", "Sedan");
let car2 = createVehicle("Honda", "SUV");

console.log(car1.start());
console.log(car2.start());

// 15. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Observable pattern
function Observable() {
  this.observers = [];
}

Observable.prototype.subscribe = function(observer) {
  this.observers.push(observer);
};

Observable.prototype.unsubscribe = function(observer) {
  this.observers = this.observers.filter(obs => obs !== observer);
};

Observable.prototype.notify = function(data) {
  this.observers.forEach(observer => observer(data));
};

let observable = new Observable();
observable.subscribe(data => console.log("Observer 1:", data));
observable.subscribe(data => console.log("Observer 2:", data));
observable.notify("Event occurred");

// Example 2: Linked List
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.append = function(value) {
  let node = new Node(value);
  
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  
  this.length++;
};

LinkedList.prototype.toArray = function() {
  let arr = [];
  let current = this.head;
  
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  
  return arr;
};

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log("Linked list:", list.toArray());

// Example 3: Inheritance hierarchy
function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function() {
  return this.color;
};

function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Square(color, side) {
  Rectangle.call(this, color, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

let square = new Square("red", 5);
console.log("Square color:", square.getColor());
console.log("Square area:", square.area());
console.log("Is Rectangle?", square instanceof Rectangle);
console.log("Is Shape?", square instanceof Shape);

// 16. PROTOTYPE CHAIN VISUALIZATION
// ==========================================

console.log("\n--- Prototype Chain ---");

function visualizePrototypeChain(obj, depth = 0) {
  if (!obj || depth > 5) return;
  
  console.log("  ".repeat(depth) + (obj.constructor?.name || "Object"));
  visualizePrototypeChain(Object.getPrototypeOf(obj), depth + 1);
}

console.log("Square prototype chain:");
visualizePrototypeChain(square);

// 17. BEST PRACTICES
// ==========================================

console.log("\n--- Best Practices ---");

// ✅ Use classes for new code (cleaner syntax)
// ✅ Add methods to prototype, not instances
// ✅ Use Object.create() for prototype inheritance
// ✅ Don't modify Object.prototype or Array.prototype
// ✅ Use hasOwnProperty to check own properties
// ✅ Understand that classes are syntactic sugar over prototypes

console.log("\nPrototypes are the foundation of JavaScript inheritance!");
