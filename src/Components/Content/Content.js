import React from "react";
import "./Content.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Content() {
  return (
    <div className="content">
      <header className="content-header">
        <Link to="App" smooth={true} duration={1000}>
          <FontAwesomeIcon icon={faHome} className="home-icon" />
        </Link>
        <h2>About</h2>

        <h2>Skills</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </header>
      <main></main>
    </div>
  );
}

export default Content;
