import React, { useState } from "react";
import About from "../About/About";
import { Link } from "react-scroll";
import TextLoop from "react-text-loop";
import {
  LandingContainer,
  LandingHeader,
  Name,
  LandingButton,
  GlobalStyle,
} from "./styles";

export const Landing = () => {
  const [clickOrScroll, setClickOrScroll] = useState(false);

  return (
    <LandingContainer id="Landing">
      <GlobalStyle />
      <LandingHeader>
        <h1>
          <TextLoop
            children={[
              "Hello",
              "Ciao",
              "你好",
              "Hola",
              "مرحبا",
              "Sveiki",
              "नमस्ते",
              "Hej",
            ]}
            interval={1500}
            adjustingSpeed={500}
            springConfig={{ stiffness: 70, damping: 15 }}
            mask={true}
          />
          , I'm <Name>Saad Baradan</Name>.
          <br />
          I'm a Frontend Engineer.
        </h1>

        <Link to="About" smooth={true} duration={500}>
          <LandingButton onClick={() => setClickOrScroll(true)}>
            View my work
          </LandingButton>
        </Link>
      </LandingHeader>
      <About
        clickOrScroll={clickOrScroll}
        setClickOrScroll={setClickOrScroll}
      />
    </LandingContainer>
  );
};

export default Landing;
