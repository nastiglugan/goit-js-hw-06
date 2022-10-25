const input = document.querySelector("#validation-input");

const validNumber = document.querySelector('input[data-length="6"]').dataset
  .length;

const validation = () => {
  if (input.value < validNumber) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
};

input.addEventListener("blur", validation);
