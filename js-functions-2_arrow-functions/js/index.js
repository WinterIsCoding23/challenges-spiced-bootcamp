console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
// ...as arrow-function:
const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}


function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
// ...as arrow-function:
const getVectorLength = (x, y, z) => 
  (x ** 2 + y ** 2 + z ** 2) ** 0.5;

function cleanInput(string) {
  return string.toLowerCase().trim();
}
// ... as arrow-function:
const cleanInput = string => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};
// ...as classic function:
function isOddAndSmall (number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};


const add3 = (a, b, c) => a + b + c;
// ... as classic function:
function add3 (a, b, c) {
  return a + b + c;
}

const repeat10 = (string) => string.repeat(10);
// ...as classic function:
function repeat10 (string) {
  return string.repeat(10);
}
