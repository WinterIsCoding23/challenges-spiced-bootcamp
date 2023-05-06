console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showWelcomeMessage (userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
};

// 1. 
handleUserLogin(showWelcomeMessage); 

// 2. 
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`)
})

