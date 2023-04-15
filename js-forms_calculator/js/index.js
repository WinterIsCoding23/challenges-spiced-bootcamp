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

  const numberA = parseInt (form.numberA.value);
  const numberB = parseInt (form.numberB.value);
  console.log(numberA, numberB, form.numberA.value, form.numberB.value);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  let operator = data.operator;
  console.log("data", data, "operator", operator);

  let result;

  if (data.operator === "addition") {
    result = add (numberA, numberB);
  } else if (operator === "subtraction") {
    result = subtract (numberA, numberB);
  } else if (operator === "multiplication") {
    result = multiply (numberA, numberB);
  } else if (operator === "division" && !(numberB === 0)) {
    result = divide (numberA, numberB)
  } else if (operator === "division" && numberB === 0) {
    result = "If you try to do this one more time...!";
  }


  

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
