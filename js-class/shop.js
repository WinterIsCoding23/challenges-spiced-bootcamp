import Cart from "./cart.js";

const greenApples = {
  name: "green apples",
  code: 123,
  price: 1.99,
  quantity: 5,
};

const blueTomatoes = {
  name: "blue tomatoes",
  code: 456,
  price: 5000,
  quantity: 20,
};

const cart = new Cart();
cart.add(greenApples);
cart.add(blueTomatoes);

cart.remove(blueTomatoes);
console.log(cart.items);

// cart.remove("green apples");
// console.log(cart.items);

// cart.add("tomatoes");
// console.log("how many tomatoes?", cart.count("tomatoes"));
