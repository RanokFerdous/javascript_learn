// ==========================================
// CLOSURES IN JAVASCRIPT
// ==========================================

// 1. INTRODUCTION TO CLOSURES
// ==========================================

console.log("--- Introduction to Closures ---");

// A closure is a function that has access to variables from its outer scope
// even after the outer function has returned

function outerFunction() {
  let outerVariable = "I'm from outer scope";
  
  function innerFunction() {
    console.log(outerVariable); // Has access to outer variable
  }
  
  return innerFunction;
}

let closure = outerFunction();
closure(); // Still has access to outerVariable

// 2. BASIC CLOSURE EXAMPLE
// ==========================================

console.log("\n--- Basic Closure ---");

function createCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++;
    return count;
  };
}

let counter1 = createCounter();
console.log("Counter1:", counter1()); // 1
console.log("Counter1:", counter1()); // 2
console.log("Counter1:", counter1()); // 3

let counter2 = createCounter();
console.log("Counter2:", counter2()); // 1 (separate closure)

// 3. CLOSURE WITH MULTIPLE FUNCTIONS
// ==========================================

console.log("\n--- Multiple Functions ---");

function createWallet(initialMoney) {
  let money = initialMoney;
  
  return {
    addMoney: function(amount) {
      money += amount;
      return money;
    },
    
    spendMoney: function(amount) {
      if (amount <= money) {
        money -= amount;
        return true;
      }
      return false;
    },
    
    getMoney: function() {
      return money;
    }
  };
}

let myWallet = createWallet(100);
console.log("Initial:", myWallet.getMoney());
myWallet.addMoney(50);
console.log("After adding:", myWallet.getMoney());
myWallet.spendMoney(30);
console.log("After spending:", myWallet.getMoney());

// 4. CLOSURE IN LOOPS
// ==========================================

console.log("\n--- Closures in Loops ---");

// Problem with var (shared variable)
console.log("Problem with var:");
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("var i:", i); // All print 3
  }, 100);
}

// Solution 1: Use let (block scope)
console.log("\nSolution with let:");
for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log("let j:", j); // Prints 0, 1, 2
  }, 150);
}

// Solution 2: IIFE to create closure
console.log("\nSolution with IIFE:");
for (var k = 0; k < 3; k++) {
  (function(index) {
    setTimeout(function() {
      console.log("IIFE k:", index); // Prints 0, 1, 2
    }, 200);
  })(k);
}

// 5. PRIVATE VARIABLES
// ==========================================

console.log("\n--- Private Variables ---");

function createPerson(name, age) {
  // Private variables
  let _name = name;
  let _age = age;
  
  return {
    getName: function() {
      return _name;
    },
    
    getAge: function() {
      return _age;
    },
    
    setAge: function(newAge) {
      if (newAge > 0 && newAge < 150) {
        _age = newAge;
      }
    },
    
    haveBirthday: function() {
      _age++;
    }
  };
}

let person = createPerson("Alice", 25);
console.log("Name:", person.getName());
console.log("Age:", person.getAge());
person.haveBirthday();
console.log("After birthday:", person.getAge());

// 6. FUNCTION FACTORY
// ==========================================

console.log("\n--- Function Factory ---");

function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);
let quadruple = createMultiplier(4);

console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));
console.log("Quadruple 5:", quadruple(5));

// 7. CLOSURE FOR CONFIGURATION
// ==========================================

console.log("\n--- Configuration with Closures ---");

function createFormatter(prefix, suffix) {
  return function(text) {
    return `${prefix}${text}${suffix}`;
  };
}

let htmlTag = createFormatter("<b>", "</b>");
let brackets = createFormatter("[", "]");
let parentheses = createFormatter("(", ")");

console.log(htmlTag("Important"));
console.log(brackets("Note"));
console.log(parentheses("Optional"));

// 8. MEMOIZATION WITH CLOSURES
// ==========================================

console.log("\n--- Memoization ---");

function memoize(fn) {
  let cache = {};
  
  return function(...args) {
    let key = JSON.stringify(args);
    
    if (key in cache) {
      console.log("Returning cached result");
      return cache[key];
    }
    
    console.log("Computing result");
    let result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function expensiveOperation(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

let memoized = memoize(expensiveOperation);
console.log("Result 1:", memoized(1000));
console.log("Result 2:", memoized(1000)); // Cached
console.log("Result 3:", memoized(2000));

// 9. MODULE PATTERN
// ==========================================

console.log("\n--- Module Pattern ---");

let calculator = (function() {
  // Private variables and functions
  let result = 0;
  
  function log(operation, value) {
    console.log(`${operation}: ${value}`);
  }
  
  // Public API
  return {
    add: function(num) {
      result += num;
      log("Add", num);
      return this;
    },
    
    subtract: function(num) {
      result -= num;
      log("Subtract", num);
      return this;
    },
    
    multiply: function(num) {
      result *= num;
      log("Multiply", num);
      return this;
    },
    
    getResult: function() {
      return result;
    },
    
    reset: function() {
      result = 0;
      return this;
    }
  };
})();

calculator.add(10).multiply(2).subtract(5);
console.log("Final result:", calculator.getResult());

// 10. CLOSURE WITH TIMERS
// ==========================================

console.log("\n--- Closures with Timers ---");

function delayedGreeting(name, delay) {
  setTimeout(function() {
    console.log(`Hello, ${name}!`);
  }, delay);
}

delayedGreeting("Alice", 100);
delayedGreeting("Bob", 200);

// 11. CURRY FUNCTION
// ==========================================

console.log("\n--- Currying ---");

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
console.log("Curried sum:", curriedSum(1)(2)(3));
console.log("Partial application:", curriedSum(1, 2)(3));

// 12. PARTIAL APPLICATION
// ==========================================

console.log("\n--- Partial Application ---");

function partial(fn, ...args1) {
  return function(...args2) {
    return fn(...args1, ...args2);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

let sayHello = partial(greet, "Hello");
let sayHi = partial(greet, "Hi");

console.log(sayHello("Alice"));
console.log(sayHi("Bob"));

// 13. EVENT HANDLERS
// ==========================================

console.log("\n--- Event Handlers ---");

function createButton(label) {
  let clickCount = 0;
  
  return {
    click: function() {
      clickCount++;
      console.log(`${label} clicked ${clickCount} time(s)`);
    },
    
    getClickCount: function() {
      return clickCount;
    },
    
    reset: function() {
      clickCount = 0;
    }
  };
}

let submitButton = createButton("Submit");
submitButton.click();
submitButton.click();
console.log("Click count:", submitButton.getClickCount());

// 14. DEBOUNCE AND THROTTLE
// ==========================================

console.log("\n--- Debounce and Throttle ---");

function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

let debouncedLog = debounce((msg) => console.log("Debounced:", msg), 500);
let throttledLog = throttle((msg) => console.log("Throttled:", msg), 500);

// Simulate multiple calls
debouncedLog("Call 1");
debouncedLog("Call 2");
debouncedLog("Call 3"); // Only this will execute after 500ms

// 15. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: ID Generator
function createIdGenerator(prefix = "ID") {
  let id = 0;
  
  return function() {
    id++;
    return `${prefix}_${id}`;
  };
}

let generateUserId = createIdGenerator("USER");
let generateOrderId = createIdGenerator("ORDER");

console.log(generateUserId());
console.log(generateUserId());
console.log(generateOrderId());

// Example 2: Rate Limiter
function createRateLimiter(maxCalls, timeWindow) {
  let calls = [];
  
  return function(fn, ...args) {
    let now = Date.now();
    calls = calls.filter(time => now - time < timeWindow);
    
    if (calls.length < maxCalls) {
      calls.push(now);
      return fn(...args);
    } else {
      console.log("Rate limit exceeded");
      return null;
    }
  };
}

let rateLimiter = createRateLimiter(3, 1000);

function apiCall(data) {
  console.log("API called with:", data);
  return "Success";
}

rateLimiter(apiCall, "data1");
rateLimiter(apiCall, "data2");
rateLimiter(apiCall, "data3");
rateLimiter(apiCall, "data4"); // Rate limited

// Example 3: Cache with expiration
function createCache(ttl = 5000) {
  let cache = {};
  
  return {
    set: function(key, value) {
      cache[key] = {
        value,
        expiry: Date.now() + ttl
      };
    },
    
    get: function(key) {
      let item = cache[key];
      if (!item) return null;
      
      if (Date.now() > item.expiry) {
        delete cache[key];
        return null;
      }
      
      return item.value;
    },
    
    clear: function() {
      cache = {};
    }
  };
}

let cache = createCache(1000);
cache.set("user", { name: "Alice" });
console.log("Cached user:", cache.get("user"));

// Example 4: State machine
function createStateMachine(initialState, transitions) {
  let currentState = initialState;
  
  return {
    getState: function() {
      return currentState;
    },
    
    transition: function(action) {
      if (transitions[currentState] && transitions[currentState][action]) {
        currentState = transitions[currentState][action];
        return true;
      }
      return false;
    }
  };
}

let trafficLight = createStateMachine("red", {
  red: { next: "green" },
  green: { next: "yellow" },
  yellow: { next: "red" }
});

console.log("State:", trafficLight.getState());
trafficLight.transition("next");
console.log("State:", trafficLight.getState());

// 16. COMMON PITFALLS
// ==========================================

console.log("\n--- Common Pitfalls ---");

// Pitfall 1: Unintended sharing (DON'T DO THIS)
// This demonstrates a common mistake with var in closures
let createCounters = function() {
  let counters = [];
  for (var i = 0; i < 3; i++) {
    counters.push(function() {
      return i; // All reference same i
    });
  }
  return counters;
};

let badCounters = createCounters();
console.log("Bad counters:", badCounters.map(c => c())); // All return 3

// Fixed version
let createCountersFixed = function() {
  let counters = [];
  for (let i = 0; i < 3; i++) {
    counters.push(function() {
      return i; // Each has own i
    });
  }
  return counters;
};

let goodCounters = createCountersFixed();
console.log("Good counters:", goodCounters.map(c => c())); // 0, 1, 2

console.log("\nClosures are powerful but use them wisely!");
