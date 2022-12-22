import React, { useEffect, useReducer } from "react";
import "./Content.scss";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Contact from "../Contact/Contact";
import MobileHeader from "../MobileHeader/MobileHeader";
import { Link } from "react-scroll";
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
  SkillCard,
  SkillContainer,
  SkillText,
  SkillsTitle,
  StyledImg,
  Welcome,
} from "./styles";

export const Content = ({ clickOrScroll, navButtons, setNavButtons }) => {
  const handleClick = (e) => {
    const id = e.currentTarget.id;
    id === "about"
      ? setNavButtons({ about: true })
      : setNavButtons({ about: false });
    id === "experience"
      ? setNavButtons({ experience: true })
      : setNavButtons({ experience: false });
    id === "project"
      ? setNavButtons({ projects: true })
      : setNavButtons({ projects: false });
    id === "contact"
      ? setNavButtons({ contact: true })
      : setNavButtons({ contact: false });
  };

  return (
    <div className="content" id="mobile-about">
      <MobileHeader />
      <Sticky top="#header" enabled={true} bottomBoundary="#content" innerZ={3}>
        <Header>
          <Link to="App" smooth={true} duration={300}>
            <HomeIcon icon={faHome} onClick={handleClick} id="home" />
          </Link>
          <Link to="content" smooth={true} duration={300}>
            <NavButton
              id="about"
              active={navButtons.about}
              onClick={handleClick}
            >
              About
            </NavButton>
          </Link>
          <Link to="Experience" smooth={true} duration={300}>
            <NavButton
              id="experience"
              active={navButtons.experience}
              onClick={handleClick}
            >
              Experience
            </NavButton>
          </Link>
          <Link to="projects" smooth={true} duration={300}>
            <NavButton
              id="project"
              active={navButtons.projects}
              onClick={handleClick}
            >
              Projects
            </NavButton>
          </Link>
          <Link to="contact-page" smooth={true} duration={300}>
            <NavButton
              id="contact"
              active={navButtons.contact}
              onClick={handleClick}
            >
              Contact
            </NavButton>
          </Link>
          <a
            href={require("../../assets/SaadBaradanResume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavButton id="resume" active={false}>
              Resume
            </NavButton>
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
              <br /> When I'm not coding, you can find me teaching philosophy,
              traveling the world with my wife, hiking, reading, walking my dog,
              Gizmo, and practicing photography, which you can view{" "}
              <PhotoGallery />.
              <br />
              <br />
              You can learn more about me by viewing my Experience, Projects,
              and Resume.
            </Paragraph>
          </Flex>
        </LeftContainer>
        <RightContainer>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillContainer clickOrScroll={clickOrScroll}>
            <SkillCard>
              <StyledImg
                src={require("../../assets/js.svg").default}
                alt="JavaScript logo"
              />
              <SkillText>JavaScript</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/ts.svg").default}
                alt="TypeScript logo"
              />
              <SkillText>TypeScript</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/react.svg").default}
                alt="React logo"
              />
              <SkillText>React</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/vue.svg").default}
                alt="Vue.js logo"
              />
              <SkillText>Vue.js</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/html.svg").default}
                alt="Html logo"
              />
              <SkillText>HTML</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/css.svg").default}
                alt="CSS logo"
              />
              <SkillText>CSS</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/sass.svg").default}
                alt="SASS logo"
              />
              <SkillText>SASS</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/webpack.svg").default}
                alt="Webpack logo"
              />
              <SkillText>Webpack</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/postgresql.svg").default}
                alt="Postgres SQL logo"
              />
              <SkillText>PostgreSQL</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/git.svg").default}
                alt="Git logo"
              />
              <SkillText>Git</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/linux.svg").default}
                alt="Linux logo"
              />
              <SkillText>Linux</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/circleci.svg").default}
                alt="Circle CI logo"
              />
              <SkillText>Circle CI</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/Jest.svg").default}
                alt="Jest logo"
              />
              <SkillText>Jest</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/empath.svg").default}
                alt="Hand sharing heart icon symbolizing empathy"
              />
              <SkillText>Empath</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/collaborative.svg").default}
                alt="Hands locked together icon symbolizing colloboration"
              />
              <SkillText>Collaborative</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/positive.svg").default}
                alt="Brain thinking smiley face icon symbolizing being positive"
              />
              <SkillText>Positive</SkillText>
            </SkillCard>
          </SkillContainer>
        </RightContainer>
      </Main>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Content;
