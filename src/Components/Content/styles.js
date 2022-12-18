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
  color: white;
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

  &:focus {
    color: #f82a7b;
  }
`;

// Containers //

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;

  min-height: 100vh;
  background: #f7f7f5;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
`;

export const LeftContainer = styled.section`
  width: 100%;
  background: #fffcf7;
`;

export const RightContainer = styled.section`
  width: 70%;
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
  font-size: 1.1rem;
  width: 70%;
  font-weight: 500;
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
  -webkit-animation-delay: 1s;
  animation: slide 0.5s forwards;
  animation-delay: 1s;
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
  font-size: 20px;
  font-weight: 600;
  color: #282c34;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 82px;
  height: 82px;
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
  font-size: 12px;
  margin: 0px;
  font-weight: 600;
`;

export const StyledImg = styled.img`
  margin: 10px auto 2px auto;
  height: 50px;
  width: 50px;
`;
