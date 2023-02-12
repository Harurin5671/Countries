import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/index.js";
import Cards from "../Cards/Cards.jsx";
import Loader from "../Loader/Loader.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Filter from "../Filter/Filter.jsx";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allcountries);
  console.log("🚀 ~ file: Home.jsx:15 ~ Home ~ allCountries", allCountries)
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("");
  const [countriesPerPage] = useState(10);
  const indexOfLastCountrie = currentPage * countriesPerPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountries());
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div>
      {allCountries.length > 0 ? (
        <div>
          <NavBar setCurrentPage={setCurrentPage} />
          <button onClick={(e)=>handleClick(e)} >Reset Countries</button>
          <Filter setCurrentPage={setCurrentPage} setOrder={setOrder} />
          <h1>The Countries</h1>
          <div className="container">
            <Cards data={currentCountries} />
          </div>
          <Pagination
            allCountries={allCountries.length}
            pagination={pagination}
            countriesPerPage={countriesPerPage}
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
