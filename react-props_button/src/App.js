import React from "react";
import "./styles.css";

// function handleClick (){
//   console.log("I hit the button!"); 
// }

function Button ({ color, disabled, text, backgroundColor, fontSize, padding }) {
  function handleClick () {
    console.log("I hit the button!");
    alert('You clicked me!');
  }
  return (
    <button 
      // Task 2: onClick = {() => (console.log("I hit the button"), alert('You clicked me!'))} 
      // Task 3: 
      onClick={handleClick}
      style={{color, backgroundColor, fontSize, padding}} 
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default function App() {
  return <Button  padding="20px" fontSize="35px" disabled={false} backgroundColor= "red" color="green" text="This is a button"/>;
}

// Lessons learned: 
// Task 2 & 3: no need to pass onclick-event from Button to App bc this method is already "fixed" to the button through Button  


/*
- Move the `handleClick` function from the `Button` component to the `App` component.
- In the `App` component, pass the `handleClick` function as a prop called `onClick` to the `Button` component (hint: `onEventName={handleEventName}`).
- In the `Button` component, receive the `onClick` prop as a parameter.
- Pass the received `onClick` prop to the `<button>`'s `onClick` prop.

🎉 Congratulations, you've built a button component which can handle every function passed to it as prop!
*/
