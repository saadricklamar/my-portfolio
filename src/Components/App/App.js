import React, { useState, useEffect } from "react";
import "./App.scss";
import Content from "../Content/Content";
import { Link } from "react-scroll";
import TextLoop from "react-text-loop";

export const App = () => {
  const [clickOrScroll, setEvent] = useState(false);

  const setSlider = () => {
    setEvent(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setEvent(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App" id="mobile-home">
      <header className="App-header">
        <h1 id="landing-greeting">
          <TextLoop
            children={[
              "Hello",
              "مرحبا",
              "Ciao",
              "你好",
              "Hola",
              "Sveiki",
              "नमस्ते",
              "Hej",
            ]}
            interval={1500}
            adjustingSpeed={500}
            springConfig={{ stiffness: 70, damping: 15 }}
            mask={true}
          />
          , I'm <span>Saad Baradan.</span>
          <br />
          I'm a Front End Engineer.
        </h1>

        <Link to="content" smooth={true} duration={500}>
          <button className="home-button" onClick={setSlider}>
            View my work
          </button>
        </Link>
      </header>
      <Content clickOrScroll={clickOrScroll} />
    </div>
  );
};

export default App;
