import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

export default function Detail() {
  const [detail, setDetail] = useState(null);
  console.log("🚀 ~ file: Detail.jsx:8 ~ Detail ~ detail", detail);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/countrie/${id}`).then((response) => {
      setDetail(response.data);
    });
    return () => {
      setDetail(null);
    };
  }, []);

  return (
    <div>
      {detail ? (
        <div key={detail.id}>
          <Link to={"/home"}>
            <button>Home</button>
          </Link>
          <h1>{detail.name}</h1>
          <img src={detail.flags} alt={detail.name} />
          <h3>Continent: {detail.continents}</h3>
          <h3>Capital: {detail.capital}</h3>
          <h3>Population: {detail.population}</h3>
          <h3>Region: {detail.subregion}</h3>
          <h3>Area: {detail.area}</h3>
          <p>Id: {detail.id}</p>
          <div>
            {detail &&
              detail.activities.map((d) => (
                <div key={detail.id}>
                  <h1>Activities:</h1>
                  <h3>Name: {d.name}</h3>
                  <p>Difficulty: {d.difficulty}</p>
                  <p>Duration: {d.duration}</p>
                  <p>Season: {d.season}</p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
