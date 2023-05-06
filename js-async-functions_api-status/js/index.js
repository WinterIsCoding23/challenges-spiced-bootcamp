const icon = document.querySelector('[data-js="status-icon"]');
const button = document.querySelector('[data-js="status-button"]');

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

// Something needs to change here…
// ↙️
async function checkIfApiIsAvailable() {
  /**
   * Hint 1:
   * Use the `fetch()` function and pass the `apiStatusUrl` into it
   *
   * Hint 2:
   * The fetch function returns a promise which resolves to a Response
   * object once it is ready.
   *
   * Hint 3:
   * The Response object has a `ok` property which is true if the response
   * is okay and false if it is not.
   **/
  // --v-- write your code here --v--

    try {
      icon.textContent = "⏳";
      const response = await fetch(apiStatusUrl);      
      const data = await response.json(); 
        
      if (response.ok) {
        // Success (Good Response)
        icon.textContent = "✅";
        console.log(data);
      } else {
        // Failure (Bad Response)
        icon.textContent = "❌";
        console.error("Bad Response");
      }
    } catch (error) {
      // Failure (Network error, etc)
      console.error("An Error occurred");
    }

  // --^-- write your code here --^--
}

button.addEventListener("click", () => {
  console.log (button);
  checkIfApiIsAvailable();
});

