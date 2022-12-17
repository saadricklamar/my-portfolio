import React from "react";
import "./Content.scss";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Contact from "../Contact/Contact";
import MobileHeader from "../MobileHeader/MobileHeader";
import { Link, animateScroll as scroll } from "react-scroll";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Sticky from "react-stickynode";
import {
  Flex,
  Header,
  HomeIcon,
  Main,
  NavButton,
  ProfileIcon,
  LeftContainer,
  RightContainer,
  Paragraph,
  Welcome,
} from "./styles";

function Content() {
  return (
    <div className="content" id="mobile-about">
      <MobileHeader />
      <Sticky top="#header" enabled={true} bottomBoundary="#content" innerZ={3}>
        <Header>
          <Link to="App" smooth={true} duration={300}>
            <HomeIcon icon={faHome} />
          </Link>
          <Link to="content" smooth={true} duration={300}>
            <NavButton id="about">About</NavButton>
          </Link>
          <Link to="Experience" smooth={true} duration={300}>
            <NavButton id="experience">Experience</NavButton>
          </Link>
          <Link to="Skills" smooth={true} duration={300}>
            <NavButton id="skills">Skills</NavButton>
          </Link>
          <Link to="projects" smooth={true} duration={300}>
            <NavButton id="project">Projects</NavButton>
          </Link>
          <Link to="contact-page" smooth={true} duration={300}>
            <NavButton id="contact">Contact</NavButton>
          </Link>
          <a
            href={require("../../assets/SaadBaradanResume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavButton id="resume">Resume</NavButton>
          </a>
        </Header>
      </Sticky>
      <Main>
        <LeftContainer>
          <ProfileIcon src={require("../../assets/selfie.jpg")} alt="Avatar" />
          <Flex>
            <Paragraph>
              <Welcome>Welcome</Welcome>, and thank you for stopping by. I'm a
              Front End Engineer with a passion for building fluid, intuitive,
              and dynamic UIs. My favorite languages are TypeScript and
              JavaScript. My favorite frameworks are React and Vue.js.
              {/* <a href="https://reactjs.org/" target="blank" id="react-link">
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
              </a> */}
              <br />
              <br /> When I'm not coding, you can find me hiking, camping,
              reading, watching the NBA, walking my dog, Gizmo, and practicing
              photography, which you can view by clicking <PhotoGallery />.
              <br />
              <br />
              You can learn more about me by viewing my Experience, Skills,
              Projects, and Resume pages.
            </Paragraph>
          </Flex>
        </LeftContainer>

        <RightContainer>
          <p>Skills</p>
        </RightContainer>
        {/* <section className="main-content">
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
                practicing photography, which you can view by clicking{" "}
                <PhotoGallery />.
              </p>
            </div>
          </section>
          <p id="white-sands-caption">
            White Sands National Monument, New Mexico
          </p>
        </section> */}
      </Main>

      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
