console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i < 6; i++) {
    const imgElement = document.createElement("img");    
    imgElement.setAttribute("src", "./assets/star-empty.svg");

    if (filledStars < i && filledStars > 0) {
      imgElement.setAttribute ("src", "./assets/star-empty.svg"); 
    } else {
      imgElement.setAttribute ("src", "./assets/star-filled.svg"); 
    }
    imgElement.addEventListener("click", () => {
      console.log("it works!");
      renderStars(i);
    })
    starContainer.append(imgElement); 
  }

 //--^-- your code here --^--
}

renderStars();