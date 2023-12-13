import React, { useEffect, useReducer, useState } from "react";
import {
  Main,
  Container,
  Card,
  Image,
  Overlay,
  ProjectName,
  TechUsed,
  Button,
  Nav,
  NavButton,
} from "./styles";

export const Solutions = () => {
  const [cards, setCards] = useState();
  const [navButtons, setNavButtons] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    {
      all: true,
      loyal: false,
      iqgeo: false,
      imaigeAI: false,
    }
  );

  const careData = (
    <Card>
      <Image
        src={require("../../assets/care-data.png")}
        alt="Loyal's data management application"
      />
      <Overlay className="overlay">
        <ProjectName>Care Data</ProjectName>
        <TechUsed>React / TypeScript</TechUsed>
        <a
          href="https://loyalhealth.com/data-management/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>VIEW SOLUTION</Button>
        </a>
      </Overlay>
    </Card>
  );

  const careSearch = (
    <Card>
      <Image
        src={require("../../assets/care-search.png")}
        alt="Loyal's care search application"
      />
      <Overlay className="overlay">
        <ProjectName>Care Search</ProjectName>
        <TechUsed>React / TypeScript</TechUsed>
        <a
          href="https://loyalhealth.com/care-search/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>VIEW SOLUTION</Button>
        </a>
      </Overlay>
    </Card>
  );

  const inspectionSurvey = (
    <Card>
      <Image
        src={require("../../assets/iqgeo-inspection-survey.png")}
        alt="IQGeo's inspection & survey application"
      />
      <Overlay className="overlay">
        <ProjectName>Inspection & Survey</ProjectName>
        <TechUsed>JavaScript / jQuery</TechUsed>
        <a
          href="https://www.iqgeo.com/product/inspection-survey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>VIEW SOLUTION</Button>
        </a>
      </Overlay>
    </Card>
  );

  const workflowManager = (
    <Card>
      <Image
        src={require("../../assets/workflow-manager.png")}
        alt="IQGeo's workflow manager application."
      />
      <Overlay className="overlay">
        <ProjectName>Workflow Manager</ProjectName>
        <TechUsed>React / JavaScript</TechUsed>
        <a
          href="https://www.iqgeo.com/product/workflow-manager"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>VIEW SOLUTION</Button>
        </a>
      </Overlay>
    </Card>
  );

  const revenueOptimizer = (
    <Card>
      <Image
        src={require("../../assets/revenue-optimizer.png")}
        alt="IQGeo's network revenue optimizer application"
      />
      <Overlay className="overlay">
        <ProjectName>Network Revenue Optimizer</ProjectName>
        <TechUsed>JavaScript / jQuery</TechUsed>
        <a
          href="https://www.iqgeo.com/product/network-revenue-optimizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>VIEW SOLUTION</Button>
        </a>
      </Overlay>
    </Card>
  );

  const imaigeAI = (
    <Card>
      <Image
        src={require("../../assets/imaige-ai.png")}
        alt="Imaige AI application"
      />
      <Overlay className="overlay">
        <ProjectName>Imaige AI</ProjectName>
        <TechUsed>Ionic / Stencil / TypeScript</TechUsed>
        <a
          href="https://imaige.com/products/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>VIEW SOLUTION</Button>
        </a>
      </Overlay>
    </Card>
  );

  useEffect(() => {
    setCards(
      <Container>
        {imaigeAI}
        {careData}
        {careSearch}
        {inspectionSurvey}
        {workflowManager}
        {revenueOptimizer}
      </Container>
    );
  }, []);

  const handleClick = (e) => {
    const id = e.currentTarget.id;
    if (id === "all") {
      setNavButtons({ all: true, loyal: false, iqgeo: false, imaigeAI: false });
      setCards(
        <Container>
          {imaigeAI}
          {careData}
          {careSearch}
          {inspectionSurvey}
          {workflowManager}
          {revenueOptimizer}
        </Container>
      );
    }
    if (id === "loyal") {
      setNavButtons({ all: false, loyal: true, iqgeo: false, imaigeAI: false });
      setCards(
        <Container>
          {careData}
          {careSearch}
        </Container>
      );
    }
    if (id === "iqgeo") {
      setNavButtons({ all: false, loyal: false, iqgeo: true, imaigeAI: false });
      setCards(
        <Container>
          {inspectionSurvey}
          {workflowManager}
          {revenueOptimizer}
        </Container>
      );
    }
    if (id === "imaige-ai") {
      setNavButtons({ all: false, loyal: false, iqgeo: false, imaigeAI: true });
      setCards(<Container>{imaigeAI}</Container>);
    }
  };

  return (
    <Main className="solutions">
      <Nav>
        <NavButton id="all" onClick={handleClick} active={navButtons.all}>
          All
        </NavButton>
        <NavButton
          id="imaige-ai"
          onClick={handleClick}
          active={navButtons.imaigeAI}
        >
          Imaige
        </NavButton>
        <NavButton id="loyal" onClick={handleClick} active={navButtons.loyal}>
          Loyal
        </NavButton>
        <NavButton id="iqgeo" onClick={handleClick} active={navButtons.iqgeo}>
          IQGeo
        </NavButton>
      </Nav>
      {cards}
    </Main>
  );
};

export default Solutions;
