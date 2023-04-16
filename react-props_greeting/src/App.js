import "./styles.css";

function Greeting ({name}) {
  // if (name === "Jan" || name === "Sven" || name === "Marcell") {
  // return <h1>Hello, Coach!</h1>
  // } else {return <h1>Hello, {name}!</h1>} 

  const coach = ["Jan", "Sven", "Marcell"];
  //const isCoach = name === "Jan" || name === "Sven" || name === "Marcell";
  //return isCoach ? <h1>Hello, Coach!</h1> : <h1>Hello, {name}!</h1>;
  
  return coach.includes(name) ? <h1>Hello, Coach!</h1> : <h1>Hello, {name}!</h1>;
}

export default function App() {
  return <Greeting name = "Meister" />;
}


/*

- Write the `Greeting` component inside of the [`App.js`](src/App.js).
  - It accepts a prop called `name` (make sure to destructure it).
  - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
- Inside of the return statement of your `App` component, replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.

Update your `Greeting` component to show "Hello, Coach!" if the `name` prop is equal to one of your coaches.
*/