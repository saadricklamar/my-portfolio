import React from "react";
import Experience from "../Experience/Experience";
import Projects from "../Solutions/Solutions";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Contact from "../Contact/Contact";
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
  StyledComponentImg,
  Welcome,
} from "./styles";

export const Content = ({ clickOrScroll, navButtons }) => {
  return (
    <div className="content" id="mobile-about">
      <Sticky top="#header" enabled={true} bottomBoundary="#content" innerZ={3}>
        <Header>
          <Link to="App" smooth={true} duration={300}>
            <HomeIcon icon={faHome} id="home" />
          </Link>
          <Link to="content" smooth={true} duration={300}>
            <NavButton active={navButtons.about}>About</NavButton>
          </Link>
          <Link to="Experience" smooth={true} duration={300}>
            <NavButton active={navButtons.experience}>Experience</NavButton>
          </Link>
          <Link to="solutions" smooth={true} duration={300}>
            <NavButton active={navButtons.solutions}>Solutions</NavButton>
          </Link>
          <Link to="contact-page" smooth={true} duration={300}>
            <NavButton active={navButtons.contact}>Contact</NavButton>
          </Link>
          <a
            href={require("../../assets/SaadBResume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavButton active={false}>Resume</NavButton>
          </a>
        </Header>
      </Sticky>
      <Main>
        <LeftContainer>
          <ProfileIcon src={require("../../assets/selfie.jpg")} alt="Avatar" />
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
              traveling the world, hiking, walking my dog, Gizmo, and practicing
              photography, which you can view <PhotoGallery />.
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
                src={require("../../assets/redux.svg").default}
                alt="Redux logo"
              />
              <SkillText>Redux</SkillText>
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
              <StyledComponentImg
                src={require("../../assets/styled-components.svg").default}
                alt="Styled components logo"
              />
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/jquery.svg").default}
                alt="Jquery logo"
              />
              <SkillText>jQuery</SkillText>
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
                src={require("../../assets/enzyme.png")}
                alt="Enzyme logo"
              />
              <SkillText>Enzyme</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/cypress.jpeg")}
                alt="Cypress logo"
              />
              <SkillText>Cypress</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/playwright.svg").default}
                alt="Playwright logo"
              />
              <SkillText>Playwright</SkillText>
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
                src={require("../../assets/node.svg").default}
                alt="Node.js logo"
              />
              <SkillText>Node.js</SkillText>
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
                src={require("../../assets/multi-tasker.svg").default}
                alt="Person with many hands symbolizing being a multi-tasker"
              />
              <SkillText>Multi-tasker</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/positive.svg").default}
                alt="Brain thinking smiley face icon symbolizing being positive"
              />
              <SkillText>Positive</SkillText>
            </SkillCard>
            <SkillCard>
              <StyledImg
                src={require("../../assets/listening.svg").default}
                alt="Brain thinking smiley face icon symbolizing being positive"
              />
              <SkillText>Listener</SkillText>
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
