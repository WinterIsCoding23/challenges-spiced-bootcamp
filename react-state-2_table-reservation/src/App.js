import { React, useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handlePeopleAdd () {
    setPeople(people+1);
  } 

  function handlePeopleSubtract () {
    if (people >= 1){
    setPeople(people-1)}
  } 

  console.log(people)
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter 
        onPeopleAdd={handlePeopleAdd}                    // onPeopleAdd & onPeopleSubtract = both are the props
        onPeopleSubtract={handlePeopleSubtract}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
