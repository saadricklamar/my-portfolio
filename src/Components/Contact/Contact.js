import React, { Component } from "react";
import "./Contact.scss";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className="contact-page">
        <form className="contact-form">
          <h3>Want to work together or have a question?</h3>
          <input className="name" placeholder="Name"></input>
          <input className="email" placeholder="Email"></input>
          <textarea
            className="message"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="submit">Submit</button>
        </form>
      </main>
    );
  }
}

export default Contact;
