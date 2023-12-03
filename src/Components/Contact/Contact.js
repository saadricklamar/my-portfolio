import React, { useReducer, useEffect } from "react";
import * as emailjs from "emailjs-com";
import ReactTooltip from "react-tooltip";
import "./Contact.scss";

export const Contact = () => {
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
    if (formCompleted) {
      setForm({ isDisabled: false });
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

  return (
    <main className="contact-page" id="mobile-contact">
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        disabled={form.isDisabled}
      >
        <h3>Want to work together or have a question?</h3>
        <input
          className="name"
          name="name"
          placeholder="Name..."
          onChange={(e) => setForm({ name: e.target.value })}
        ></input>
        <input
          className="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => setForm({ email: e.target.value })}
        ></input>
        <textarea
          className="message"
          placeholder="Enter Your Message..."
          name="message"
          onChange={(e) => setForm({ message: e.target.value })}
        ></textarea>
        <button className="submit" disabled={!form.formCompleted}>
          Submit
        </button>
      </form>
      <p className="fade-out">{form.userMessage}</p>
      <section className="social-media">
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
        SAAD BARADAN <span className="copy-right"> &#169;2024</span>
      </p>
    </main>
  );
};

export default Contact;
