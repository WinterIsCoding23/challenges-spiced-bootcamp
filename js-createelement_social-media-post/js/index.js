console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
  // create elements
  const newPost = document.createElement("article");  
  const paragraph = document.createElement("p");  
  // "(paragraph)" doesnt work, needs to be html-tag
  const footer = document.createElement("footer");  
  const span = document.createElement("span");  
  const button = document.createElement("button");  
  
  // locate elements on page
  document.body.append (newPost);
  newPost.append (paragraph);
  newPost.append (footer);
  footer.append (span);
  footer.append (button);

  // fill in content to the elements
  paragraph.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  span.innerHTML = "@username";
  button.innerHTML = "♥ Like";

  // styling witch classes
  newPost.classList.add("post");
  paragraph.classList.add("post__content");
  footer.classList.add("post__footer");
  span.classList.add("post__username");
  button.classList.add("post__button");

  // interactive button
  button.setAttribute("type", "button");
  button.addEventListener("click", handleLikeButtonClick);


/*
NOTES FROM CLASS:
// article needs a class to make the new post appear on the website:
newPost.classList.add("post"); 
// alternative. back-ticks, copy wished html-text, finished
const paragraph = document.createElement("p"); // tags in round brackets
paragraph.classList.add("post__content");
console.log(paragraph) // appears already in console
paragraph.textContent = "lorem ipsum";
console.log(paragraph);
newPost.append(paragraph);
console.log(newPost);
//button:
const button = document.createElement ("button");
button.setAttribute("type", "button");
button.innerText = "Click me";

// to make the button work:
button.addEventListener("click, handleLikeButtonClick")

console.log(button);

// to make it appear on the website: append it to the body:
document.body.append(newPost);

*/