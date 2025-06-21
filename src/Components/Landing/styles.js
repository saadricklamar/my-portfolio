import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Titillium Web', sans-serif;
  }
`;
export const LandingContainer = styled.div`
  text-align: center;
  margin-bottom: 0;
`;

export const LandingHeader = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  justify-content: center;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 700px) {
    font-size: 1rem;
  }

  @media (max-width: 535px) {
    font-size: 0.7rem;
  }
`;

export const TextLoopContainer = styled.span`
  display: inline-block;
  width: 100px;
  text-align: right; 
`
export const Name = styled.span`
  color: #f82a7b;
`;

export const LandingButton = styled.button`
  background: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1.3rem;
  height: 50px;
  transition: all 1s ease;
  width: 180px;
  border-radius: 5px;

  &:after {
    -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: white;
    content: "↓";
    margin-left: 20px;
    opacity: 0;
    position: absolute;
  }

  &:hover:after {
    opacity: 1;
  }

  &:hover {
    background-color: #17cddf;
    border: none;
    cursor: pointer;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
    width: 230px;
    padding-right: 20px;
  }

  @media (max-width: 535px) {
    width: 150px;
    font-size: 1rem;
  }
`;
