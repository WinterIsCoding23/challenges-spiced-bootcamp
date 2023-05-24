import Cart from "./cart2.js";

// const greenApples = {
//   name: "green apples",
//   code: 123,
//   price: 1.99,
//   quantity: 5,
// };

const cart = new Cart();
console.log(cart.items);

cart.add({
  name: "green apples",
  code: 123,
  price: 1.5,
  quantity: 2,
});

cart.remove(0);
console.log(cart.items);

cart.add({
  name: "green apples",
  code: 123,
  price: 1.5,
  quantity: 3,
});

cart.add({
  name: "green apples",
  code: 123,
  price: 1.5,
  quantity: 2,
});

cart.add({
  name: "tomatoes",
  code: 234,
  price: 1,
  quantity: 3,
});

const count = cart.count("green apples");
console.log(`There are ${count}green apples in your cart`);

const total = cart.getTotal();
console.log(`Your total is ${total}`);
