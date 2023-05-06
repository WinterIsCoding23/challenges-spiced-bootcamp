console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
function showWelcomeMessage (userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`)
}

// 1. 
handleUserLogin(showWelcomeMessage);

// 2. 
handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`)
})
