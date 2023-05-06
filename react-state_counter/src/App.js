import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState (0);
  //let count = 0;

  function addCount() {
    setCount (count+1);
  }

  function subtractCount() {
    setCount (count-1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            subtractCount();
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            addCount();
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

/*
## Task

Refactor the code so that it features React state and makes use of it. Declare a state variable and make sure to have the buttons update said state variable.

You can use the following hints as a guideline:

- `let` doesn't seem to be the appropriate way to declare a variable in this instance.
- Is there a built-in React function you can use instead?
  - Make sure to import said function.
- At present, the `<button>`s' event handler is logging an emoji to the console.
  - Clearly, the event handler should be handling a different type of functionality.
  */