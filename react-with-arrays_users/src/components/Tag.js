import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <>
      { (tag  === "admin") ? <li className="tag tag--highlight">{tag}</li> : <li className="tag">{tag}</li> }
    </>
  // Alternative:
  // if (tag === "admin") {return <li className="tag tag--highlight" >{tag}</li>} 
  // else {return <li className="tag" >{tag}</li>}
  )
}
