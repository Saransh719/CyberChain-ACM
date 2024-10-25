function sayHello() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello, world!");
      }, 1000); // Wait 1 second before resolving
    });
  }
  
  // Async function
  async function greet() {
    const message = await sayHello(); // Wait for sayHello to resolve
    console.log(message); // Output the message
  }
  
  greet();