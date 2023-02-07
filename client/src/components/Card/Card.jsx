import React from "react";
import "./card.css";

export default function Card({ id, name, flags, continents }) {
  return (
    <div className="card_container" key={id}>
      <h1>{name}</h1>
      <img className="card_img" src={flags} alt={name} />
      <h3>{continents}</h3>
    </div>
  );
}
