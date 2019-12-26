import React, { Component } from "react";
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

  render() {
    return (
      <main className="contact-page">
        <form className="contact-form">
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
          <a href="https://twitter.com/Saadrick_Lamar" target="_blank">
            <img
              src={require("../../assets/twitter.svg")}
              alt="Mocha logo"
              width="75"
              height="75"
              className="social-icon"
            />
          </a>
          <a href="https://github.com/saadricklamar" target="_blank">
            <img
              src={require("../../assets/github.svg")}
              alt="Mocha logo"
              width="75"
              height="75"
              className="social-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/saad-baradan/" target="_blank">
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
