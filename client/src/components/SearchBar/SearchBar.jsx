import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/actions/index";
// import style from "./SearchBar.module.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(getCountryName(input));
    input.length && setCurrentPage(1);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Write something..."
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}
