// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Change this to false to see the reject case

//   if (success) {
//       resolve("Operation was successful!");
//   } else {
//       reject("Operation failed.");
//   }
// });

// myPromise
//   .then(result => {
//       console.log(result); // This will run if the promise is resolved
//   })
//   .catch(error => {
//       console.error(error); // This will run if the promise is rejected
//   });
// const newpromise = new promise(resolve,reject) =>{

// }























//https://api.github.com/users/sarthakdevil
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

