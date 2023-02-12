import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterByContinent, getCountries, orderByName, orderByPop } from "../../redux/actions";
// import {
//   filterCreated,
//   orderByName,
//   orderByScore,
//   filterByDiet,
// } from "../../actions";
// import style from "./Filter.module.css";

export default function Filter({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);
  console.log("🚀 ~ file: Filter.jsx:15 ~ Filter ~ allActivities", allActivities)
  const allCountries = useSelector((state) => state.countries);

  // function handleFilterCreated(e) {
  //   e.preventDefault();
  //   dispatch(filterCreated(e.target.value));
  //   // setCurrentPage(1);
  // }

  // function handleSort(e) {
  //   e.preventDefault();
  //   dispatch(orderByName(e.target.value));
  //   setCurrentPage(1);
  //   setOrder(e.target.value);
  // }

  // function handleSelectByScore(e) {
  //   e.preventDefault();
  //   dispatch(orderByScore(e.target.value));
  //   setCurrentPage(1);
  //   setOrder(e.target.value);
  // }

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  function handleSelectContinent(e) {
    e.preventDefault();
    dispatch(FilterByContinent(e.target.value));
    console.log("🚀 ~ file: Filter.jsx:51 ~ handleSelectContinent ~ e.target.value", e.target.value)
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleOrderByname(e){
  e.preventDefault();
  dispatch(orderByName(e.target.value));
  setCurrentPage(1);
  setOrder(e.target.value);
}

  function handleSortPop(e){
    e.preventDefault();
    dispatch(orderByPop(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div>
      {/* <div>
        <span>Filter by Continent</span>
        <select onChange={(e) => handleSelectContinent(e)}>
          <option value="all">All</option>
          <option value="vegan">Vegan</option>
          <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
          <option value="dairy free">Dairy Free</option>
          <option value="gluten free">Gluten Free</option>
          <option value="paleolithic">Paleolithic</option>
          <option value="primal">Primal</option>
          <option value="whole 30">Whole 30</option>
          <option value="pescatarian">Pescatarian 30</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="fodmap friendly">Fodmap Friendly</option>
        </select>
      </div>
      <div>
        <span>Order by Recipe Name</span>
        <select onChange={(e) => handleSort(e)}>
          <option value="all">All</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <div>
        <span>Order by Score</span>
        <select onChange={(e) => handleSelectByScore(e)}>
          <option value="all">All</option>
          <option value="asc">Highest Score</option>
          <option value="desc">Lowest Score</option>
        </select>
      </div> */}
      {/* <div>
        <span>Filter for Creation</span>
        <select onChange={(e) => handleFilterCreated(e)}>
          <option value="all">All</option>
          <option value="create">Create</option>
          <option value="api">Api</option>
        </select>
      </div> */}
      <div>
        <span>Filter by Continent:</span>
        <select onChange={(e) => handleSelectContinent(e)}>
        {/* {newArray && newArray.map(c => <option key={c} value={c}>{c}</option>)} */}
        <option value="all">All</option>
          <option value="Antarctica">Antarctica</option>
          <option value="South America">South America</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div>
      <span>Filter by Order:</span>
        <select onChange={(e) => handleOrderByname(e)}>
        <option value="ASC">Ascendent</option>
        <option value="DES">Descendent</option>
        </select>
      </div>
      <div>
        <span>Filter By Population:</span>
        <select onChange={(e) => handleSortPop(e)}>
          <option value="all">All</option>
          <option value="MAYOR">Mayor a Menor</option>
          <option value="MENOR">Menor a Mayor</option>
        </select>
      </div>
    </div>
  );
}
