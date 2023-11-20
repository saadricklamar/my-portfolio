import React, { useState, useEffect, useReducer } from "react";
import "./App.scss";
import Content from "../Content/Content";
import { Link } from "react-scroll";
import TextLoop from "react-text-loop";

export const App = () => {
  const [clickOrScroll, setEvent] = useState(false);
  const [navButtons, setNavButtons] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    {
      about: true,
      experience: false,
      projects: false,
      contact: false,
    }
  );

  const setSlider = () => {
    setEvent(true);
    setNavButtons({
      about: true,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setEvent(true);
    const y = window.scrollY;
    if (y > 400 && y < 900) {
      setNavButtons({
        about: true,
        experience: false,
        projects: false,
        contact: false,
      });
    }
    if (y > 1300 && y < 1700) {
      setNavButtons({
        about: false,
        experience: true,
        projects: false,
        contact: false,
      });
    }
    if (y > 2000 && y < 2400) {
      setNavButtons({
        about: false,
        experience: false,
        projects: true,
        contact: false,
      });
    }
    if (y > 2800) {
      setNavButtons({
        about: false,
        experience: false,
        projects: false,
        contact: true,
      });
    }
  };

  return (
    <div className="App" id="mobile-home">
      <header className="App-header">
        <h1 id="landing-greeting">
          <TextLoop
            children={[
              "Hello",
              "Ciao",
              "你好",
              "Hola",
              "مرحبا",
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
      <Content clickOrScroll={clickOrScroll} navButtons={navButtons} />
    </div>
  );
};

export default App;
