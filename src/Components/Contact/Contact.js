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
      message: ""
    };
  }

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      name: name,
      email: email,
      message: message
    };
    emailjs.send(
      "saadbaradan_gmail_com",
      "template_p46w7sB4",
      templateParams,
      "user_QRhXIxXogP1PX8gcIGBn5"
    );
    e.target.reset();
  };

  render() {
    return (
      <main className="contact-page">
        <form className="contact-form" onSubmit={this.handleSubmit}>
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
        <section className="social-media">
          <ReactTooltip />
          <a
            href="https://twitter.com/Saadrick_Lamar"
            target="_blank"
            data-tip="My Twitter"
          >
            <img
              src={require("../../assets/twitter.svg")}
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
            data-tip="My Github"
          >
            <img
              src={require("../../assets/github.svg")}
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
            data-tip="My Linkedin"
          >
            <img
              src={require("../../assets/linkedin.svg")}
              alt="Mocha logo"
              width="75"
              height="75"
              className="social-icon"
            />
          </a>
        </section>
      </main>
    );
  }
}

export default Contact;
