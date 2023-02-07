import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
// import style from "./NavBar.module.css";
// import img from "../../image/icons8-plus-80.png";

export default function NavBar({ setCurrentPage }) {
  return (
    <div>
      <SearchBar setCurrentPage={setCurrentPage} />
      <Link to={"/create"}>
        <button>Create Activity</button>
      </Link>
    </div>
  );
}
