import styled from "styled-components";
import CautionIcon from "../../assets/app-icons/caution.svg";

export const ContactPage = styled.main`
  align-items: center;
  background: #17cddf;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10% auto 5% auto;

  @media (max-width: 800px) {
    margin-top: 15%;
  }

  @media (max-width: 500px) {
    margin-top: 20%;
  }
`;

export const Header = styled.h3`
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const NameInput = styled.input`
  height: 30px;
  margin: 1% 0 1% 0;
  background: #282c34;
  border: 1px solid #282c34;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding-left: 5px;

  ::placeholder {
    color: white;
    padding-left: 1%;
  }

  :-webkit-autofill {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0 1000px #282c34 inset;
  }
`;

export const EmailInput = styled.input`
  height: 30px;
  margin: 1% 0 1% 0;
  background: #282c34;
  background: ${({ isEmailValid }) =>
    isEmailValid ? "" : `#282c34 url(${CautionIcon}) no-repeat 95% center`};
  background-size: 20px;
  border: ${({ isEmailValid }) =>
    isEmailValid ? "1px solid #282c34" : "2px solid red"};
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding-left: 5px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: white;
    padding-left: 1%;
  }

  :-webkit-autofill {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0 1000px #282c34 inset;
  }
`;

export const MessageInput = styled.textarea`
  height: 100px;
  margin-top: 2%;
  background: #282c34;
  border: 1px solid #282c34;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding-left: 5px;

  ::placeholder {
    color: white;
    padding-left: 1%;
  }
`;

export const SubmitButton = styled.button`
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  height: 40px;
  margin-bottom: 0;
  margin-top: 5%;
  width: 100px;

  &:enabled {
    color: white;
    background: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    background: white;
    color: #282c34;
    cursor: pointer;
  }
`;

export const FadeMessage = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 0;
`;

export const SocialMediaIcons = styled.section`
  display: flex;
  justify-content: space-around;

  @media (max-width: 500px) {
    padding-top: 15%;
  }
`;

export const SocialIcon = styled.img`
  padding: 50% 20% 0 20%;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    padding: 80% 20% 0 20%;
  }

  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;

export const CopyRight = styled.p`
  color: white;
  padding-top: 5%;

  @media (max-width: 800px) {
    padding-top: 5%;
  }
`;

export const CopySymbol = styled.span`
  color: black;
  font-weight: bold;
`;
