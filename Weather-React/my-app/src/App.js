import "./App.css";
import Weather from "./Weather";

function App() {
  

  return (
    <div className="app-container">
      <h1> Weather</h1>
      <Weather />
      <div>
        <p className="city-info"></p>
        <p className="temp"></p>
      </div>
    </div>
  );
}

export default App;
