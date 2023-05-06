import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return <article>
    <h1>This is a header</h1>
    <p>lorem ipsum etc. and Im annoyed that lorem ipsum doesnt work.
    </p>
  </article>
}

