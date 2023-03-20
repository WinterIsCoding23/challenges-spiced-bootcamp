const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  
  /*13 < age && age < 19 ? output = "You are a teen." : output = "You are not a teen.";*/

  if (13 < age && age < 19) {
    output = "You are a teen.";
  } else {
    output = "You are not a teen.";
  }

});
