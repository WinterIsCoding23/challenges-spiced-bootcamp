console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current time: new Date().getHours() )
(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let hour = new Date().getHours();

  if (hour >= 6 && hour <= 12) {
    return "Good Morning!";
  } else if (hour > 12 && hour <= 18) {
    return "Good Afternoon!";
  } else if (hour > 18 && hour <= 22) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
}

function getDayColor() {
  let day = new Date().getDay();

  if (day === 1) {
    return "darkgray";
  } else if (day >= 2 && day <= 5) {
    return "lightblue"; 
  } else if (day === 0 || day === 6) {
    return "hotpink";
  } 
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
