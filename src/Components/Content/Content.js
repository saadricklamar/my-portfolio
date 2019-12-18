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
        <button className="nav-buttons">About</button>
        <button className="nav-buttons">Skills</button>
        <button className="nav-buttons">Projects</button>
        <button className="nav-buttons">Contact</button>
      </header>
      <main></main>
    </div>
  );
}

export default Content;
