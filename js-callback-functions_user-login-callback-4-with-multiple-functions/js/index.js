console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
// 1.
function showWelcomeMessage (userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

// 2.
function showErrorMessage (errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

// 3. 
handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

// 4. 
handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");