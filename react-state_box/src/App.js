import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    //isActive = !isActive;
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}


/*
## Task

Refactor the code so that React re-renders the `App` component when `isActive` is changed.

You can use the following hints as guideline:

- Instead of `let`, consider the `useState` function.
  - Don't forget to import the function.
  - The initial state value should be `false`.
- Inside of the `handleClick` function, use the `set` function of the `useState` function to set the new value of the `isActive` state.

You should now be able to toggle the boxes color with the button! 🎉

## Bonus:

Can you use your newly created state to toggle the text on the button itself between "Activate" and "Deactivate"?

## Hacker Bonus

Check the console and pay attention to the logged value of `isActive`. You will notice, that `console.log()` doesn't log the value you set with the `set` function one line before. If you set `true` it will log `false` and vice versa. This is not a bug, but the fundamental way how state in React works.

Can you explain why this happens?

## Notes

- There is no need to change anything in the return statement of the `App` component (except for the bonus task).
- You only have to touch the [`src/App.js`](./src/App.js) file.
*/
