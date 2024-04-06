import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Header //
export const Header = styled.header`
  background-color: #282c34;
  border-bottom: 4px solid #17cddf;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  padding-right: 30%;
  height: 60px;

  @media (max-width: 1000px) {
    padding-right: 0%;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const HomeIcon = styled(FontAwesomeIcon)`
  color: white;
  padding-top: 90%;
  font-size: 1.3rem;

  &:hover {
    color: #f82a7b;
    cursor: pointer;
  }
`;

export const NavButton = styled.button`
  color: ${(props) => (props.active ? "#f82a7b" : "white")};
  font-size: 1.2rem;
  border: none;
  font-weight: bold;
  padding-top: 5px;
  background: none;
  outline: none;

  &:hover {
    color: #f82a7b;
    cursor: pointer;
  }
`;

// Containers //

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.section`
  width: 100%;
  background: white;
`;

export const RightContainer = styled.section`
  width: 70%;
  background: #17cddf;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Flex = styled.section`
  display: flex;
  justify-content: center;
`;

// Left Container

export const ProfileIcon = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: 70% 30%;
  border-radius: 50%;
  box-shadow: 0 0 3px 3px #17cddf;
  margin: 30px 0 10px 0;
`;

export const Welcome = styled.span`
  color: #f82a7cf1;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  text-align: left;
  font-size: 19px;
  width: 70%;
  font-weight: 500;
  white-space: break-spaces;
`;

// Right Container

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: relative;
  right: -600px;
  -webkit-animation: slide 0.5s backwards;
  -webkit-animation-delay: 0.5s;
  animation: slide 0.5s forwards;
  animation-delay: 0.5s;
  animation-play-state: ${(props) =>
    props.clickOrScroll ? "running" : "paused"};
  @-webkit-keyframes slide {
    100% {
      right: 0;
    }
  }

  @keyframes slide {
    100% {
      right: 0;
    }
  }
`;

export const SkillsTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: white;
  margin: 20px 0 10px 0;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;
  height: 90px;
  background: white;
  box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
  border: 1px solid #eee;
  border-radius: 15px;
  margin: 15px;
  &:hover {
    box-shadow: 0 10px 28px rgb(0 0 0 / 20%);
  }
`;

export const SkillText = styled.p`
  font-size: 14px;
  margin: 0px;
  font-weight: 600;
`;

export const StyledImg = styled.img`
  margin: 10px auto 2px auto;
  height: 50px;
  width: 50px;
`;

export const StyledComponentImg = styled.img`
  margin: 7px auto 5px auto;
  height: 75px;
  width: 75px;
`;
