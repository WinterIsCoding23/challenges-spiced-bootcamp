import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {

  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        { USERS.map(( user, index) => {
         console.log(index)                                 // index can be named however we want; its part of the .map-method (second optional argument); indexes the newly rendered elements - equal the position of the respective element in the original array  
        return <Card key={index} user={user}/> 
        })}
      </div>
    </main>
  );
}
