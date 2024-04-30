import React, { useState, useReducer, useEffect } from "react";
import * as emailjs from "emailjs-com";
import ReactTooltip from "react-tooltip";
import GithubIcon from "../../assets/app-icons/git.svg";
import LinkedinIcon from "../../assets/app-icons/linkedin.svg";
import {
  ContactForm,
  ContactPage,
  CopyRight,
  CopySymbol,
  EmailInput,
  FadeMessage,
  Header,
  MessageInput,
  NameInput,
  SocialIcon,
  SocialMediaIcons,
  SubmitButton,
} from "./styles";

export const Contact = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [form, setForm] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    {
      name: "",
      email: "",
      message: "",
      formCompleted: false,
      isDisabled: true,
      userMessage: "",
    }
  );

  useEffect(() => {
    if (form.name !== "" && form.email !== "" && form.message !== "") {
      setForm({ formCompleted: true });
    } else {
      setForm({ formCompleted: false });
    }
  }, [form.name, form.email, form.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, formCompleted } = form;
    if (formCompleted && isEmailValid) {
      setForm({ isDisabled: false });
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };
      emailjs.send(
        process.env.REACT_APP_EMAIL_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      e.target.reset();
      setForm({
        userMessage: "Thank you! I'll be in touch.",
        formCompleted: false,
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setForm({ userMessage: "" });
      }, 4000);
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    const emailRegex = /^[^\s@]+@(?!.*?\.\.)[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(value === "" || emailRegex.test(value));
    setForm({ email: value });
  };

  return (
    <ContactPage id="Contact">
      <ContactForm onSubmit={handleSubmit} disabled={form.isDisabled}>
        <Header>Want to work together or have a question?</Header>
        <NameInput
          name="name"
          placeholder="Name..."
          onChange={(e) => setForm({ name: e.target.value })}
        />
        <EmailInput
          name="email"
          placeholder="Email..."
          onChange={handleEmailChange}
          isEmailValid={isEmailValid}
        />
        <MessageInput
          placeholder="Enter Your Message..."
          name="message"
          onChange={(e) => setForm({ message: e.target.value })}
        />
        <SubmitButton disabled={!form.formCompleted || !isEmailValid}>
          Submit
        </SubmitButton>
      </ContactForm>
      <FadeMessage>{form.userMessage}</FadeMessage>
      <SocialMediaIcons>
        <ReactTooltip />
        <a
          href="https://github.com/saadricklamar"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="My Github"
        >
          <SocialIcon
            src={GithubIcon}
            alt="Github logo"
            width="75"
            height="75"
            className="social-icon"
          />
        </a>
        <ReactTooltip />
        <a
          href="https://www.linkedin.com/in/saad-baradan/"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="My Linkedin"
        >
          <SocialIcon
            src={LinkedinIcon}
            alt="Linkedin logo"
            width="75"
            height="75"
            className="social-icon"
          />
        </a>
      </SocialMediaIcons>
      <CopyRight>
        SAAD BARADAN <CopySymbol> &#169;2024</CopySymbol>
      </CopyRight>
    </ContactPage>
  );
};

export default Contact;
