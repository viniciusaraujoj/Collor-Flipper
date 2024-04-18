const colors = ["Red", "Green", "#F15025", "Rgba(133,122,200)"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const body = document.body;

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  const number = randomNumber();
  body.style.background = colors[number];
  color.textContent = colors[number];
});
