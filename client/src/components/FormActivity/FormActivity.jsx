import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { postActivity, getCountries } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
// import style from "./CreateRecipe.module.css";
// import img from "../../image/icons8-home-page-50.png";

// function validate(input) {
//   let errors = {};
//   input.title
//     ? (errors.title = "")
//     : (errors.title = "You must name the recipe");
//   input.summary
//     ? (errors.summary = "")
//     : (errors.summary = "You must provide a summary");
//   input.diets.length < 1
//     ? (errors.diets = "Choose at least one diet")
//     : (errors.diets = "");
//   if (!input.image.includes("https://") && !input.image.includes("http://")) {
//     if (input.image === "") {
//       errors.image = "";
//     }
//     errors.image = "This isn't a valid image address";
//   } else {
//     errors.image = "";
//   }
//   if (input.healthScore <= 0 || input.healthScore > 100) {
//     errors.healthScore = "Please select a number within the range of 1 to 100";
//   } else {
//     errors.healthScore = "";
//   }
//   return errors;
// }

export default function FormActivity() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    duration: 0,
    difficulty: 0,
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    if (
      input.name &&
      input.duration &&
      input.difficulty &&
      input.season &&
      input.countries.length >= 0
    ) {
      e.preventDefault();
      dispatch(postActivity(input));
      alert("Activity succesfully Created!!");
      setInput({
        name: "",
        duration: 0,
        difficulty: 0,
        season: "",
        countries: [],
      });
    } else {
      e.preventDefault();
      alert("You must complete every field!!");
    }
  }

  function handleSelect(e) {
    setInput((input) => ({
      ...input,
      countries: [...input.countries, e.target.value],
    }));
    console.log(input.countries);
  }

  function handleDelete(e, d) {
    e.preventDefault();
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== d),
    });
  }

  return (
    <div>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Activity Name:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Complete here..."
            name="name"
            value={input.name}
          />
        </div>
        <div>
          <label>Activity Duration:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            placeholder="Complete here..."
            name="duration"
            value={input.duration}
          />
        </div>
        <div>
          <label>Activity Difficulty:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            placeholder="Complete here..."
            name="difficulty"
            value={input.difficulty}
          />
        </div>
        <div>
          <label>Activity Season:</label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Complete here..."
            name="season"
            value={input.season}
          />
        </div>
        <div>
          <span>Countries</span>
          <select onChange={(e) => handleSelect(e)}>
            {allCountries &&
              allCountries.map((c) => (
                <option value={c.name} key={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
          {input.countries.map((d, i) => (
            <div key={i}>
              <h5>{d}</h5>
              <button onClick={(e) => handleDelete(e, d)}>x</button>
            </div>
          ))}
        </div>
        <button type="submit">Create a Recipe</button>
      </form>
    </div>
  );
}
