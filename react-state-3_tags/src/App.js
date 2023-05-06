import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    console.log(newTag); 
    setTags([...tags, newTag]);
  }

  function handleDeleteTag(tagToDelete) {
    console.log(tagToDelete); 
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag}/>
      <List onDeleteTag={handleDeleteTag} tags={tags} />
    </main>
  );
}


