// ==========================================
// EVENT LOOP AND ASYNC PROGRAMMING IN JAVASCRIPT
// ==========================================

// 1. UNDERSTANDING THE EVENT LOOP
// ==========================================

console.log("--- Event Loop Basics ---");

// JavaScript is single-threaded
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise callback");
});

console.log("4. End");

// Output order: 1, 4, 3, 2
// Explanation: Synchronous code runs first, then microtasks (Promises),
// then macrotasks (setTimeout)

// 2. CALL STACK
// ==========================================

console.log("\n--- Call Stack ---");

function first() {
  console.log("First function");
  second();
  console.log("First function end");
}

function second() {
  console.log("Second function");
  third();
  console.log("Second function end");
}

function third() {
  console.log("Third function");
}

first();

// Call stack: first -> second -> third -> second -> first

// 3. MACROTASKS VS MICROTASKS
// ==========================================

console.log("\n--- Macrotasks vs Microtasks ---");

// Macrotasks: setTimeout, setInterval, setImmediate
// Microtasks: Promises, queueMicrotask, MutationObserver

console.log("Script start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve()
  .then(() => console.log("Microtask: Promise 1"))
  .then(() => console.log("Microtask: Promise 2"));

queueMicrotask(() => {
  console.log("Microtask: queueMicrotask");
});

console.log("Script end");

// Order: Script start, Script end, Microtasks (Promises, queueMicrotask), Macrotasks (setTimeout)

// 4. SETTIMEOUT AND SETINTERVAL
// ==========================================

console.log("\n--- setTimeout and setInterval ---");

// setTimeout - run once after delay
let timeoutId = setTimeout(() => {
  console.log("Timeout executed after 100ms");
}, 100);

// Clear timeout
// clearTimeout(timeoutId);

// setInterval - run repeatedly
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`Interval ${count}`);
  
  if (count >= 3) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 100);

// 5. PROMISE EXECUTION ORDER
// ==========================================

console.log("\n--- Promise Execution Order ---");

console.log("A");

Promise.resolve()
  .then(() => console.log("B"))
  .then(() => console.log("C"));

Promise.resolve()
  .then(() => {
    console.log("D");
    return Promise.resolve();
  })
  .then(() => console.log("E"));

console.log("F");

// Order: A, F, B, D, C, E

// 6. ASYNC/AWAIT AND EVENT LOOP
// ==========================================

console.log("\n--- Async/Await Execution ---");

async function asyncFunc() {
  console.log("Async start");
  
  await Promise.resolve();
  console.log("After await");
  
  await Promise.resolve();
  console.log("After second await");
}

console.log("Before async");
asyncFunc();
console.log("After async");

// Order: Before async, Async start, After async, After await, After second await

// 7. PROMISE CHAINS AND MICROTASKS
// ==========================================

console.log("\n--- Promise Chains ---");

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve("Promise 2");
  })
  .then(value => {
    console.log(value);
  });

setTimeout(() => console.log("Timeout"), 0);

console.log("Synchronous");

// 8. NESTED TIMERS
// ==========================================

console.log("\n--- Nested Timers ---");

setTimeout(() => {
  console.log("Outer timeout");
  
  setTimeout(() => {
    console.log("Inner timeout");
  }, 0);
  
  Promise.resolve().then(() => {
    console.log("Promise in timeout");
  });
}, 0);

// 9. ANIMATION FRAME
// ==========================================

console.log("\n--- requestAnimationFrame ---");

// In browser environment (Node.js doesn't have this)
if (typeof requestAnimationFrame !== "undefined") {
  requestAnimationFrame(() => {
    console.log("Animation frame");
  });
}

// 10. TASK QUEUE VISUALIZATION
// ==========================================

console.log("\n--- Task Queue Example ---");

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve()
  .then(() => console.log("3"))
  .then(() => console.log("4"));

setTimeout(() => console.log("5"), 0);

Promise.resolve().then(() => console.log("6"));

console.log("7");

// Order: 1, 7, 3, 6, 4, 2, 5

// 11. BLOCKING THE EVENT LOOP
// ==========================================

console.log("\n--- Blocking Event Loop ---");

function blockingOperation() {
  console.log("Blocking start");
  
  // This blocks the event loop
  let start = Date.now();
  while (Date.now() - start < 100) {
    // Busy wait
  }
  
  console.log("Blocking end");
}

console.log("Before blocking");
blockingOperation();
console.log("After blocking");

// During blocking, no other tasks can run

// 12. NON-BLOCKING OPERATIONS
// ==========================================

console.log("\n--- Non-blocking Operations ---");

function nonBlockingOperation() {
  console.log("Non-blocking start");
  
  // Break work into chunks
  let chunk = 0;
  
  function processChunk() {
    console.log(`Processing chunk ${chunk}`);
    chunk++;
    
    if (chunk < 3) {
      setTimeout(processChunk, 0); // Give event loop a chance
    } else {
      console.log("Non-blocking end");
    }
  }
  
  processChunk();
}

nonBlockingOperation();

// 13. PROMISE CONCURRENCY
// ==========================================

console.log("\n--- Promise Concurrency ---");

async function sequential() {
  console.log("Sequential start");
  
  await delay(100);
  console.log("Step 1 done");
  
  await delay(100);
  console.log("Step 2 done");
  
  console.log("Sequential end");
}

async function parallel() {
  console.log("Parallel start");
  
  await Promise.all([
    delay(100).then(() => console.log("Task 1 done")),
    delay(100).then(() => console.log("Task 2 done"))
  ]);
  
  console.log("Parallel end");
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// sequential();
// parallel();

// 14. MICROTASK QUEUE DEPTH
// ==========================================

console.log("\n--- Microtask Queue ---");

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    
    Promise.resolve()
      .then(() => console.log("Promise 2"))
      .then(() => console.log("Promise 3"));
  })
  .then(() => console.log("Promise 4"));

// Microtasks are processed until queue is empty

// 15. PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Debounce (wait for pause in events)
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let debouncedLog = debounce((msg) => {
  console.log("Debounced:", msg);
}, 300);

// debouncedLog("A");
// debouncedLog("B");
// debouncedLog("C"); // Only this will execute

// Example 2: Throttle (limit execution rate)
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

let throttledLog = throttle((msg) => {
  console.log("Throttled:", msg);
}, 300);

// Example 3: Batch processing
async function processBatch(items, batchSize = 5) {
  for (let i = 0; i < items.length; i += batchSize) {
    let batch = items.slice(i, i + batchSize);
    
    await Promise.all(batch.map(item => processItem(item)));
    
    // Give event loop a chance between batches
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}

async function processItem(item) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Processed:", item);
      resolve(item);
    }, 10);
  });
}

// processBatch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// Example 4: Task scheduler
class TaskScheduler {
  constructor() {
    this.tasks = [];
    this.running = false;
  }
  
  addTask(task) {
    this.tasks.push(task);
    if (!this.running) {
      this.run();
    }
  }
  
  async run() {
    this.running = true;
    
    while (this.tasks.length > 0) {
      let task = this.tasks.shift();
      await task();
      
      // Yield to event loop
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    
    this.running = false;
  }
}

let scheduler = new TaskScheduler();

scheduler.addTask(async () => {
  console.log("Task 1");
  await delay(50);
});

scheduler.addTask(async () => {
  console.log("Task 2");
  await delay(50);
});

// Example 5: Retry with exponential backoff
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      let waitTime = Math.pow(2, i) * 1000;
      console.log(`Retry ${i + 1} after ${waitTime}ms`);
      await delay(waitTime);
    }
  }
}

// 16. WEB WORKERS (BROWSER)
// ==========================================

console.log("\n--- Web Workers (concept) ---");

// In browser, you can use Web Workers for true parallelism
/*
// main.js
let worker = new Worker('worker.js');

worker.postMessage({ data: 'heavy computation' });

worker.onmessage = function(e) {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = function(e) {
  // Do heavy computation
  let result = heavyComputation(e.data);
  self.postMessage(result);
};
*/

console.log("Web Workers allow true parallel processing in browsers");

// 17. SETIMMEDIATE (NODE.JS)
// ==========================================

console.log("\n--- setImmediate (Node.js) ---");

if (typeof setImmediate !== "undefined") {
  console.log("Script start");
  
  setImmediate(() => {
    console.log("setImmediate");
  });
  
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  
  Promise.resolve().then(() => {
    console.log("Promise");
  });
  
  console.log("Script end");
  
  // Order in Node.js: Script start, Script end, Promise, setTimeout, setImmediate
}

// 18. PROCESS.NEXTTICK (NODE.JS)
// ==========================================

console.log("\n--- process.nextTick (Node.js) ---");

if (typeof process !== "undefined" && process.nextTick) {
  console.log("A");
  
  process.nextTick(() => console.log("B"));
  
  Promise.resolve().then(() => console.log("C"));
  
  console.log("D");
  
  // Order: A, D, B, C
  // nextTick runs before Promises
}

// 19. COMMON PITFALLS
// ==========================================

console.log("\n--- Common Pitfalls ---");

// Pitfall 1: Expecting immediate execution
setTimeout(() => {
  console.log("This doesn't run immediately");
}, 0);

console.log("This runs first");

// Pitfall 2: Blocking the event loop
// DON'T DO THIS:
// while (true) {} // Blocks everything

// Pitfall 3: Creating promise inside promise
// BAD:
function badAsync() {
  return new Promise((resolve) => {
    fetch("api").then(data => {
      resolve(data);
    });
  });
}

// GOOD:
function goodAsync() {
  return fetch("api");
}

// Pitfall 4: Not handling promise rejections
Promise.reject(new Error("Unhandled"))
  .catch(error => console.log("Handled:", error.message));

// 20. BEST PRACTICES
// ==========================================

console.log("\n--- Best Practices ---");

// ✅ Use async/await for cleaner async code
// ✅ Avoid blocking the event loop
// ✅ Use Promise.all() for concurrent operations
// ✅ Handle promise rejections
// ✅ Break long tasks into smaller chunks
// ✅ Use Web Workers for CPU-intensive tasks (browser)
// ✅ Understand microtask vs macrotask priority
// ✅ Use setImmediate over setTimeout(fn, 0) in Node.js

console.log("\n--- Event Loop Visualization ---");
console.log(`
Event Loop Process:
1. Execute all synchronous code
2. Process all microtasks (Promises, queueMicrotask)
3. Process one macrotask (setTimeout, setInterval)
4. Repeat from step 2

Call Stack -> Microtask Queue -> Macrotask Queue
`);

console.log("Understanding the event loop is key to mastering async JavaScript!");
