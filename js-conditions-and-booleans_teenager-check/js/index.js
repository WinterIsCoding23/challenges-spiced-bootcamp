const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // ...doesnt work with ... = Number(input.innerHTML);
  // -> in this case: input always = 0;

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  
  13 < age && age < 19 ? output.value = "You are a teen." : output.value = "You are not a teen.";
  console.log(age);

// ...works also with ...output.innerHTML = ... : output.innerHTML = ...

// Alternative: 
  13 < age && age < 19 ? output.innerHTML = "You are a teen." : output.innerHTML = "You are not a teen.";

  /*if (13 < age && age < 19) {
    output.innerHTML = "You are a teen.";
  } else {
    output.innerHTML = "You are not a teen.";
  }
  */

});