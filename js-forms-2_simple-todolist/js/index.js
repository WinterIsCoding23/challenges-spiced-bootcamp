console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener ("submit", (e) => {
    e.preventDefault();

    const headlineInput = document.getElementById("headline").value;
    const taskInput = document.getElementById("task").value;

    console.log("Headline: ", headlineInput, "Task: ", taskInput);
    
    listingTasks (headlineInput, taskInput); 

    e.target.reset();
    headline.focus();     
})

function listingTasks (formDataObject1, formDataObject2) {
    const listEntry = document.createElement ("li");
    todoList.append(listEntry);

    const listHeadline = document.createElement("h2");
    listHeadline.textContent = document.getElementById("headline").value;
    listEntry.append(listHeadline);
    
    const listParagraph = document.createElement("p");
    listParagraph.textContent = document.getElementById("task").value;
    listEntry.append(listParagraph);
}



/*
### 1. Listen to the submit event

- Write an event listener for the form submit.
- Log the user data to the console (we will use the data later in this exercise).
- After submit, reset the form and focus the input field with the name `headline`.

### 2. Create list entries

Look at the [`index.html`](./index.html) file: there already is an `ul` for our submitted todos. We only need to write a function which creates list items and appends them to this list.

Here are some hints to guide you:

- The function needs one parameter (which will be the form data object).
- The list item has
  - a headline containing the string from `data.headline`
  - a text element containing the string from `data.task`.
- Make sure NOT to use `innerHTML` since it is a [security risk when working with user inputs](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations).
- Don't forget to
  - append the headline and text element to the list item as well as the list item to the todoList
  - call the function when the submit event is fired and pass the data object as an argument.
  */
