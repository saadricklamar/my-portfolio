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
      <main>
        <section>
        <div class="rhombus-outter">
          <div class="rhombus">
            <img
              src={require("../../me.jpg")}
              alt="me at Niagara Falls"
              width="255"
              height="320"
            />
          </div>
        </div>
        <h2>About Me</h2>
        <p>
          I'm a full-stack web developer with a background in teaching and
          client management. After teaching all things philosophy, I decided to
          put my passion for theoretical logic to work. I enrolled in the
          longest and most challenging bootcamp west of the Mississippi, and
          after 7 months of hard work, I'm loving building full-stack web
          applications.
          <br />
          <br /> As a Colorado Native, I enjoy hiking, traveling, and
          photography. When I'm not out exploring, you can find me reading,
          writing fiction, watching the NBA, doing puzzles, and walking my dog,
          Sophie.
        </p>
        </section>
        <setion>
        </setion>
      </main>
      
    </div>
  );
}

export default Content;
