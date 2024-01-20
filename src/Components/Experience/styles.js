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
  @media (max-width: 420px) {
    justify-content: center;
  }
`;

export const StyledImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  &:focus {
    fill: purple;
  }
  @media (max-width: 420px) {
    height: 45px;
    width: 45px;
  }
`;

export const WorkCard = styled.section`
  display: flex;
  flex-direction: row;
  width: 800px;
  @media (max-width: 420px) {
    width: 350px;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.section`
  margin-top: 40px;
  height: 300px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 420px) {
    flex-direction: row;
    height: 100px;
    width: 350px;
    justify-content: flex-end;
    margin: 10px 0 0 20px;
  }
`;

export const LogoButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
  &#snhu {
    margin-left: -5px;
    margin-bottom: 15px;
  }
  &#imaige {
    margin-bottom: 15px;
  }
  &#ccco {
    margin-left: -5px;
  }
  &#loyal {
    margin-left: 3px;
  }
`;

export const Triangle = styled.div`
  height: 0;
  width: 0;
  border-left: ${(props) => (props.focus ? "20px solid #f82a7b" : "none")};
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-top: 20px solid transparent;
  @media (max-width: 420px) {
    border-left: none;
    border-right: none;
    border-top: none;
    border: ${(props) => (props.focus ? "1px solid #f82a7b" : "none")};
    width: 45px;
    display: flex;
    align-self: flex-start;
    margin-top: 5px;
  }
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
  margin-left: 5px;
`;

export const WorkSection = styled.section`
  background: lavender;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 658px;
  margin: 25px 0 0 15px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 0 8px 10px 20px;
  @media (max-width: 420px) {
    width: 300px;
    padding: 5px 10px;
    margin: 15px;
  }
`;

export const ListContainer = styled.ul`
  text-align: left;
  margin: 5px 0 10px 0;
`;

export const ListItem = styled.li`
  list-style-type: disc;
  margin: 5px;
`;
