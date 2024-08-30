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
