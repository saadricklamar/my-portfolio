import styled from "styled-components";

export const Main = styled.main`
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1% auto;
  width: 70%;
`;

export const Card = styled.section`
  height: 200px;
  &:hover {
    cursor: pointer;
  }
  &:hover .overlay {
    cursor: pointer;
    opacity: 1;
    background: whitesmoke;
  }

  @media (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  backface-visibility: hidden;
  display: block;
  height: 200px;
  opacity: 1;
  transition: 0.5s ease;
  width: 300px;
`;

export const Overlay = styled.div`
  position: relative;
  bottom: 236px;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: 0.5s ease;
  background-color: white;
`;

export const SolutionName = styled.p`
  color: black;
  font-size: 1.2rem;
  font-weight: bolder;
  margin: 12% auto 0 auto;
  padding-top: 20px;
  text-align: center;
`;

export const TechUsed = styled.p`
  color: #f82a7b;
  font-weight: 600;
`;

export const Button = styled.button`
  background: #f82a7b;
  border: 1px solid #f82a7b;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bolder;
  height: 40px;
  position: relative;
  top: 20px;
  width: 50%;
  text-transform: uppercase;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.header`
  display: flex;
  justify-content: center;
  margin: 5% auto 0 auto;
`;

export const NavButton = styled.button`
  background: ${(props) => (props.active ? "#f82a7b" : "none")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  height: 50px;
  margin: 8% 1% 5% 0;
  outline: none;
  width: 170px;

  &:hover {
    background: #f82a7b;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 1s ease;
  }

  @media (max-width: 420px) {
    height: 40px;
    font-size: 1.3rem;
    width: 75px;
  }
`;
