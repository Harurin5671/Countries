import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards({ data }) {
  return (
    <div>
      {data &&
        data.map((c) => (
          <div className="cards_container" key={c.id}>
            <Link to={`/countrie/${c.id}`}>
              <Card
                name={c.name}
                flags={c.flags}
                id={c.id}
                continents={c.continents}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}
