function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const bntCreate = document.querySelector("#controls button[data-create]");
const bntDestroy = document.querySelector("#controls button[data-destroy]");
const boxList = document.querySelector("#boxes");

let inputValue = 0;

const getInputNumber = (event) => {
  inputValue = event.currentTarget.value;
};

const createBoxes = (amount) => {
  amount = inputValue;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + (i - 1) * 10}px`;
    newBox.style.height = `${30 + (i - 1) * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    boxList.append(newBox);
  }
};

const destroyBoxes = (event) => {
  boxList.remove();
};

inputEl.addEventListener("input", getInputNumber);
bntCreate.addEventListener("click", createBoxes);
bntDestroy.addEventListener("click", destroyBoxes);
