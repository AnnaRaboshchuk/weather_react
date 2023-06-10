import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="London"/>
        <footer className="Source">
          This project is coded by Anna Raboshchuk and is{" "}
          <a
            href="https://github.com/AnnaRaboshchuk/weather_react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
