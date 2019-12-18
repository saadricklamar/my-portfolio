import React from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, I'm <span>Saad Baradan.</span>
          <br />
          I'm a full-stack web developer.
        </h1>
        <button className="home-button">
          View my work
        </button>
      </header>
    </div>
  );
}

export default App;
