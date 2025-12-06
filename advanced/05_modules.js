// ==========================================
// MODULES IN JAVASCRIPT
// ==========================================

// 1. MODULE BASICS
// ==========================================

console.log("--- Module Basics ---");

/*
Modules help organize code into reusable pieces
- Each module has its own scope
- Modules can export and import functionality
- Modern JavaScript uses ES6 modules
*/

// 2. IIFE MODULE PATTERN (OLD WAY)
// ==========================================

console.log("\n--- IIFE Module Pattern ---");

// Immediately Invoked Function Expression
const mathModule = (function() {
  // Private variables
  const PI = 3.14159;
  
  // Private function
  function square(x) {
    return x * x;
  }
  
  // Public API
  return {
    add: function(a, b) {
      return a + b;
    },
    
    multiply: function(a, b) {
      return a * b;
    },
    
    circleArea: function(radius) {
      return PI * square(radius);
    }
  };
})();

console.log("Circle area:", mathModule.circleArea(5));
console.log("Add:", mathModule.add(10, 20));

// 3. REVEALING MODULE PATTERN
// ==========================================

console.log("\n--- Revealing Module Pattern ---");

const userModule = (function() {
  // Private variables
  let users = [];
  let currentId = 0;
  
  // Private functions
  function generateId() {
    return ++currentId;
  }
  
  function findUserById(id) {
    return users.find(user => user.id === id);
  }
  
  // Public functions
  function addUser(name, email) {
    const user = {
      id: generateId(),
      name,
      email
    };
    users.push(user);
    return user;
  }
  
  function getUser(id) {
    return findUserById(id);
  }
  
  function getAllUsers() {
    return [...users]; // Return copy
  }
  
  function removeUser(id) {
    users = users.filter(user => user.id !== id);
  }
  
  // Reveal public API
  return {
    addUser,
    getUser,
    getAllUsers,
    removeUser
  };
})();

userModule.addUser("Alice", "alice@example.com");
userModule.addUser("Bob", "bob@example.com");
console.log("All users:", userModule.getAllUsers());

// 4. ES6 MODULES - EXPORT
// ==========================================

console.log("\n--- ES6 Module Export (syntax) ---");

/*
// utils.js - Named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
    return this;
  }
}

// Or export at once
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };

// Default export (one per module)
export default function subtract(a, b) {
  return a - b;
}
*/

console.log("Named exports: export { name, function, class }");
console.log("Default export: export default value");

// 5. ES6 MODULES - IMPORT
// ==========================================

console.log("\n--- ES6 Module Import (syntax) ---");

/*
// Import named exports
import { PI, add, Calculator } from './utils.js';

// Import with alias
import { multiply as mult } from './utils.js';

// Import all as namespace
import * as Utils from './utils.js';

// Import default export
import subtract from './utils.js';

// Import default and named
import subtract, { add, multiply } from './utils.js';

// Import for side effects only
import './setup.js';
*/

console.log("Named imports: import { name } from './module.js'");
console.log("Default import: import name from './module.js'");
console.log("Namespace import: import * as Name from './module.js'");

// 6. DYNAMIC IMPORTS
// ==========================================

console.log("\n--- Dynamic Imports ---");

/*
// Load module dynamically
async function loadModule() {
  try {
    const module = await import('./module.js');
    module.doSomething();
  } catch (error) {
    console.log("Failed to load module");
  }
}

// Conditional loading
if (condition) {
  import('./feature.js').then(module => {
    module.init();
  });
}
*/

console.log("Dynamic import: import('./module.js').then(...)");
console.log("Async/await: const module = await import('./module.js')");

// 7. COMMONJS MODULES (NODE.JS)
// ==========================================

console.log("\n--- CommonJS Modules ---");

/*
// math.js - Export
module.exports = {
  add: function(a, b) {
    return a + b;
  },
  
  multiply: function(a, b) {
    return a * b;
  }
};

// Or individual exports
exports.PI = 3.14159;
exports.square = function(x) {
  return x * x;
};

// main.js - Import
const math = require('./math.js');
console.log(math.add(5, 3));

// Destructure
const { add, multiply } = require('./math.js');
*/

console.log("CommonJS export: module.exports = { ... }");
console.log("CommonJS import: const module = require('./module')");

// 8. MODULE PATTERNS - NAMESPACE
// ==========================================

console.log("\n--- Namespace Pattern ---");

// Prevent global namespace pollution
const MyApp = MyApp || {};

MyApp.utils = {
  formatDate(date) {
    return date.toISOString();
  },
  
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

MyApp.models = {
  User: function(name) {
    this.name = name;
  }
};

console.log("Capitalized:", MyApp.utils.capitalize("hello"));

// 9. MODULE PATTERNS - SINGLETON
// ==========================================

console.log("\n--- Singleton Module ---");

const database = (function() {
  let instance = null;
  
  function createInstance() {
    return {
      connection: "db://localhost:5432",
      
      query(sql) {
        return `Executing: ${sql}`;
      },
      
      close() {
        console.log("Closing database connection");
      }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

let db1 = database.getInstance();
let db2 = database.getInstance();
console.log("Same instance?", db1 === db2);

// 10. MODULE PATTERNS - FACTORY
// ==========================================

console.log("\n--- Factory Module ---");

const widgetFactory = (function() {
  // Private widget types
  class Button {
    constructor(text) {
      this.text = text;
      this.type = "button";
    }
    
    render() {
      return `<button>${this.text}</button>`;
    }
  }
  
  class Input {
    constructor(placeholder) {
      this.placeholder = placeholder;
      this.type = "input";
    }
    
    render() {
      return `<input placeholder="${this.placeholder}">`;
    }
  }
  
  // Public factory method
  return {
    create(type, config) {
      switch(type) {
        case "button":
          return new Button(config.text);
        case "input":
          return new Input(config.placeholder);
        default:
          throw new Error("Unknown widget type");
      }
    }
  };
})();

let button = widgetFactory.create("button", { text: "Click me" });
console.log(button.render());

// 11. MODULE DEPENDENCY INJECTION
// ==========================================

console.log("\n--- Dependency Injection ---");

const emailModule = (function() {
  return {
    send(to, subject, body) {
      console.log(`Sending email to ${to}: ${subject}`);
    }
  };
})();

const loggerModule = (function() {
  return {
    log(message) {
      console.log(`[LOG] ${message}`);
    },
    
    error(message) {
      console.error(`[ERROR] ${message}`);
    }
  };
})();

// Module that depends on other modules
const notificationModule = (function(email, logger) {
  return {
    notify(user, message) {
      logger.log(`Notifying ${user}`);
      email.send(user, "Notification", message);
    }
  };
})(emailModule, loggerModule);

notificationModule.notify("alice@example.com", "Hello!");

// 12. MODULE CONFIGURATION
// ==========================================

console.log("\n--- Module Configuration ---");

const configModule = (function() {
  // Default configuration
  let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    debug: false
  };
  
  return {
    get(key) {
      return config[key];
    },
    
    set(key, value) {
      config[key] = value;
    },
    
    getAll() {
      return { ...config };
    },
    
    reset() {
      config = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        debug: false
      };
    }
  };
})();

console.log("API URL:", configModule.get("apiUrl"));
configModule.set("debug", true);
console.log("All config:", configModule.getAll());

// 13. MODULE STATE MANAGEMENT
// ==========================================

console.log("\n--- State Management Module ---");

const stateManager = (function() {
  let state = {};
  let listeners = [];
  
  function notify(key, value) {
    listeners.forEach(listener => {
      listener(key, value, state);
    });
  }
  
  return {
    setState(key, value) {
      state[key] = value;
      notify(key, value);
    },
    
    getState(key) {
      return state[key];
    },
    
    getAllState() {
      return { ...state };
    },
    
    subscribe(callback) {
      listeners.push(callback);
    },
    
    unsubscribe(callback) {
      listeners = listeners.filter(l => l !== callback);
    }
  };
})();

stateManager.subscribe((key, value) => {
  console.log(`State changed: ${key} = ${value}`);
});

stateManager.setState("user", "Alice");
stateManager.setState("isLoggedIn", true);

// 14. LAZY LOADING MODULES
// ==========================================

console.log("\n--- Lazy Loading ---");

const lazyModule = (function() {
  let heavyFeature = null;
  
  function loadHeavyFeature() {
    console.log("Loading heavy feature...");
    // Simulate loading
    return {
      doSomething() {
        console.log("Heavy feature doing something");
      }
    };
  }
  
  return {
    useFeature() {
      if (!heavyFeature) {
        heavyFeature = loadHeavyFeature();
      }
      return heavyFeature;
    }
  };
})();

// Feature is loaded only when needed
lazyModule.useFeature().doSomething();
lazyModule.useFeature().doSomething(); // Uses cached version

// 15. MODULE EXPORTS PATTERNS
// ==========================================

console.log("\n--- Export Patterns ---");

// Pattern 1: Export object
const api1 = {
  get() {},
  post() {},
  put() {},
  delete() {}
};

// Pattern 2: Export class
class API {
  get() {}
  post() {}
  put() {}
  delete() {}
}

// Pattern 3: Export factory function
function createAPI(baseUrl) {
  return {
    get() {},
    post() {},
    baseUrl
  };
}

// Pattern 4: Export namespace
const Utils = {
  string: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  
  array: {
    unique(arr) {
      return [...new Set(arr)];
    }
  },
  
  number: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};

console.log("Random:", Utils.number.random(1, 10));

// 16. PRACTICAL MODULE EXAMPLES
// ==========================================

console.log("\n--- Practical Examples ---");

// Example 1: Validation module
const validator = (function() {
  const rules = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    url: /^https?:\/\/.+/
  };
  
  return {
    validate(type, value) {
      if (!rules[type]) {
        throw new Error(`Unknown validation type: ${type}`);
      }
      return rules[type].test(value);
    },
    
    addRule(name, regex) {
      rules[name] = regex;
    }
  };
})();

console.log("Valid email?", validator.validate("email", "test@example.com"));

// Example 2: Cache module
const cache = (function() {
  const store = new Map();
  const ttls = new Map();
  
  return {
    set(key, value, ttl = null) {
      store.set(key, value);
      if (ttl) {
        ttls.set(key, Date.now() + ttl);
      }
    },
    
    get(key) {
      if (ttls.has(key)) {
        if (Date.now() > ttls.get(key)) {
          this.delete(key);
          return null;
        }
      }
      return store.get(key);
    },
    
    has(key) {
      return store.has(key);
    },
    
    delete(key) {
      store.delete(key);
      ttls.delete(key);
    },
    
    clear() {
      store.clear();
      ttls.clear();
    }
  };
})();

cache.set("user", { name: "Alice" }, 5000);
console.log("Cached user:", cache.get("user"));

// 17. BEST PRACTICES
// ==========================================

console.log("\n--- Best Practices ---");

// ✅ Use ES6 modules for new projects
// ✅ Keep modules focused and single-purpose
// ✅ Export only what's needed (encapsulation)
// ✅ Use meaningful module and export names
// ✅ Avoid circular dependencies
// ✅ Group related functionality in modules
// ✅ Use barrel exports (index.js) for packages
// ✅ Document module dependencies

console.log("\nModules help organize and maintain large JavaScript applications!");
