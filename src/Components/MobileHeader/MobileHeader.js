import React, { useState } from "react";
import "./MobileHeader.scss";
import Sticky from "react-stickynode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function MobileHeader() {
  let [dropDown, toggle] = useState("0px");

  const handleClick = () => {
    dropDown === "0px" ? toggle("290px") : toggle("0px");
  };

  return (
    <Sticky top="#header" enabled={true} bottomBoundary="#content" innerZ={3}>
      <header className="mobile-header">
        <a href="#mobile-home" className="logo" onClick={handleClick}>
          <FontAwesomeIcon icon={faHome} className="home-icon" />
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          onClick={handleClick}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ maxHeight: `${dropDown}` }}>
          <li>
            <a href="#mobile-about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#mobile-experience" onClick={handleClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#mobile-projects" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#mobile-contact" onClick={handleClick}>
              Contact
            </a>
          </li>
          <li>
            <a
              href={require("../../assets/SaadBaradanResume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-resume"
              onClick={handleClick}
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
