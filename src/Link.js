import React from "react";
import "./Link.css";

function Link() {
  return (
    <span className="link">
      This project was coded by Nicola Laing and is {""}
      <a href=" https://github.com/Nicola-laing/weather-react-app.git">
        {" "}
        open-sourced on GitHub
      </a>
    </span>
  );
}
export default Link;
