//function
function sayhello(name){
    console.log(`hello ${name}`);
}
sayhello("Sarthak")






//arrow function
const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3));


const name = (name) =>{
  console.log(name)
}












// callback function
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('John', sayGoodbye);
  