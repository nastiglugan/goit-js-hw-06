const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");

const updateName = (evt) => {
  if (inputName.value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputName.value;
  }
};

inputName.addEventListener("input", updateName);
