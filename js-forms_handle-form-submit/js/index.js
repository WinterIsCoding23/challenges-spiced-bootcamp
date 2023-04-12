console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener ("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const formElements = event.target.elements;
    console.log(formElements.tos.value);

    console.log(`The age-badness-sum of ${formElements.firstName.value} is ${parseInt(formElements.age.value) + parseInt(formElements.badness.value)}`);
})

