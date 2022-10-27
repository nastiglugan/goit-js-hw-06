const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("ul");

const pushIngredients = ingredients.map((ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredient;
  newEl.classList.add("item");

  return newEl;
});

listOfIngredients.append(...pushIngredients);
