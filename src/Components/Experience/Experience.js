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
import "./Experience.scss";

const Experience = () => {
  let [loyal, FocusLoyal] = useState(false);
  let [iqgeo, FocusIqGeo] = useState(false);
  let [zillow, FocusZillow] = useState(false);

  useEffect(() => {
    FocusLoyal(true);
  }, []);

  const handleClick = (e) => {
    const id = e.currentTarget.id;
    if (id === "loyal") {
      FocusLoyal(true);
      FocusIqGeo(false);
      FocusZillow(false);
    } else if (id === "iqgeo") {
      FocusIqGeo(true);
      FocusLoyal(false);
      FocusZillow(false);
    } else {
      FocusZillow(true);
      FocusIqGeo(false);
      FocusLoyal(false);
    }
  };

  let workSection = (
    <WorkSection>
      <JobTitle>
        Front End Engineer{" "}
        <Span>
          @{" "}
          <Link href="https://loyalhealth.com/" target="blank">
            Loyal Health
          </Link>
        </Span>
        <br />
        <Date>January 2022 - Present</Date>
      </JobTitle>
      <ListContainer>
        <ListItem>
          Utilize TypeScript, React, & Cypress to build out new features,
          troubleshoot bugs, and re-factor codebase
        </ListItem>
        <ListItem>
          Communicate & collaborate with multi-disciplinary teams of engineers,
          designers, and product managers on a daily basis
        </ListItem>
        <ListItem>
          Help drive technical and design direction for consumer facing
          applications used by dozens of health systems
        </ListItem>
        <ListItem>
          Provide mentorship to summer interns through weekly meetings and pair
          programming sessions to better understand software engineering
          practices and principles
        </ListItem>
        <ListItem>
          Drive implementation of Micro-Frontend Architecture for numerous
          consumer facing applications
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
          <Date>January 2020 - January 2022</Date>
        </JobTitle>
        <ListContainer>
          <ListItem>
            Utilize JavaScript, HTML5/CSS3, & React to enhance GUIs and build
            out new features
          </ListItem>
          <ListItem>
            Use UX/UI tools such as Adobe and Figma to create various design
            documents in collaboration with managers & clients
          </ListItem>
          <ListItem>
            Utilize Python & PostgreSQL to bring in new data and enhance Back
            End functionality
          </ListItem>
          <ListItem>
            Use Linux to develop, test, and deploy software to various
            environments (QA, STG, & PROD)
          </ListItem>
          <ListItem>
            Use FogBugz & Jira to track, troubleshoot, and resolve bugs for
            clients in a timely manner
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
          <Date>September 2015 - January 2019</Date>
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
            Top productivity and metric performer for entire tenure qualifying
            for every bonus
          </ListItem>
          <ListItem>
            Use CRM's such as Salesforce and Big Purple dot to manage Zillow
            clients
          </ListItem>
          <ListItem>
            Recruit and interview real estate agents for advertising
            opportunities
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
