let counterValue = 0;
let value = document.querySelector("#value");

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const valueDecrease = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const valueIncrease = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};

buttonDecrement.addEventListener("click", valueDecrease);
buttonIncrement.addEventListener("click", valueIncrease);
