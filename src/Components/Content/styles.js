import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Header //
export const Header = styled.header`
  background-color: #282c34;
  border-bottom: 4px solid #17cddf;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-evenly;
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
`;

export const LeftContainer = styled.section`
  width: 100%;
  background: #fffcf7;
`;

export const RightContainer = styled.section`
  width: 100%;
  //background: #17cddf;
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
