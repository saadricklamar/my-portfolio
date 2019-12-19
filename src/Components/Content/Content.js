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
        <section className="left">
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
            client management. I am passionate about building fluid, intuitive, and dynamic
            UIs.
            <br />
            <br /> As a Colorado Native, I enjoy hiking, traveling, and
            photography.
            <br />
            <br /> When I'm not out exploring, you can find me reading, writing
            fiction, watching the NBA, doing puzzles, and walking my dog,
            Sophie.
          </p>
        </section>
        <section className="right">
          <div class="hexa">
            <div class="hex1">
              <div class="hex2">
                <img
                  src={require("../../assets/fall.jpeg")}
                  alt="Fall in Granby, Colorado"
                  width="350"
                  height="300"
                  className="nature"
                />
              </div>
            </div>
          </div>
          <div class="hexa" id="second-hex">
            <div class="hex1">
              <div class="hex2">
                <img
                  src={require("../../assets/dino.jpeg")}
                  alt="Dinosaur National Monument"
                  width="350"
                  height="300"
                  className="nature"
                />
              </div>
            </div>
          </div>
          <div class="hexa" id="third-hex">
            <div class="hex1">
              <div class="hex2">
                <img
                  src={require("../../assets/butte.jpeg")}
                  alt="Fall in Crested Butte, Colorado"
                  width="350"
                  height="300"
                  className="nature"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="browse">Browse My Photograpy</div>
      </main>
    </div>
  );
}

export default Content;
