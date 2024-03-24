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
    zillow: false,
    ccco: false,
  });

  useEffect(() => {
    setFocus({ imaige: true });
  }, []);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    setFocus({
      imaige: id === "imaige",
      loyal: id === "loyal",
      iqgeo: id === "iqgeo",
      zillow: id === "zillow",
      ccco: id === "ccco",
    });
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
        <Date>Jan 2022 - Oct 2023</Date>
      </JobTitle>
      <ListContainer>
        <ListItem>
          Utilize TypeScript, Styled Components, and React to build new
          features, fix bugs, and re-factor codebases
        </ListItem>
        <ListItem>
          Use Storybook to build a library of reusable UI components
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
          <Date>Jan 2020 - Jan 2022</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Utilize Vanilla JavaScript, jQuery, & React to build out new
            features and fix bugs
          </ListItem>
          <ListItem>
            Use Python, Psycopg2, & PostgreSQL to build and enhance RESTful APIs
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
          <Date>Jul 2017 - Present, (Part-time)</Date>
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
              Imaige
            </Link>
          </Span>
          <br />
          <Date>November 2023 - Present</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Lead Frontend development of Imaige AI’s desktop & web client
            applications using TypeScript, React, & Electron
          </ListItem>
          <ListItem>
            Utilize TypeScript, Tailwind CSS, & StencilJS to build Google Chrome
            extensions
          </ListItem>
          <ListItem>
            Configure, sign, and publish Mac and Windows client desktop builds
            for bi-weekly production releases
          </ListItem>
          <ListItem>
            Use Bitbucket & YAML to build & manage Frontend build pipelines
          </ListItem>
          <ListItem>
            Collaborate with a cross-functional team of QA, Back End, and AI
            engineers on a daily basis
          </ListItem>
          <ListItem>
            Work with designers to review and implement Figma designs
          </ListItem>
          <ListItem>
            Mentor Junior engineers by onboarding them and doing weekly paired
            programming sessions
          </ListItem>
          <ListItem>
            Use Jira to manage and resolve new feature and bug tickets in a
            timely manner
          </ListItem>
        </ListContainer>
      </WorkSection>
    );
  } else if (focus.zillow) {
    workSection = (
      <WorkSection>
        <JobTitle>
          Client Engagement Specialist{" "}
          <Span>
            @{" "}
            <Link href="https://www.zillow.com" target="blank">
              Zillow
            </Link>
          </Span>
          <br />
          <Date>September 2015 - January 2019</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Provide customer service outreach to consumers seeking real estate
            via phone, text, and email
          </ListItem>
          <ListItem>
            Coach real estate agents on the products, tools, and services
            provided by Zillow Group
          </ListItem>
          <ListItem>
            Use CRM’s such as Salesforce and Big Purple Dot to manage Zillow
            Group clients
          </ListItem>
          <ListItem>
            Recruit and interview real estate agents for advertising
            opportunities
          </ListItem>
          <ListItem>
            Host office hours and tutoring sessions through zoom
          </ListItem>
          <ListItem>
            Top productivity and metric performer for entire tenure qualifying
            for every max quarterly bonus
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
            <LogoButton focus={focus.ccco} onClick={handleClick} id="ccco">
              <StyledImg
                src={require("../../assets/cccslogo.png")}
                alt="CCCS logo"
              />
              <Triangle focus={focus.ccco} />
            </LogoButton>
            <LogoButton focus={focus.zillow} onClick={handleClick} id="zillow">
              <StyledImg
                src={require("../../assets/zillow.png")}
                alt="zillow logo"
              />
              <Triangle focus={focus.zillow} />
            </LogoButton>
          </ButtonContainer>
          <section>{workSection}</section>
        </WorkCard>
      </section>
    </Main>
  );
};

export default Experience;
