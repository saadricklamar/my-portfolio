import React from "react";
import "./Content.scss";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Contact from "../Contact/Contact";
import MobileHeader from "../MobileHeader/MobileHeader";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Sticky from "react-stickynode";

function Content() {
  return (
    <div className="content" id="mobile-about">
      <MobileHeader />
      <Sticky top="#header" enabled={true} bottomBoundary="#content" innerZ={3}>
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
          <a
            href={require("../../assets/SaadBaradanResume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="nav-buttons" id="resume">
              Resume
            </button>
          </a>
        </header>
      </Sticky>
      <main>
        <section className="left">
          <div className="rhombus-outter">
            <div className="rhombus">
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
              I'm a Software Engineer with an emphasis on Front-End
              Technologies. I'm passionate about building fluid, intuitive, and
              dynamic UIs. I enjoy practicing Test Driven Development, mastering
              React and Vue.js, and learning new technologies.
              <br />
              <br /> As a Colorado native, I enjoy hiking, traveling, and
              photography.
              <br />
              <br /> When I'm not out exploring, you can find me reading,
              writing fiction, watching the NBA, doing puzzles, and walking my
              dog, Gizmo.
            </p>
          </div>
        </section>
        <section className="right">
          <div className="hexa">
            <div className="hex1">
              <div className="hex2">
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
          <div className="hexa" id="second-hex">
            <div className="hex1">
              <div className="hex2">
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
          <div className="hexa" id="third-hex">
            <div className="hex1">
              <div className="hex2">
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
      </main>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
