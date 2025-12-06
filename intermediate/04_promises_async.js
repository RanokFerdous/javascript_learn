// ==========================================
// PROMISES AND ASYNC/AWAIT IN JAVASCRIPT
// ==========================================

// 1. INTRODUCTION TO PROMISES
// ==========================================

console.log("--- Introduction to Promises ---");

// A Promise represents a future value
// States: pending, fulfilled, rejected

// Creating a simple promise
let simplePromise = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

simplePromise
  .then(result => console.log("Result:", result))
  .catch(error => console.log("Error:", error));

// 2. CREATING PROMISES
// ==========================================

console.log("\n--- Creating Promises ---");

// Promise that resolves after delay
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms}ms`), ms);
  });
}

delay(100).then(result => console.log(result));

// Promise with both resolve and reject
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "John Doe" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 100);
  });
}

fetchUser(1)
  .then(user => console.log("User:", user))
  .catch(error => console.log("Error:", error.message));

// 3. PROMISE METHODS
// ==========================================

console.log("\n--- Promise Methods ---");

// then() - handle fulfillment
Promise.resolve(42)
  .then(value => {
    console.log("Then:", value);
    return value * 2;
  })
  .then(value => {
    console.log("Chained then:", value);
  });

// catch() - handle rejection
Promise.reject(new Error("Something went wrong"))
  .catch(error => console.log("Caught:", error.message));

// finally() - runs regardless of outcome
Promise.resolve("done")
  .finally(() => console.log("Finally block executed"))
  .then(result => console.log("Result:", result));

// 4. PROMISE CHAINING
// ==========================================

console.log("\n--- Promise Chaining ---");

function step1() {
  return Promise.resolve(1);
}

function step2(value) {
  return Promise.resolve(value + 1);
}

function step3(value) {
  return Promise.resolve(value * 2);
}

step1()
  .then(result => {
    console.log("Step 1:", result);
    return step2(result);
  })
  .then(result => {
    console.log("Step 2:", result);
    return step3(result);
  })
  .then(result => {
    console.log("Step 3:", result);
  })
  .catch(error => {
    console.log("Error in chain:", error);
  });

// 5. PROMISE.ALL()
// ==========================================

console.log("\n--- Promise.all() ---");

// Wait for all promises to resolve
let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
let promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All results:", results); // [1, 2, 3]
  });

// If any promise rejects, Promise.all() rejects
let promises = [
  Promise.resolve(1),
  Promise.reject(new Error("Failed")),
  Promise.resolve(3)
];

Promise.all(promises)
  .then(results => console.log(results))
  .catch(error => console.log("Promise.all error:", error.message));

// 6. PROMISE.ALLSETTLED()
// ==========================================

console.log("\n--- Promise.allSettled() ---");

// Wait for all promises to settle (resolve or reject)
let mixedPromises = [
  Promise.resolve(1),
  Promise.reject(new Error("Failed")),
  Promise.resolve(3)
];

Promise.allSettled(mixedPromises)
  .then(results => {
    console.log("All settled:");
    results.forEach(result => {
      console.log("  ", result);
    });
  });

// 7. PROMISE.RACE()
// ==========================================

console.log("\n--- Promise.race() ---");

// Returns the first settled promise
let race1 = new Promise(resolve => setTimeout(() => resolve("slow"), 200));
let race2 = new Promise(resolve => setTimeout(() => resolve("fast"), 100));

Promise.race([race1, race2])
  .then(result => console.log("Race winner:", result)); // "fast"

// 8. PROMISE.ANY()
// ==========================================

console.log("\n--- Promise.any() ---");

// Returns the first fulfilled promise
let any1 = Promise.reject(new Error("Error 1"));
let any2 = new Promise(resolve => setTimeout(() => resolve("Success"), 100));
let any3 = Promise.reject(new Error("Error 2"));

Promise.any([any1, any2, any3])
  .then(result => console.log("Any result:", result))
  .catch(error => console.log("All failed:", error));

// 9. ASYNC/AWAIT - INTRODUCTION
// ==========================================

console.log("\n--- Async/Await ---");

// async function always returns a promise
async function simpleAsync() {
  return "Hello from async";
}

simpleAsync().then(result => console.log(result));

// await waits for promise to resolve
async function waitExample() {
  let result = await delay(100);
  console.log("Await result:", result);
}

waitExample();

// 10. ASYNC/AWAIT - ERROR HANDLING
// ==========================================

console.log("\n--- Async/Await Error Handling ---");

async function fetchData(id) {
  try {
    let user = await fetchUser(id);
    console.log("Fetched user:", user);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

fetchData(1); // Success
fetchData(-1); // Error

// 11. ASYNC/AWAIT - SEQUENTIAL VS PARALLEL
// ==========================================

console.log("\n--- Sequential vs Parallel ---");

// Sequential (slower)
async function sequential() {
  console.log("Sequential start");
  let result1 = await delay(100);
  let result2 = await delay(100);
  console.log("Sequential done:", result1, result2);
}

// Parallel (faster)
async function parallel() {
  console.log("Parallel start");
  let [result1, result2] = await Promise.all([
    delay(100),
    delay(100)
  ]);
  console.log("Parallel done:", result1, result2);
}

sequential();
parallel();

// 12. ASYNC/AWAIT - PRACTICAL EXAMPLES
// ==========================================

console.log("\n--- Async/Await Examples ---");

// Example 1: Simulated API call
async function getUserData(userId) {
  try {
    console.log("Fetching user...");
    let user = await fetchUser(userId);
    
    console.log("Fetching posts...");
    let posts = await new Promise(resolve => {
      setTimeout(() => resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" }
      ]), 100);
    });
    
    return { user, posts };
  } catch (error) {
    console.log("Error getting user data:", error.message);
  }
}

getUserData(1).then(data => console.log("User data:", data));

// Example 2: Multiple async operations
async function processMultiple() {
  try {
    let users = await Promise.all([
      fetchUser(1),
      fetchUser(2),
      fetchUser(3)
    ]);
    
    console.log("All users:", users);
  } catch (error) {
    console.log("Error processing:", error.message);
  }
}

processMultiple();

// 13. CONVERTING CALLBACKS TO PROMISES
// ==========================================

console.log("\n--- Callbacks to Promises ---");

// Old callback style
function oldStyleAsync(callback) {
  setTimeout(() => {
    callback(null, "data");
  }, 100);
}

// Convert to promise
function promisified() {
  return new Promise((resolve, reject) => {
    oldStyleAsync((error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

promisified().then(data => console.log("Promisified:", data));

// 14. ASYNC ITERATION
// ==========================================

console.log("\n--- Async Iteration ---");

// Async generator
async function* asyncGenerator() {
  yield await delay(100);
  yield await delay(100);
  yield await delay(100);
}

async function consumeAsync() {
  for await (let value of asyncGenerator()) {
    console.log("Async value:", value);
  }
}

consumeAsync();

// 15. PRACTICAL USE CASES
// ==========================================

console.log("\n--- Practical Use Cases ---");

// Use case 1: Retry logic
async function retryOperation(operation, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.log(`Retry ${i + 1}/${maxRetries}`);
      await delay(1000);
    }
  }
}

// Use case 2: Timeout wrapper
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Timeout")), ms)
    )
  ]);
}

// Example usage
async function exampleWithTimeout() {
  try {
    let result = await withTimeout(delay(5000), 200);
    console.log("Result:", result);
  } catch (error) {
    console.log("Timeout error:", error.message);
  }
}

exampleWithTimeout();

// Use case 3: Batch processing
async function processBatch(items, batchSize = 3) {
  let results = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    let batch = items.slice(i, i + batchSize);
    let batchResults = await Promise.all(
      batch.map(item => processItem(item))
    );
    results.push(...batchResults);
  }
  
  return results;
}

function processItem(item) {
  return new Promise(resolve => {
    setTimeout(() => resolve(item * 2), 100);
  });
}

processBatch([1, 2, 3, 4, 5, 6, 7])
  .then(results => console.log("Batch results:", results));

// 16. ERROR HANDLING PATTERNS
// ==========================================

console.log("\n--- Error Handling Patterns ---");

// Pattern 1: Try-catch
async function pattern1() {
  try {
    let result = await fetchUser(1);
    console.log("Pattern 1:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Pattern 2: Promise catch
async function pattern2() {
  let result = await fetchUser(1).catch(error => {
    console.log("Caught in promise:", error.message);
    return null; // Return default value
  });
  console.log("Pattern 2:", result);
}

// Pattern 3: Error first
async function pattern3() {
  let [error, result] = await fetchUser(1)
    .then(data => [null, data])
    .catch(err => [err, null]);
  
  if (error) {
    console.log("Pattern 3 error:", error.message);
  } else {
    console.log("Pattern 3 success:", result);
  }
}

pattern1();
pattern2();
pattern3();

// 17. PROMISE UTILITIES
// ==========================================

console.log("\n--- Promise Utilities ---");

// Utility: Sleep
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Utility: Debounce with promises
function debounceAsync(fn, delay) {
  let timeoutId;
  return function(...args) {
    return new Promise((resolve, reject) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(async () => {
        try {
          resolve(await fn(...args));
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

// Utility: Promisify callback function
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
  };
}

// 18. BEST PRACTICES
// ==========================================

console.log("\n--- Best Practices ---");

// ✅ Good: Use async/await for readability
async function goodExample() {
  try {
    let user = await fetchUser(1);
    let posts = await fetchPosts(user.id);
    return { user, posts };
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// ❌ Bad: Promise hell
function badExample() {
  return fetchUser(1)
    .then(user => {
      return fetchPosts(user.id)
        .then(posts => {
          return { user, posts };
        });
    });
}

// ✅ Good: Parallel when possible
async function goodParallel() {
  let [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);
  return { users, posts };
}

// ❌ Bad: Sequential when not needed
async function badSequential() {
  let users = await fetchUsers();
  let posts = await fetchPosts(); // Could run in parallel
  return { users, posts };
}

function fetchUsers() {
  return Promise.resolve([{ id: 1, name: "John" }]);
}

function fetchPosts(userId) {
  return Promise.resolve([{ id: 1, title: "Post" }]);
}

console.log("Check the code for best practices examples!");
