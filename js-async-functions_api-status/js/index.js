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
    // if so, the icon should display ✅
    icon = "✅";
  } catch (error) {
    // if not, the icon should display ❌
    icon = "❌";
  }  
  

  // --^-- write your code here --^--
}

button.addEventListener("click", () => {
  console.log (button);
  checkIfApiIsAvailable();
});


/*
## Task

Look at the [`js/index.js`](./js/index.js) file: There is a function called `checkIfAPIIsAvailable`; inside of this function, the `response` variable is declared with the result of `fetch(api)`.

The function is called everytime you click the button.

Your task is to refactor `checkIfAPIIsAvailable` so that - depending on `response.ok` - the icon displays either ✅ or ❌.

You can use the following hints as guideline:

- `fetch()` returns a promise, so make sure to wait for the result.
- Check whether 'response.ok' is truthy;
  - if so, the icon should display ✅
  - if not, the icon should display ❌
- Use a `try...catch` block.

## Bonus:

Can you display a '⏳' icon while waiting for the response?
*/