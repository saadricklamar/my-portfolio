import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  Date,
  Header,
  JobTitle,
  Link,
  ListContainer,
  ListItem,
  LogoButton,
  Main,
  Span,
  StyledImg,
  Triangle,
  WorkCard,
  WorkSection,
} from "./styles";

const Experience = () => {
  const [focus, setFocus] = useState({
    imaige: false,
    loyal: false,
    iqgeo: false,
    snhu: false,
    ccco: false,
  });

  useEffect(() => {
    setFocus({ imaige: true });
  }, []);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    if (id === "imaige") {
      setFocus({
        imaige: true,
        loyal: false,
        iqgeo: false,
        snhu: false,
        ccco: false,
      });
    } else if (id === "loyal") {
      setFocus({
        imaige: false,
        loyal: true,
        iqgeo: false,
        snhu: false,
        ccco: false,
      });
    } else if (id === "iqgeo") {
      setFocus({
        imaige: false,
        iqgeo: true,
        loyal: false,
        snhu: false,
        ccco: false,
      });
    } else if (id === "ccco") {
      setFocus({
        imaige: false,
        ccco: true,
        iqgeo: false,
        loyal: false,
        snhu: false,
      });
    } else {
      setFocus({
        imaige: false,
        snhu: true,
        iqgeo: false,
        loyal: false,
        ccco: false,
      });
    }
  };

  let workSection = (
    <WorkSection>
      <JobTitle>
        Software Engineer, Frontend{" "}
        <Span>
          @{" "}
          <Link href="https://loyalhealth.com/" target="blank">
            Loyal Health
          </Link>
        </Span>
        <br />
        <Date>Jan 2022 - Oct 2023, (Full-time)</Date>
      </JobTitle>
      <ListContainer>
        <ListItem>
          Utilize TypeScript and React to build new features, fix bugs, and
          re-factor codebases
        </ListItem>
        <ListItem>
          Communicate & collaborate with multi-disciplinary teams of engineers,
          designers, and product managers on a daily basis
        </ListItem>
        <ListItem>
          Deploy modern, performant, and maintainable code to production on a
          weekly basis
        </ListItem>
        <ListItem>
          Collaborate with backend engineers to analyze, troubleshoot, and
          consume RESTful APIs
        </ListItem>
        <ListItem>
          Work with designers to review, improve, and implement Figma designs
        </ListItem>
        <ListItem>
          Use Cypress & Playwright to build out integration and unit tests
        </ListItem>
        <ListItem>
          Develop a curriculum for summer interns and provide mentorship
          throughly weekly check-ins and pair programming sessions
        </ListItem>
        <ListItem>
          Troubleshoot production issues and provide status updates to
          stakeholders
        </ListItem>
        <ListItem>
          Lead team to being 1st to accomplish various tech debt initiatives
        </ListItem>
      </ListContainer>
    </WorkSection>
  );

  if (focus.iqgeo) {
    workSection = (
      <WorkSection>
        <JobTitle>
          Delivery Software Engineer{" "}
          <Span>
            @{" "}
            <Link href="https://www.iqgeo.com/" target="blank">
              IQGeo
            </Link>
          </Span>
          <br />
          <Date>Jan 2020 - Jan 2022, (Full-time)</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Utilize JavaScript, HTML/CSS, & React to build out new features and
            fix bugs
          </ListItem>
          <ListItem>
            Use Python & PostgreSQL to bring in new data and enhance back end
            functionality
          </ListItem>
          <ListItem>
            Use Linux to develop, test, and deploy software to various
            environments
          </ListItem>
          <ListItem>
            Work directly with clients to design, build, test, and deploy new
            features
          </ListItem>
          <ListItem>
            Manage and multi-task between 2-3 projects and client stakeholders
            at one time
          </ListItem>
          <ListItem>
            Implement various geospatial libraries like OpenLayers, Leaflet, &
            Turf.js
          </ListItem>
          <ListItem>
            Implement new installs of IQGeo products for clients
          </ListItem>
          <ListItem>
            Collaborate remotely with colleagues across US and international
            time zones
          </ListItem>
        </ListContainer>
      </WorkSection>
    );
  } else if (focus.ccco) {
    workSection = (
      <WorkSection>
        <JobTitle>
          Instructor of Philosophy{" "}
          <Span>
            @{" "}
            <Link href="https://cccs.edu/" target="blank">
              CCCS
            </Link>
          </Span>
          <br />
          <Date>Jul 2017 - Aug 2023, (Part-time)</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Teaching the following courses:
            <ul>
              <li>Intro to Logic (PHI 1013)</li>
              <li>Intro to Ethics (PHI 1012)</li>
              <li>Intro to Philosophy (PHI 1011)</li>
              <li>Environmental Ethics (PHI 2018)</li>
              <li>Business Ethics (PHI 2005)</li>
            </ul>
          </ListItem>
          <ListItem>
            Build course content including exercise sets, quizzes, essay
            assignments, syllabus, and discussions
          </ListItem>
          <ListItem>
            Utilizing academic CRM’s such as Desire2Learn & Blackboard Online
          </ListItem>
          <ListItem>
            Engaging in CCCO’s Course Development & Feedback Program
          </ListItem>
        </ListContainer>
      </WorkSection>
    );
  } else if (focus.imaige) {
    workSection = (
      <WorkSection>
        <JobTitle>
          Front End Engineer{" "}
          <Span>
            @{" "}
            <Link href="https://imaige.com/products/" target="blank">
              Imaige AI
            </Link>
          </Span>
          <br />
          <Date>December 2023 - Present, (Contract)</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Use TypeScript, React, & Electron to build new features for Imaige
            AI’s desktop application
          </ListItem>
          <ListItem>
            Configure, debug, and publish client builds to the Apple and
            Microsoft stores
          </ListItem>
          <ListItem>
            Use Bitbucket & YAML to manage Frontend build pipelines
          </ListItem>
          <ListItem>
            Utilize TypeScript & StencilJS to build and maintain Google Chrome
            extensions
          </ListItem>
          <ListItem>
            Mentor Junior engineers by onboarding them and doing weekly paired
            programming sessions
          </ListItem>
          <ListItem>
            Collaborate with a cross-functional team of QA, Back End, and AI
            engineers on a daily basis
          </ListItem>
          <ListItem>
            Use Jira to manage and resolve new feature and bug tickets in a
            timely manner
          </ListItem>
          <ListItem>
            Work with designers to review, improve, and implement Figma designs
          </ListItem>
        </ListContainer>
      </WorkSection>
    );
  } else if (focus.snhu) {
    workSection = (
      <WorkSection>
        <JobTitle>
          Instructor of Philosophy{" "}
          <Span>
            @{" "}
            <Link href="https://degrees.snhu.edu/" target="blank">
              SNHU
            </Link>
          </Span>
          <br />
          <Date>June 2023 - Present, (Part-time)</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Teaching the following online courses:
            <ul>
              <li>Ethics in Global Society (PHI 218)</li>
              <li>Ethical Decision-Making & Problem-Solving (PHI 260)</li>
            </ul>
          </ListItem>
          <ListItem>
            Utilize academic CRMs such as Desire2Learn & BrightSpace
          </ListItem>
          <ListItem>
            Build course content including announcements, diagrams, and video
            lectures
          </ListItem>
          <ListItem>
            Engage in continuing education seminars and trainings
          </ListItem>
          <ListItem>
            Host office hours and tutoring sessions through zoom
          </ListItem>
          <ListItem>
            Provide course construction feedback and improvements
          </ListItem>
        </ListContainer>
      </WorkSection>
    );
  }

  return (
    <Main className="Experience" id="mobile-experience">
      <section>
        <Header>
          <StyledImg
            src={require("../../assets/worked.svg").default}
            alt="Working icon"
          />{" "}
          <h1>Where I've Worked</h1>
        </Header>
        <WorkCard>
          <ButtonContainer>
            <LogoButton focus={focus.imaige} onClick={handleClick} id="imaige">
              <StyledImg
                src={require("../../assets/imaige.png")}
                alt="Imaige AI logo"
              />
              <Triangle focus={focus.imaige} />
            </LogoButton>
            <LogoButton focus={focus.loyal} onClick={handleClick} id="loyal">
              <StyledImg
                src={require("../../assets/loyal.svg").default}
                alt="Loyal Health logo"
              />
              <Triangle focus={focus.loyal} />
            </LogoButton>
            <LogoButton focus={focus.iqgeo} onClick={handleClick} id="iqgeo">
              <StyledImg
                src={require("../../assets/iqgeo.svg").default}
                alt="IQGeo logo"
              />
              <Triangle focus={focus.iqgeo} />
            </LogoButton>
            <LogoButton focus={focus.snhu} onClick={handleClick} id="snhu">
              <StyledImg
                src={require("../../assets/snhu.png")}
                alt="SNHU logo"
              />
              <Triangle focus={focus.snhu} />
            </LogoButton>
            <LogoButton focus={focus.ccco} onClick={handleClick} id="ccco">
              <StyledImg
                src={require("../../assets/cccslogo.png")}
                alt="CCCS logo"
              />
              <Triangle focus={focus.ccco} />
            </LogoButton>
          </ButtonContainer>
          <section>{workSection}</section>
        </WorkCard>
      </section>
    </Main>
  );
};

export default Experience;
