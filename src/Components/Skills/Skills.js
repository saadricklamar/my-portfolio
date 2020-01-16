import React from "react";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div className="Skills" id="mobile-skills">
      <main className="cards-container">
        <article className="skills-card">
          <section className="skills">
            <h5>JavaScript</h5>
            <section className="skill">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/react.svg")}
                  alt="React logo"
                  width="50"
                  height="50"
                  className="logo"
                />
              </a>
              <p className="p-one">React</p>
            </section>
            <section className="skill">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/redux.svg")}
                  alt="Redux logo"
                  width="50"
                  height="50"
                  className="logo"
                />
              </a>
              <p className="p-one">Redux</p>
            </section>
            <section className="skill">
              <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/vue.svg")}
                  alt="Kiwi standing on oval"
                  width="50"
                  height="50"
                  className="logo"
                />
              </a>
              <p className="p-one">Vue.js</p>
            </section>
            <section className="skill">
              <a
                href="https://jquery.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/jquery.svg")}
                  alt="Kiwi standing on oval"
                  width="50"
                  height="50"
                  className="logo"
                />
              </a>
              <p className="p-one">Jquery</p>
            </section>
          </section>
          <hr />
          <section className="skills">
            <h5>HTML/CSS</h5>
            <section className="skill">
              <a
                href="https://html.spec.whatwg.org/#is-this-html5?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/html5.svg")}
                  alt="HTML 5 logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-two">HTML5</p>
            </section>
            <section className="skill">
              <a
                href="https://developer.mozilla.org/en-US/docs/Archive/CSS3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/css3.svg")}
                  alt="CSS 3 logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-two">CSS3</p>
            </section>
            <section className="skill">
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/bootstrap.svg")}
                  alt="Bootstrap logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-two">Bootstrap</p>
            </section>
            <section className="skill">
              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/sass.svg")}
                  alt="Sass logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-two">Sass</p>
            </section>
          </section>
          <hr />
          <section className="skills">
            <h5>Native-Apps</h5>
            <section className="skill">
              <a
                href="https://kotlinlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/kotlin.svg")}
                  alt="Kotlin logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-four">Kotlin</p>
            </section>
            <section className="skill">
              <a
                href="https://www.nativescript.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/nativescript.svg")}
                  alt="NativeScript logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-four">NativeScript</p>
            </section>
            <section className="skill">
              <a
                href="https://facebook.github.io/react-native/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/react-native.svg")}
                  alt="React Native logo"
                  width="45"
                  height="45"
                  className="logo"
                  id="r-native"
                />
              </a>
              <p className="p-three" id="r-native-text">
                React Native
              </p>
            </section>
            <section className="skill">
              <a
                href="https://vue-native.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/vue.svg")}
                  alt="Vue Native logo"
                  width="45"
                  height="45"
                  className="logo"
                  id="v-native"
                />
              </a>
              <p className="p-three" id="v-native-text">
                Vue Native
              </p>
            </section>
          </section>
          <hr />
          <section className="skills">
            <h5 id="back-end">Back-End</h5>
            <section className="skill">
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/nodejs.svg")}
                  alt="Node JS logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-three">Node.js</p>
            </section>
            <section className="skill">
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/postgresql.svg")}
                  alt="Postgress logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-three">PostgreSQL</p>
            </section>
            <section className="skill">
              <a
                href="http://knexjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/knex.svg")}
                  alt="Knex logo"
                  width="45"
                  height="45"
                  className="logo"
                  id="knex"
                />
              </a>
              <p className="p-four" id="knex-text">
                Knex
              </p>
            </section>
            <section className="skill">
              <a
                href="https://www.getpostman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/postman.svg")}
                  alt="Postman logo"
                  width="45"
                  height="45"
                  className="logo"
                  id="postman"
                />
              </a>
              <p className="p-four" id="postman-text">
                Postman
              </p>
            </section>
          </section>
          <hr />
          <section className="skills">
            <h5 id="back-end">Other</h5>
            <section className="skill">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/github.svg")}
                  alt="Github logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-five">Github</p>
            </section>
            <section className="skill">
              <a
                href="https://travis-ci.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/travis-ci.svg")}
                  alt="Travis CI logo"
                  width="45"
                  height="45"
                  className="logo"
                />
              </a>
              <p className="p-five" id="travis-text">
                Travis CI
              </p>
            </section>
            <section className="skill">
              <a
                href="https://mochajs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/Jest.svg")}
                  alt="Jest logo"
                  width="45"
                  height="45"
                  className="logo"
                  id="jest"
                />
              </a>
              <p className="p-five">Jest</p>
            </section>
            <section className="skill">
              <a
                href="https://www.getpostman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../assets/mocha.svg")}
                  alt="Mocha logo"
                  width="45"
                  height="45"
                  className="logo"
                  id="postman"
                />
              </a>
              <p className="p-five" id="mocha-text">
                Mocha
              </p>
            </section>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Skills;
