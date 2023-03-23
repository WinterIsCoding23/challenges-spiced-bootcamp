console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  /*const numA = parseInt(form.numberA.value);
  const numB = parseInt(form.numberB.value);
  console.log(numA, numB);*/

  /*
  const formData = new FormData(event.target);
  const data = Object.fromEntries.apply(formData);
  const numA = parseInt(data.numberA);
  const numB = parseInt(data.numberB);
  const operation = data.operator;
  console.log ("numA, numB, operation", numA, numB, operation);
  */

  let result;

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
