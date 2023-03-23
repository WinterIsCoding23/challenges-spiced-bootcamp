/*

Switch the input values of the two input fields when clicking the button

- [x] Add a second input element to the index.html
- [x] Assign the second input element to a variable
- [x] Add a third button (a switch button) to the index.html
- [x] Assign the third button to a variable
- [x] Make sure that when the switch button is clicked, the values of the two input fields are being switched
- [x] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  secondInput.value = secondInput.value.toLowerCase();
  firstInput.value = firstInput.value.toLowerCase();
});

switchButton.addEventListener("click", () => {
  const firstSave = firstInput.value;

  firstInput.value = secondInput.value;
  secondInput.value = firstSave;
  console.log(firstInput.value, secondInput.value);
});
