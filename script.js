// DOM elements
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");


greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = "Hello";
  }
});


document.getElementById("redBox").addEventListener("click", () => {
  document.getElementById("redBox").style.background = "red";
});
document.getElementById("blueBox").addEventListener("click", () => {
  document.getElementById("blueBox").style.background = "blue";
});
document.getElementById("greenBox").addEventListener("click", () => {
  document.getElementById("greenBox").style.background = "green";
});
document.getElementById("yellowBox").addEventListener("click", () => {
  document.getElementById("yellowBox").style.background = "yellow";
});
