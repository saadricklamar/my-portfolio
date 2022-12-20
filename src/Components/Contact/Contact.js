import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import ReactTooltip from "react-tooltip";
import "./Contact.scss";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      formCompleted: false,
      isDisabled: true,
      userMessage: "",
    };
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== ""
    ) {
      this.setState({ formCompleted: true });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, formCompleted } = this.state;
    if (formCompleted) {
      this.setState({ isDisabled: false });
      let templateParams = {
        name: name,
        email: email,
        message: message,
      };
      emailjs.send(
        "saadbaradan_gmail_com",
        "template_p46w7sB4",
        templateParams,
        "user_QRhXIxXogP1PX8gcIGBn5"
      );
      e.target.reset();
      this.setState({ userMessage: "Thank you! I'll be in touch." });
    }
  };

  render() {
    return (
      <main className="contact-page" id="mobile-contact">
        <form
          className="contact-form"
          onSubmit={this.handleSubmit}
          disabled={this.state.isDisabled}
        >
          <h3>Want to work together or have a question?</h3>
          <input
            className="name"
            name="name"
            placeholder="Name"
            onChange={this.handleFormChange}
          ></input>
          <input
            className="email"
            name="email"
            placeholder="Email"
            onChange={this.handleFormChange}
          ></input>
          <textarea
            className="message"
            placeholder="Enter Your Message"
            name="message"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="submit">Submit</button>
        </form>
        <p className="fade-out">{this.state.userMessage}</p>
        <section className="social-media">
          <ReactTooltip />
          <a
            href="https://twitter.com/Saadrick_Lamar"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="My Twitter"
          >
            <img
              src={require("../../assets/twitter.svg").default}
              alt="Mocha logo"
              width="75"
              height="75"
              className="social-icon"
            />
          </a>
          <ReactTooltip />
          <a
            href="https://github.com/saadricklamar"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="My Github"
          >
            <img
              src={require("../../assets/git.svg").default}
              alt="Mocha logo"
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
            <img
              src={require("../../assets/linkedin.svg").default}
              alt="Mocha logo"
              width="75"
              height="75"
              className="social-icon"
            />
          </a>
        </section>
        <p className="copyright">
          SAAD BARADAN <span> &#169;2021</span>
        </p>
      </main>
    );
  }
}

export default Contact;
