console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i=0; i<6; i++) {
    const emptyStar = document.createElement("img");
    //emptyStar.src = "../assets/star-empty.svg";

    if (filledStars < i) {
      emptyStar.setAttribute("src", "./assets/star-empty.svg");
    } else {
      emptyStar.setAttribute("src", "./assets/star-filled.svg");
    }  
    emptyStar.addEventListener("click", () => {
      console.log("clicked on a star");
      render-statusbar(i);
    })  
    starContainer.append(emptyStar);
  }





  //--^-- your code here --^--
}

renderStars();
