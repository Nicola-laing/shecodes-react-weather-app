import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather</h1>
        <Weather />
        <div>
          <p className="city-info"></p>
          <p className="temp"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
