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

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 10)); // ?

console.log(greet("John Doe")); // ?
