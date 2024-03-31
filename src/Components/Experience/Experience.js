import React, { useState } from "react";
import ComputerIcon from "../../assets/computer.svg";
import { experienceData } from "../../data/experienceData";
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
  const [focus, setFocus] = useState("imaige");

  const handleClick = (id) => {
    setFocus(id);
  };

  const currentExperience = experienceData.find((exp) => exp.id === focus);

  return (
    <Main className="Experience" id="mobile-experience">
      <section>
        <Header>
          <StyledImg src={ComputerIcon} alt="Desktop computer icon" />{" "}
          <h1>Where I've Worked</h1>
        </Header>
        <WorkCard>
          <ButtonContainer>
            {experienceData.map((exp) => (
              <LogoButton
                key={exp.id}
                id={exp.id}
                focus={focus === exp.id}
                onClick={() => handleClick(exp.id)}
              >
                <StyledImg src={exp.logo} alt={`${exp.company} logo`} />
                <Triangle focus={focus === exp.id} />
              </LogoButton>
            ))}
          </ButtonContainer>
          <section>
            <WorkSection>
              <JobTitle>
                {currentExperience.jobTitle}{" "}
                <Span>
                  @{" "}
                  <Link href={currentExperience.website} target="blank">
                    {currentExperience.company}
                  </Link>
                </Span>
                <br />
                <Date>{currentExperience.date}</Date>
              </JobTitle>
              <ListContainer>
                {currentExperience.responsibilities.map(
                  (responsibility, index) => (
                    <ListItem key={index}>
                      {responsibility.includes(
                        "Teaching the following courses"
                      ) ? (
                        <>
                          Teaching the following courses:
                          <ul>
                            {currentExperience.courses.map((course, index) => (
                              <li key={index}>{course}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        responsibility
                      )}
                    </ListItem>
                  )
                )}
              </ListContainer>
            </WorkSection>
          </section>
        </WorkCard>
      </section>
    </Main>
  );
};

export default Experience;
