import React, { useState } from "react";
import { solutions } from "../../data/solutionsData";
import {
  Button,
  Card,
  CardContainer,
  Image,
  Main,
  Nav,
  NavButton,
  Overlay,
  SolutionName,
  TechUsed,
} from "./styles";

export const Solutions = () => {
  const [navButtons, setNavButtons] = useState({
    all: true,
    imaigeAI: false,
    iqgeo: false,
    loyal: false,
  });

  const filteredSolutions = solutions.filter(
    (solution) => navButtons.all || navButtons[solution.company]
  );

  const handleClick = (id) => {
    setNavButtons((prevNavButtons) => ({
      ...prevNavButtons,
      all: id === "all",
      imaigeAI: id === "imaigeAI",
      iqgeo: id === "iqgeo",
      loyal: id === "loyal",
    }));
  };

  return (
    <Main id="Solutions">
      <Nav>
        <NavButton
          id="all"
          onClick={() => handleClick("all")}
          active={navButtons.all}
        >
          All
        </NavButton>
        <NavButton
          id="imaigeAI"
          onClick={() => handleClick("imaigeAI")}
          active={navButtons.imaigeAI}
        >
          Imaige
        </NavButton>
        <NavButton
          id="loyal"
          onClick={() => handleClick("loyal")}
          active={navButtons.loyal}
        >
          Loyal
        </NavButton>
        <NavButton
          id="iqgeo"
          onClick={() => handleClick("iqgeo")}
          active={navButtons.iqgeo}
        >
          IQGeo
        </NavButton>
      </Nav>
      <CardContainer>
        {filteredSolutions.map((solution) => (
          <Card key={solution.name}>
            <Image src={solution.imgSrc} alt={solution.alt} />
            <Overlay className="overlay">
              <SolutionName>{solution.name}</SolutionName>
              <TechUsed>{solution.techUsed}</TechUsed>
              <a href={solution.link} target="_blank" rel="noopener noreferrer">
                <Button>VIEW SOLUTION</Button>
              </a>
            </Overlay>
          </Card>
        ))}
      </CardContainer>
    </Main>
  );
};

export default Solutions;
