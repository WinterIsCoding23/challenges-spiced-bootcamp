// Store the cards in a global state
import {cards} from "./utils/questions.js"; 
import {CardList} from "./components/CardList/cardList.js";
import {App} from "./components/App/app.js";


export function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split(","),
    isBookmarked: false,
  };

  cards.unshift(newCard);
  

  // To prevent the need to rerender, we add the new card to the DOM directly
  const cardList = document.querySelector(".card-list");
  const newCardElement = Card(newCard);
  cardList.prepend(newCardElement);

  event.target.reset();
  event.target.elements.question.focus();
}


// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
