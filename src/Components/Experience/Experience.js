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
  let [loyal, focusLoyal] = useState(false);
  let [iqgeo, focusIqgeo] = useState(false);
  let [zillow, focusZillow] = useState(false);
  let [ccco, focusCcco] = useState(false);

  useEffect(() => {
    focusLoyal(true);
  }, []);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    if (id === "loyal") {
      focusLoyal(true);
      focusIqgeo(false);
      focusZillow(false);
      focusCcco(false);
    } else if (id === "iqgeo") {
      focusIqgeo(true);
      focusLoyal(false);
      focusZillow(false);
      focusCcco(false);
    } else if (id === "ccco") {
      focusCcco(true);
      focusIqgeo(false);
      focusLoyal(false);
      focusZillow(false);
    } else {
      focusZillow(true);
      focusIqgeo(false);
      focusLoyal(false);
      focusCcco(false);
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
        <Date>Jan 2022 - Oct 2023</Date>
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
          Use Cypress, Playwright, and Checkly to build out integration and unit
          tests
        </ListItem>
        <ListItem>
          Help drive technical and design direction for applications used by
          dozens of health systems
        </ListItem>
        <ListItem>
          Provide mentorship to summer interns throughly weekly check-ins and
          pair programming sessions
        </ListItem>
        <ListItem>
          Help implement Micro-Frontend Architecture to create a new unified
          Platform application
        </ListItem>
        <ListItem>
          Lead conversion of application codebase from JavaScript to TypeScript
        </ListItem>
      </ListContainer>
    </WorkSection>
  );

  if (iqgeo) {
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
            Utilize JavaScript, HTML/CSS, & React to build out new features and
            fix bugs
          </ListItem>
          <ListItem>
            Use Python & PostgreSQL to bring in new data and enhance back end
            functionality
          </ListItem>
          <ListItem>
            Implement various geospatial libraries like OpenLayers, Leaflet, &
            Turf.js
          </ListItem>
          <ListItem>
            Use Linux to develop, test, and deploy software to various
            environments (QA, STG, & PROD)
          </ListItem>
          <ListItem>
            Use Adobe and Figma to create various design documents in
            collaboration with clients
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
  } else if (ccco) {
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
          <Date>Jul 2017 - Aug 2023</Date>
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
  } else if (zillow) {
    workSection = (
      <WorkSection>
        <JobTitle>
          Client Engagement Specialist{" "}
          <Span>
            @{" "}
            <Link href="https://www.zillow.com/" target="blank">
              Zillow
            </Link>
          </Span>
          <br />
          <Date>Sep 2015 - Jan 2019</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Provide customer service outreach to consumers seeking real estate
            via phone, text, and email
          </ListItem>
          <ListItem>
            Coach real estate agents on the products, tools, and services
            provided by Zillow
          </ListItem>
          <ListItem>
            Use CRM's such as Salesforce and Big Purple dot to manage Zillow
            clients
          </ListItem>
          <ListItem>
            Recruit and interview real estate agents for advertising
            opportunities
          </ListItem>
          <ListItem>
            Top productivity and metric performer for entire tenure qualifying
            for every bonus
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
            <LogoButton focus={loyal} onClick={handleClick} id="loyal">
              <StyledImg
                src={require("../../assets/loyal.svg").default}
                alt="Working icon"
              />
              <Triangle focus={loyal} />
            </LogoButton>
            <LogoButton focus={iqgeo} onClick={handleClick} id="iqgeo">
              <StyledImg
                src={require("../../assets/iqgeo.svg").default}
                alt="Working icon"
              />
              <Triangle focus={iqgeo} />
            </LogoButton>
            <LogoButton focus={ccco} onClick={handleClick} id="ccco">
              <StyledImg
                src={require("../../assets/cccslogo.png")}
                alt="Working icon"
              />
              <Triangle focus={ccco} />
            </LogoButton>
            <LogoButton focus={zillow} onClick={handleClick} id="zillow">
              <StyledImg
                src={require("../../assets/zillow.svg").default}
                alt="Working icon"
              />
              <Triangle focus={zillow} />
            </LogoButton>
          </ButtonContainer>
          <section>{workSection}</section>
        </WorkCard>
      </section>
    </Main>
  );
};

export default Experience;
