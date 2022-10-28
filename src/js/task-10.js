function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const bntCreate = document.querySelector("#controls button[data-create]");
const bntDestroy = document.querySelector("#controls button[data-destroy]");
const boxList = document.querySelector("#boxes");

let size = 30;

let inputValue = 0;

const getInputNumber = (event) => {
  inputValue = event.currentTarget.value;
};

const createBoxes = (amount) => {
  amount = inputValue;

  const markup = [];

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const newBox = document.createElement("div");
    newBox.style.width = size + "px";
    newBox.style.height = size + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    markup.push(newBox);
  }
  boxList.append(...markup);
};

const destroyBoxes = (event) => {
  boxList.remove();
};

inputEl.addEventListener("input", getInputNumber);
bntCreate.addEventListener("click", createBoxes);
bntDestroy.addEventListener("click", destroyBoxes);
