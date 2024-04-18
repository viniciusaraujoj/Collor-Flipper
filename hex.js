const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const body = document.body;

function hexNumber() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

btn.addEventListener("click", function () {
  const number = `#${hexNumber()}`;

  body.style.background = number;
  color.textContent = number;
});
