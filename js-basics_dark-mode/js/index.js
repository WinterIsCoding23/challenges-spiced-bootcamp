console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector("[data-js=dark-mode-button]");
darkButton.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});

const lightButton = document.querySelector("[data-js=light-mode-button]");
lightButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});

const toggleButton = document.querySelector("[data-js=toggle-button]");
toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});