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

//Media Queries Styling
// @media (max-width: 1250px) {
//   .accordion {
//     width: 90%;
//   }
//   .panel {
//     width: 86%;
//   }
//   .arrow {
//     margin-left: 90%;
//   }
//   #experience-container {
//     margin-left: 10%;
//   }
// }

// @media (max-width: 950px) {
//   .accordion {
//     width: 90%;
//   }
//   .panel {
//     width: 85.7%;
//   }
//   .arrow {
//     margin-left: 90%;
//   }
//   #experience-container {
//     margin-left: 10%;
//   }
// }

// @media (max-width: 825px) {
//   .accordion {
//     width: 90%;
//     font-size: 18px;
//   }
//   .panel {
//     width: 84.6%;
//   }
//   .arrow {
//     bottom: 30px;
//   }
//   #experience-container {
//     margin-left: 10%;
//   }
// }

// @media (max-width: 650px) {
//   .accordion {
//     width: 90%;
//     font-size: 14px;
//   }
//   .panel {
//     width: 82.1%;
//   }
//   .arrow {
//     bottom: 30px;
//   }
//   #experience-container {
//     margin-left: 10%;
//   }
// }

// @media (max-width: 450px) {
//   .accordion {
//     width: 90%;
//     font-size: 11px;
//   }
//   .panel {
//     width: 80.5%;
//     font-size: 12px;
//   }
//   .arrow {
//     bottom: 40px;
//     padding: 2px;
//   }
//   #experience-container {
//     margin-left: 10%;
//   }
//   #iqgeo-details,
//   #loyal-details,
//   #zillow-details {
//     font-size: 12px;
//   }
//   u {
//     font-size: 11px;
//   }
// }
