const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const pushIngredients = (arr) => {
  const list = document.querySelector("ul");

  for (const item of arr) {
    const newEl = document.createElement("li");
    newEl.textContent = item;
    newEl.classList.add("item");

    list.append(newEl);
  }
};

pushIngredients(ingredients);
