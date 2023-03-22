console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage () {
  const yPosition = window.scrollY; 
  const windowHeight = document.body.clientHeight - window.innerHeight;
  console.log (yPosition, windowHeight);
  const percentage = (yPosition / windowHeight) * 100;
  return percentage + "%";
}

document.addEventListener ("scroll", () => {
  const percentage = calculateScrollPercentage (); 
  progressBar.style.width = percentage;  
})