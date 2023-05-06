console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!
function showWelcomeMessage(params) {
  console.log("Welcome! You are logged in now.");  
}

// 1.
handleUserLogin(showWelcomeMessage);

// 2. 
handleUserLogin(function(){});

// 3.
handleUserLogin(function(){console.log("Welcome! You are logged in now.")});
