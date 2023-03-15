import React, { useState } from "react";
import "./Weather.css";
import Results from "./Results.js";

export default function Weather() {
  let [, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="weather-box">
      <div className="search-engine">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={updateCity}
            id="search-bar"
            placeholder="Search city here"
          />
          <input type="submit" value="Submit" id="submit-button" />
        </form>
      </div>
      <Results />
    </div>
  );
}
