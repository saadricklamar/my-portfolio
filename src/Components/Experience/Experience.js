import React, { useState } from "react";
import ComputerIcon from "../../assets/app-icons/computer.svg";
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
    <Main id="Experience">
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
              {currentExperience.jobTitle2 && (
                <>
                  <JobTitle style={{ display: "flex" }}>
                    {currentExperience.jobTitle2}{" "}
                    <Span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "5px",
                      }}
                    >
                      @{" "}
                      <Link
                        href={currentExperience.website}
                        target="blank"
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        {currentExperience.company},
                      </Link>
                      <Date>{currentExperience.date2}</Date>
                    </Span>
                  </JobTitle>
                  <p style={{ margin: "0px", fontSize: "14px" }}>
                    <span> - Previously Frontend Engineer </span> (
                    {currentExperience.date})
                  </p>
                </>
              )}
              {!currentExperience.jobTitle2 && (
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
              )}
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
