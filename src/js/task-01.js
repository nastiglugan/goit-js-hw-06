const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((items) => {
  console.log(`Category: ${items.querySelector("h2").textContent}`);
  console.log(`Elements: ${items.querySelectorAll("li").length}`);
});
