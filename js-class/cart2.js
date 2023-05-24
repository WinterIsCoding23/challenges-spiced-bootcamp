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

  add(item) {
    const index = this.#items.findIndex((myItem) => myItem.code === item.code);
    //we alreadey have some of this item in the cart
    if (index >= 0) {
      this.#items[index].quantity += item.quantity;
    } else {
      this.#items.push(item);
    }
    // console.log("found index", index);
  }

  remove(index) {
    // this.#items.pop(item);
    // this.#items = this.#items.filter((myItem) => myItem !== item); -> not correct bc could be that the same product is in Cart twice
    // const index = this.#items.indexOf(item);
    if (index < 0 || index >= this.#items.length) {
      throw new Error(`Invalid index`);
    }
    this.#items.splice(index, 1);
  }

  count(itemName) {
    const filtered = this.#items.filter((myItem) => myItem.name === itemName);
    const sum = filtered.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    return sum;
  }

  getTotal() {
    const grandTotal = this.#items.reduce((total, currentItem) => {
      const itemSubtotal = total + currentItem.quantity * currentItem.price;
      return total + itemSubtotal;
    }, 0);
    return grandTotal;
  }
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
