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
`;

export const LeftContainer = styled.section`
  width: 100%;
  background: white;
`;

export const RightContainer = styled.section`
  width: 70%;
  background: #17cddf;
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
  margin: 20px 0;
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

// // Media Queiries //

// @media (max-width: 750px) {
//   .content-header {
//     padding-right: 10%;
//     height: 60px;
//   }
// }

// @media (max-width: 550px) {
//   .content-header {
//     padding-right: 5%;
//     height: 50px;
//   }
//   .nav-buttons {
//     font-size: 1rem;
//   }
//   .home-icon {
//     font-size: 1rem;
//     padding-top: 100%;
//   }
//   .details-content {
//     width: 60%;
//     padding-left: 5%;
//     padding-top: 5%;
//     margin-left: 12%;
//     margin-top: 5%;
//   }
//   .welcome-greeting {
//     font-size: 30px;
//   }
//   .about-me-details {
//     font-size: 1rem;
//   }
// }

// @media (max-width: 420px) {
//   .content-header {
//     display: none;
//   }
//   .details-content {
//     width: 80%;
//     padding-top: 10%;
//     margin-left: 5%;
//   }
// }

// @media (max-width: 380px) {
//   h2 {
//     text-align: center;
//     padding-left: 0;
//     padding-top: 15%;
//   }

//   .content-header {
//     padding-right: 5%;
//     height: 40px;
//   }

//   .nav-buttons {
//     font-size: 0.6rem;
//     padding-top: 30px;
//   }

//   .home-icon {
//     font-size: 0.8rem;
//     padding-top: 70%;
//   }
//   .details-content {
//     width: 70%;
//     padding-top: 5%;
//     margin-left: 8%;
//   }
// }

// @media (max-width: 325px) {
//   .details-content {
//     padding-top: 0px;
//   }
// }
