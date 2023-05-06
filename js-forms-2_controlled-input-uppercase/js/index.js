console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
    const afterEvent = event.target.value.toUpperCase ();
    input.value = afterEvent; 
})



