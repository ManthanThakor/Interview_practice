function showMessage() {
  alert("Hello, World!");
}

function changeText() {
  document.querySelector("h1").textContent = "Hello, World!";
}
function changeBackgroundColor() {
  var element = document.getElementById("container");
  element.style.backgroundColor = "red";
}

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); // ?
// }

// let a = 5;
// {
//   let a = 15;
//   console.log(a); // ?
// }

// const car = new Object();
// car.make = "Toyota";
// car.model = "Camry";
// car.year = 2020;

// console.log(car); // ?

// function greet() {
//   console.log("Hello, World!");
// }

// greet(); // ?

// // Function Declaration
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// // Function Expression
// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(5, 10)); // ?

// console.log(greet("John Doe")); // ?
// function showArguments() {
//   console.log(arguments);
// }

// showArguments("a", "b", "c");
// setTimeout(() => {
//   console.log("Executed once after 1000ms");
// }, 1000);

// setTimeout(() => {
//   console.log("Executed twice after 2000ms");
// }, 2000);

// const interv = setInterval(() => {
//   console.log("Interval executed");
// }, 1000);

// clearInterval(interv);
// const arr = [1, 2, 3, 4, 5];
// arr.reverse().forEach((value) => {
//   console.log(value); // Output: 5, 4, 3, 2, 1
// });

//! promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Data fetch successfully");
//       } else {
//         reject("Data fetch failed");
//       }
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//! async await

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

const fetchAndProcess = async () => {
  try {
    console.log("Fetching Data....");
    const data = await fetchData();
    console.log(data);
    // Process data here
    console.log("Data processed successfully");
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

fetchAndProcess();
