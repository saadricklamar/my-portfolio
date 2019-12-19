import React from "react";
import "./App.scss";
import Content from "../Content/Content";
import { Link, animateScroll as scroll } from "react-scroll";
import TextLoop from "react-text-loop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <TextLoop
            children={[
              "Hello",
              "مرحبا",
              "Bonjour",
              "Hola",
              "你好",
              "Sveiki",
              "नमस्ते",
              "Hej"
            ]}
            interval={2000}
          />
          , I'm <span>Saad Baradan.</span>
          <br />
          I'm a full-stack web developer.
        </h1>

        <Link to="content" smooth={true} duration={1000}>
          <button className="home-button">View my work</button>
        </Link>
      </header>
      <Content />
    </div>
  );
}

export default App;
