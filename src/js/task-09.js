function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const changeColor = (evt) => {
  let currentColor = getRandomHexColor();

  body.style.backgroundColor = currentColor;
  colorName.textContent = currentColor;
};

button.addEventListener("click", changeColor);
