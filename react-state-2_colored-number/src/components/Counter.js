import { useState } from "react";

import ColoredNumber from "./ColoredNumber";

export default function Counter() {
const [value, setValue] = useState(0);

  function increaseValue () {
    setValue(value+1);
    console.log(value);
  }

  function decreaseValue () {
    setValue(value-1);
    console.log(value);
  }
  
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increaseValue}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decreaseValue}
        >
          -
        </button>
      </div>
    </div>
  );
}
