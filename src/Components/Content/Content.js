import React from "react";
import "./Content.scss";
import Experience from "../Experience/Experience";
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
          <Link to="App" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faHome} className="home-icon" />
          </Link>
          <Link to="content" smooth={true} duration={500}>
            <button className="nav-buttons" id="about">
              About
            </button>
          </Link>
          <Link to="Experience" smooth={true} duration={500}>
            <button className="nav-buttons" id="experience">
              Experience
            </button>
          </Link>
          <Link to="Skills" smooth={true} duration={500}>
            <button className="nav-buttons" id="skills">
              Skills
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button className="nav-buttons" id="project">
              Projects
            </button>
          </Link>
          <Link to="contact-page" smooth={true} duration={500}>
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
        <section className="main-content">
          <PhotoGallery />
          <section className="details-content">
            <h1 className="welcome-greeting">Welcome,</h1>
            <div>
              <p className="about-me-details">
                I'm a Software Engineer with a passion for Front End
                Technologies. I enjoy building fluid, intuitive, and dynamic
                UIs. My favorite frameworks are{" "}
                <a href="https://reactjs.org/" target="blank" id="react-link">
                  {" "}
                  React
                </a>{" "}
                and
                <a href="https://vuejs.org/" target="blank" id="vue-link">
                  {" "}
                  Vue.js
                </a>
                . My favorite design tools are
                <a href="https://www.figma.com/" target="blank" id="figma-link">
                  {" "}
                  Figma
                </a>{" "}
                and{" "}
                <a href="https://www.canva.com/" target="blank" id="canva-link">
                  {" "}
                  Canva
                </a>
                . <br />
                <br /> When I'm not coding, you can find me hiking , camping ,
                reading , watching the NBA, walking my dog , Gizmo , and
                practicing photography, which you can view by clicking the
                camera icon.
              </p>
            </div>
          </section>
        </section>
      </main>
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
