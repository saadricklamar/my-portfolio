import React from "react";
import "./Content.scss";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Contact from "../Contact/Contact";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Sticky from "react-stickynode";

function Content() {
  return (
    <div className="content">
      <Sticky top="#header" bottomBoundary="#content">
        <header className="content-header">
          <Link to="App" smooth={true} duration={1000}>
            <FontAwesomeIcon icon={faHome} className="home-icon" />
          </Link>
          <Link to="content" smooth={true} duration={1000}>
            <button className="nav-buttons" id="about">
              About
            </button>
          </Link>
          <Link to="Skills" smooth={true} duration={1000}>
            <button className="nav-buttons" id="skills">
              Skills
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={1000}>
            <button className="nav-buttons" id="project">
              Projects
            </button>
          </Link>
          <Link to="contact-page" smooth={true} duration={1000}>
            <button className="nav-buttons" id="contact">
              Contact
            </button>
          </Link>
          <a href={require("../../assets/Resume.pdf")} target="_blank">
            <button className="nav-buttons" id="resume">
              Resume
            </button>
          </a>
        </header>
      </Sticky>
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
          <div className="p-about-me">
            <p>
              I'm a full-stack web developer who is passionate about building
              fluid, intuitive, and dynamic UIs.
              <br />
              <br /> As a Colorado native, I enjoy hiking, traveling, and
              photography.
              <br />
              <br /> When I'm not out exploring, you can find me reading,
              writing fiction, watching the NBA, doing puzzles, and walking my
              dog, Sophie.
            </p>
          </div>
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
                  className="grandby"
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
        <PhotoGallery />
        <FontAwesomeIcon icon={faCamera} className="camera-icon" />
      </main>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
