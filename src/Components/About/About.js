import React, { useState, useEffect } from "react";
import Experience from "../Experience/Experience";
import Projects from "../Solutions/Solutions";
import Contact from "../Contact/Contact";
import { Link } from "react-scroll";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { skillsData } from "../../data/skillsData";
import SaadBResume from "../../assets/SaadBResume.pdf";
import Selfie from "../../assets/selfie.jpg";
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
  StyledComponentImg,
  Welcome,
} from "./styles";

export const About = ({ clickOrScroll, setClickOrScroll }) => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      if (!clickOrScroll) {
        setClickOrScroll(true);
      }
      const sectionOffsets = [300, 1200, 1900, 2700];
      const y = window.scrollY;

      const activeSectionIndex = sectionOffsets.findIndex(
        (offset, index) =>
          y > offset && y < (sectionOffsets[index + 1] || Infinity)
      );

      const sectionNames = ["about", "experience", "solutions", "contact"];
      setActiveSection(sectionNames[activeSectionIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="About">
      <Sticky top="#header" enabled={true} bottomBoundary="#about" innerZ={3}>
        <Header>
          <Link to="Landing" smooth={true} duration={500}>
            <HomeIcon icon={faHome} id="home" />
          </Link>
          <Link to="About" smooth={true} duration={500}>
            <NavButton active={activeSection === "about"}>About</NavButton>
          </Link>
          <Link to="Experience" smooth={true} duration={500}>
            <NavButton active={activeSection === "experience"}>
              Experience
            </NavButton>
          </Link>
          <Link to="Solutions" smooth={true} duration={500}>
            <NavButton active={activeSection === "solutions"}>
              Solutions
            </NavButton>
          </Link>
          <Link to="Contact" smooth={true} duration={500}>
            <NavButton active={activeSection === "contact"}>Contact</NavButton>
          </Link>
          <a href={SaadBResume} target="_blank" rel="noopener noreferrer">
            <NavButton active={false}>Resume</NavButton>
          </a>
        </Header>
      </Sticky>
      <Main>
        <LeftContainer>
          <ProfileIcon src={Selfie} alt="Selfie of Saad B." />
          <Flex>
            <Paragraph>
              <Welcome>Welcome</Welcome>, and thank you for stopping by. I'm a
              Denver based Front End Engineer who is passionate about building
              thoughtful, intuitive, and dynamic UIs. My favorite languages are
              TypeScript and JavaScript. My favorite frameworks are React and
              Vue.js.
              <br />
              <br />
              When I'm not coding, you can find me teaching Philosophy,
              traveling the world, hiking, walking my dog, Gizmo, reading,
              watching the NBA, and practicing photography.
              <br />
              <br />
              You can learn more about where I've worked and the solutions I've
              built by viewing my Experience and Solutions pages.
            </Paragraph>
          </Flex>
        </LeftContainer>
        <RightContainer>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillContainer clickOrScroll={clickOrScroll}>
            {skillsData.map((skill) => (
              <SkillCard key={skill.title}>
                {skill.title !== "Styled components" ? (
                  <a href={skill.url} target="_blank" rel="noreferrer">
                    <StyledImg src={skill.img} alt={skill.alt} />
                  </a>
                ) : (
                  <a href={skill.url} target="_blank" rel="noreferrer">
                    <StyledComponentImg src={skill.img} alt={skill.alt} />
                  </a>
                )}
                {skill.title !== "Styled components" && (
                  <SkillText>{skill.title}</SkillText>
                )}
              </SkillCard>
            ))}
          </SkillContainer>
        </RightContainer>
      </Main>
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default About;
