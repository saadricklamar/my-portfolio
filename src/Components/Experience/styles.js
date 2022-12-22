import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: white;
`;

export const Header = styled.header`
  display: flex;
  margin-top: 100px;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const StyledImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  &:focus {
    fill: purple;
  }
`;

export const WorkCard = styled.section`
  display: flex;
  flex-direction: row;
  width: 800px;
`;

export const ButtonContainer = styled.section`
  height: 300px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LogoButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Triangle = styled.div`
  height: 0;
  width: 0;
  border-left: ${(props) => (props.focus ? "20px solid #f82a7b" : "none")};
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-top: 20px solid transparent;
`;

export const JobTitle = styled.h3`
  margin: 20px 0 0 0;
`;

export const Link = styled.a`
  color: #f82a7b;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  color: #f82a7b;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: black;
  display: flex;
`;

export const WorkSection = styled.section`
  //background: #17cddf17;
  background: #17cddf2e;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 658px;
  margin: 0px 0 0 20px;
  border-radius: 5px;
  margin-top: 25px;
  padding: 0 0 10px 20px;
`;

export const ListContainer = styled.ul`
  text-align: left;
`;

export const ListItem = styled.li`
  list-style-type: disclosure-closed;
  margin: 5px;
`;
