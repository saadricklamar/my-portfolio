import styled from "styled-components";

export const TempContainer = styled.div`
  position: relative;
  left: 45%;
  display: flex;
  align-items: center;
  align-self: center;
  cursor: pointer;
  @media (max-width: 1000px) {
    left: 2%;
  }
  @media (max-width: 650px) {
    left: 1%;
  }
`;

export const WeatherIcon = styled.img`
  width: 45px;
`;

export const TempDisplay = styled.p`
  color: white;
  margin: 0px;
  font-size: 22px;
`;
