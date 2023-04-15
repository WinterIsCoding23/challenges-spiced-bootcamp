console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault()
  const newMessage = document.createElement("li"); 
  // create new Element, its position will be determined later 
  
  newMessage.classList.add("toast-container__message");
  //newMessage.textContent = "text";
     
  newMessage.innerHTML=           
  // here a STRING has to follow, can be manipulated with HTML-tags
    "<b>I'm a brandnew toast message!</b>"      
  
  toastContainer.append(newMessage); 

});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.textContent = "";  
});
