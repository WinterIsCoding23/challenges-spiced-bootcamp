// .mjs = module.js -> enables import/export
// alternative: terminal: npm init -y --> installs package.json; inside there: "type": "module"

class Cart {
  #items = [];

  get items() {
    return this.#items;
  }

  // constructor(name, code, price, quantity) {
  //   (this.name = name),
  //     (this.code = code),
  //     (this.price = price),
  //     (this.quantity = quantity);
  // }

  add({ name, code, price, quantity }) {
    this.#items.push({ name, code, price, quantity });
  }

  remove(item) {
    // this.#items.pop(item);
    // this.#items = this.#items.filter((myItem) => myItem !== item); -> not correct bc could be that the same product is in Cart twice
    const index = this.#items.indexOf(item);
    if (index < 0) {
      throw new Error(`${ìtem} not found in the cart`);
    }
    this.#items.splice(index, 1);
  }

  count(item) {
    return this.#items.filter((myItem) => myItem === item).length;
  }

  // constructor() {
  //   this.items = [];
  // }
  // addItem(item) {
  //   this.items.push(item);
  // }
}

export default Cart;

// # Shopping Cart
// ## 2. CRUD on the cart
// ​
// 1. cart.add('green apples') affects the cart by adding to its items; cart.items reflects this.
// 2. cart.remove('green apples') removes one instance of the product from the cart's items, and throws an error if not found; cart.items reflects this.
// 3. cart.count('green apples') returns the amount of the given item found in the cart (can be zero)
// ​
// ## 1. Basics
// ​
// 1. I can import the Cart class into another file
// 2. I can create an instance of the Cart class
// 3. The instance has a private instance variable: `items`
// 4. The instance has a public getter for `items`
// 5. When I ask the instance for its items, I receive an empty array
// ​
