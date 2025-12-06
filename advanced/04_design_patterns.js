// ==========================================
// DESIGN PATTERNS IN JAVASCRIPT
// ==========================================

// 1. SINGLETON PATTERN
// ==========================================

console.log("--- Singleton Pattern ---");

// Ensures only one instance of a class exists
class Singleton {
  static #instance = null;
  
  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }
    
    this.data = "Singleton data";
    Singleton.#instance = this;
  }
  
  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
console.log("Same instance?", instance1 === instance2); // true

// 2. FACTORY PATTERN
// ==========================================

console.log("\n--- Factory Pattern ---");

// Creates objects without specifying exact class
class Car {
  constructor(type) {
    this.type = type;
  }
  
  drive() {
    return `Driving a ${this.type}`;
  }
}

class Truck {
  constructor(type) {
    this.type = type;
  }
  
  drive() {
    return `Driving a ${this.type}`;
  }
}

class VehicleFactory {
  static createVehicle(type) {
    switch(type) {
      case "car":
        return new Car("sedan");
      case "truck":
        return new Truck("pickup");
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

let car = VehicleFactory.createVehicle("car");
let truck = VehicleFactory.createVehicle("truck");
console.log(car.drive());
console.log(truck.drive());

// 3. MODULE PATTERN
// ==========================================

console.log("\n--- Module Pattern ---");

// Encapsulates private data and exposes public API
const counterModule = (function() {
  // Private variables
  let count = 0;
  
  // Private function
  function log(message) {
    console.log(`[Counter] ${message}`);
  }
  
  // Public API
  return {
    increment() {
      count++;
      log(`Incremented to ${count}`);
      return count;
    },
    
    decrement() {
      count--;
      log(`Decremented to ${count}`);
      return count;
    },
    
    getCount() {
      return count;
    },
    
    reset() {
      count = 0;
      log("Reset");
    }
  };
})();

counterModule.increment();
counterModule.increment();
console.log("Count:", counterModule.getCount());

// 4. OBSERVER PATTERN
// ==========================================

console.log("\n--- Observer Pattern ---");

// Subject notifies observers of state changes
class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update(data) {
    console.log(`${this.name} received: ${data}`);
  }
}

let subject = new Subject();
let observer1 = new Observer("Observer1");
let observer2 = new Observer("Observer2");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello Observers!");

// 5. STRATEGY PATTERN
// ==========================================

console.log("\n--- Strategy Pattern ---");

// Defines family of algorithms, encapsulates each one
class PaymentStrategy {
  pay(amount) {
    throw new Error("Must implement pay method");
  }
}

class CreditCardStrategy extends PaymentStrategy {
  pay(amount) {
    return `Paid $${amount} with Credit Card`;
  }
}

class PayPalStrategy extends PaymentStrategy {
  pay(amount) {
    return `Paid $${amount} with PayPal`;
  }
}

class CryptoStrategy extends PaymentStrategy {
  pay(amount) {
    return `Paid $${amount} with Cryptocurrency`;
  }
}

class ShoppingCart {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }
  
  setPaymentStrategy(strategy) {
    this.paymentStrategy = strategy;
  }
  
  checkout(amount) {
    return this.paymentStrategy.pay(amount);
  }
}

let cart = new ShoppingCart(new CreditCardStrategy());
console.log(cart.checkout(100));

cart.setPaymentStrategy(new PayPalStrategy());
console.log(cart.checkout(200));

// 6. DECORATOR PATTERN
// ==========================================

console.log("\n--- Decorator Pattern ---");

// Adds behavior to objects dynamically
class Coffee {
  cost() {
    return 5;
  }
  
  description() {
    return "Simple coffee";
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost();
  }
  
  description() {
    return this.coffee.description();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }
  
  description() {
    return this.coffee.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }
  
  description() {
    return this.coffee.description() + ", sugar";
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee.description());
console.log("Cost:", coffee.cost());

// 7. COMMAND PATTERN
// ==========================================

console.log("\n--- Command Pattern ---");

// Encapsulates actions as objects
class Light {
  turnOn() {
    console.log("Light is ON");
  }
  
  turnOff() {
    console.log("Light is OFF");
  }
}

class Command {
  execute() {}
  undo() {}
}

class TurnOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  
  execute() {
    this.light.turnOn();
  }
  
  undo() {
    this.light.turnOff();
  }
}

class TurnOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  
  execute() {
    this.light.turnOff();
  }
  
  undo() {
    this.light.turnOn();
  }
}

class RemoteControl {
  constructor() {
    this.history = [];
  }
  
  execute(command) {
    command.execute();
    this.history.push(command);
  }
  
  undo() {
    let command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

let light = new Light();
let remote = new RemoteControl();

remote.execute(new TurnOnCommand(light));
remote.execute(new TurnOffCommand(light));
remote.undo(); // Turns light back on

// 8. BUILDER PATTERN
// ==========================================

console.log("\n--- Builder Pattern ---");

// Constructs complex objects step by step
class UserBuilder {
  constructor() {
    this.user = {};
  }
  
  setName(name) {
    this.user.name = name;
    return this;
  }
  
  setAge(age) {
    this.user.age = age;
    return this;
  }
  
  setEmail(email) {
    this.user.email = email;
    return this;
  }
  
  setRole(role) {
    this.user.role = role;
    return this;
  }
  
  build() {
    return this.user;
  }
}

let user = new UserBuilder()
  .setName("Alice")
  .setAge(30)
  .setEmail("alice@example.com")
  .setRole("admin")
  .build();

console.log("Built user:", user);

// 9. PROTOTYPE PATTERN
// ==========================================

console.log("\n--- Prototype Pattern ---");

// Creates objects based on a prototype
let carPrototype = {
  drive() {
    return `Driving a ${this.model}`;
  },
  
  stop() {
    return `Stopping the ${this.model}`;
  },
  
  clone() {
    return Object.create(this);
  }
};

function createCar(model, year) {
  let car = Object.create(carPrototype);
  car.model = model;
  car.year = year;
  return car;
}

let car1 = createCar("Tesla Model 3", 2023);
let car2 = car1.clone();
car2.model = "Tesla Model Y";

console.log(car1.drive());
console.log(car2.drive());

// 10. ADAPTER PATTERN
// ==========================================

console.log("\n--- Adapter Pattern ---");

// Converts interface of class into another interface
class OldAPI {
  getData() {
    return { name: "John", years: 30 };
  }
}

class NewAPI {
  getUserInfo() {
    return { fullName: "John Doe", age: 30 };
  }
}

class APIAdapter {
  constructor(api) {
    this.api = api;
  }
  
  getUserData() {
    if (this.api instanceof OldAPI) {
      let data = this.api.getData();
      return {
        fullName: data.name,
        age: data.years
      };
    } else if (this.api instanceof NewAPI) {
      return this.api.getUserInfo();
    }
  }
}

let oldAPI = new OldAPI();
let adapter = new APIAdapter(oldAPI);
console.log("Adapted data:", adapter.getUserData());

// 11. FACADE PATTERN
// ==========================================

console.log("\n--- Facade Pattern ---");

// Provides simplified interface to complex system
class CPU {
  freeze() { console.log("CPU freeze"); }
  jump(position) { console.log("CPU jump to", position); }
  execute() { console.log("CPU execute"); }
}

class Memory {
  load(position, data) { console.log("Memory load at", position); }
}

class HardDrive {
  read(lba, size) { 
    console.log("HardDrive read");
    return "boot data";
  }
}

class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  
  start() {
    console.log("Starting computer...");
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
    console.log("Computer started!");
  }
}

let computer = new ComputerFacade();
computer.start();

// 12. PROXY PATTERN
// ==========================================

console.log("\n--- Proxy Pattern ---");

// Provides placeholder for another object
class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }
  
  loadFromDisk() {
    console.log(`Loading ${this.filename}`);
  }
  
  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

class ProxyImage {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }
  
  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

let image = new ProxyImage("photo.jpg");
console.log("Image created (not loaded yet)");
image.display(); // Loads on first display
image.display(); // Uses cached image

// 13. CHAIN OF RESPONSIBILITY
// ==========================================

console.log("\n--- Chain of Responsibility ---");

// Passes request along chain of handlers
class Handler {
  constructor() {
    this.nextHandler = null;
  }
  
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }
  
  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.isAuthenticated) {
      return "Authentication required";
    }
    return super.handle(request);
  }
}

class ValidationHandler extends Handler {
  handle(request) {
    if (!request.isValid) {
      return "Validation failed";
    }
    return super.handle(request);
  }
}

class ProcessHandler extends Handler {
  handle(request) {
    return "Request processed successfully";
  }
}

let authHandler = new AuthHandler();
let validationHandler = new ValidationHandler();
let processHandler = new ProcessHandler();

authHandler.setNext(validationHandler).setNext(processHandler);

console.log(authHandler.handle({ isAuthenticated: true, isValid: true }));

// 14. MEDIATOR PATTERN
// ==========================================

console.log("\n--- Mediator Pattern ---");

// Defines object that encapsulates how objects interact
class ChatRoom {
  constructor() {
    this.users = [];
  }
  
  addUser(user) {
    this.users.push(user);
    user.chatRoom = this;
  }
  
  sendMessage(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      this.users.forEach(user => {
        if (user !== from) {
          user.receive(message, from);
        }
      });
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
  }
  
  send(message, to) {
    this.chatRoom.sendMessage(message, this, to);
  }
  
  receive(message, from) {
    console.log(`${this.name} received from ${from.name}: ${message}`);
  }
}

let chatRoom = new ChatRoom();
let alice = new User("Alice");
let bob = new User("Bob");

chatRoom.addUser(alice);
chatRoom.addUser(bob);

alice.send("Hi Bob!", bob);

// 15. MIXIN PATTERN
// ==========================================

console.log("\n--- Mixin Pattern ---");

// Adds functionality to classes
let timestampMixin = {
  setTimestamp() {
    this.timestamp = new Date();
  },
  
  getTimestamp() {
    return this.timestamp;
  }
};

let validationMixin = {
  validate() {
    return this.isValid === true;
  }
};

class DataModel {
  constructor(data) {
    this.data = data;
    this.isValid = true;
  }
}

Object.assign(DataModel.prototype, timestampMixin, validationMixin);

let model = new DataModel({ id: 1 });
model.setTimestamp();
console.log("Valid?", model.validate());
console.log("Timestamp:", model.getTimestamp());

// 16. BEST PRACTICES
// ==========================================

console.log("\n--- Best Practices ---");

// ✅ Use patterns to solve recurring problems
// ✅ Don't force patterns where they don't fit
// ✅ Keep it simple - patterns add complexity
// ✅ Understand the problem before applying pattern
// ✅ Combine patterns when appropriate
// ✅ Modern JavaScript features may replace some patterns

console.log("\nDesign patterns provide tested solutions to common problems!");
