import React, { useEffect, useReducer, useState } from "react";
import {
  Main,
  Container,
  Card,
  Image,
  Overlay,
  ProjectName,
  Button,
  Header,
  NavButton,
} from "./styles";

export const Projects = () => {
  const [cards, setCards] = useState();
  const [navButtons, setNavButtons] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    {
      all: true,
      react: false,
      vue: false,
      node: false,
    }
  );

  const cycleCity = (
    <Card>
      <Image
        src={require("../../assets/cycle-city.png")}
        alt="Home page of Cycle City Project"
        className="project-image"
      />
      <Overlay className="overlay">
        <ProjectName>Cycle City</ProjectName>
        <a
          href="https://github.com/saadricklamar/cycle-city"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>LEARN MORE</Button>
        </a>
      </Overlay>
    </Card>
  );

  const harvardArt = (
    <Card>
      <Image
        src={require("../../assets/harvard-art.png")}
        alt="Home page of Harvard Art Museum Project"
      />
      <Overlay className="overlay">
        <ProjectName>Harvard Art Museum</ProjectName>
        <a
          href="https://github.com/saadricklamar/harvard-art"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>LEARN MORE</Button>
        </a>
      </Overlay>
    </Card>
  );

  const vueCalculator = (
    <Card>
      <Image
        src={require("../../assets/vue-calculator.png")}
        alt="Home page of Vue Calculator project"
      />
      <Overlay className="overlay">
        <ProjectName>Vue Calculator</ProjectName>
        <a
          href="https://github.com/saadricklamar/vue-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>LEARN MORE</Button>
        </a>
      </Overlay>
    </Card>
  );

  const movieTracker = (
    <Card>
      <Image
        src={require("../../assets/movie-tracker.png")}
        alt="Home page of Movie Tracker project"
      />
      <Overlay className="overlay">
        <ProjectName>Movie Tracker</ProjectName>
        <a
          href="https://github.com/saadricklamar/movie-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>LEARN MORE</Button>
        </a>
      </Overlay>
    </Card>
  );

  const shakesBeer = (
    <Card>
      <Image
        src={require("../../assets/shakesbeer.png")}
        alt="Home page of Shakesbeer project"
      />
      <Overlay className="overlay">
        <ProjectName>ShakesBeer</ProjectName>
        <a
          href="https://github.com/saadricklamar/shakesbeer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>LEARN MORE</Button>
        </a>
      </Overlay>
    </Card>
  );

  const philosophersBackEnd = (
    <Card>
      <Image
        src={require("../../assets/philosophers.png")}
        alt="Philosophers Restful API"
      />
      <Overlay className="overlay">
        <ProjectName>Philosophers Back-End</ProjectName>
        <a
          href="https://github.com/saadricklamar/philosophers-backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Learn More</Button>
        </a>
      </Overlay>
    </Card>
  );

  useEffect(() => {
    setCards(
      <Container>
        {cycleCity}
        {harvardArt}
        {vueCalculator}
        {movieTracker}
        {shakesBeer}
        {philosophersBackEnd}
      </Container>
    );
  }, []);

  const handleClick = (e) => {
    const id = e.currentTarget.id;
    if (id === "all") {
      setNavButtons({ all: true, react: false, vue: false, node: false });
      setCards(
        <Container>
          {cycleCity}
          {harvardArt}
          {vueCalculator}
          {movieTracker}
          {shakesBeer}
          {philosophersBackEnd}
        </Container>
      );
    }
    if (id === "react") {
      setNavButtons({ all: false, react: true, vue: false, node: false });
      setCards(
        <Container>
          {cycleCity}
          {movieTracker}
          {shakesBeer}
        </Container>
      );
    }
    if (id === "vue") {
      setNavButtons({ all: false, react: false, vue: true, node: false });
      setCards(
        <Container>
          {harvardArt}
          {vueCalculator}
        </Container>
      );
    }
    if (id === "node") {
      setNavButtons({ all: false, react: false, vue: false, node: true });
      setCards(<Container>{philosophersBackEnd}</Container>);
    }
  };

  return (
    <Main className="projects">
      <Header>
        <NavButton id="all" onClick={handleClick} active={navButtons.all}>
          All
        </NavButton>
        <NavButton id="react" onClick={handleClick} active={navButtons.react}>
          React
        </NavButton>
        <NavButton id="vue" onClick={handleClick} active={navButtons.vue}>
          Vue.js
        </NavButton>
        <NavButton id="node" onClick={handleClick} active={navButtons.node}>
          Node.js
        </NavButton>
      </Header>
      {cards}
    </Main>
  );
};

export default Projects;
