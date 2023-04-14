import "./Card.css";

export default function Card({ name, color }) {                             // name & color can be named however we want
  return <p className="card" style={{backgroundColor:color}}>{name}</p>;
}

