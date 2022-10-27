const inputEl = document.querySelector("#validation-input");

const validNumber = Number(inputEl.dataset.length);

const validation = (evt) => {
  if (evt.currentTarget.value.length === validNumber) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  }

  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
};

inputEl.addEventListener("blur", validation);
