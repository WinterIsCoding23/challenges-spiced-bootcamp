console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = pizzaInput2.value;
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1/2) **2; 
  const area2 = Math.PI * (diameter2/2) **2;
  
  const gainRelative = (area2 - area1) / area1 * 100;
  let textContent = Math.round(gainRelative);  
  
}

calculatePizzaGain (24, 24); 


// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}
