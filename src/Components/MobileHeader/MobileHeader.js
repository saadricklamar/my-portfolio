import React from "react";
import "./MobileHeader.scss";
import Sticky from "react-stickynode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function MobileHeader() {
  return (
    <Sticky top="#header" enabled={true} bottomBoundary="#content" innerZ={3}>
      <header className="mobile-header">
        <a href="#mobile-home" className="logo">
          <FontAwesomeIcon icon={faHome} className="home-icon" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#mobile-about">About</a>
          </li>
          <li>
            <a href="#mobile-skills">Skills</a>
          </li>
          <li>
            <a href="#mobile-projects">Projects</a>
          </li>
          <li>
            <a href="#mobile-contact">Contact</a>
          </li>
          <li>
            <a
              href={require("../../assets/SaadBaradanResume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </header>
    </Sticky>
  );
}

export default MobileHeader;
