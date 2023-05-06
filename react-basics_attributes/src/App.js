import React from "react";
import "./styles.css";

export default function App() {
  return <Component />;
}

function Component () {
  return <article className="article">
    <h2 className="article__title">Look at my beautiful header</h2>
    <label htmlFor="react-input"></label>
    <input id="react-input"></input>
    <a className="article__link" href="https://reactnative.dev/">This is a link</a>
  </article>
}


