import React from "react";
import "./Skills.scss";

function Skills() {
  return (
    <div className="Skills">
      <main className="cards-container">
        <article className="skills-card">
          <section className="skills">
            <h5>JavaScript</h5>
            <section className="skill">
              <a href="https://reactjs.org/" target="_blank">
                <img
                  src={require("../../assets/react.svg")}
                  alt="Kiwi standing on oval"
                  width="50"
                  height="50"
                  className="logo"
                />
              </a>
              <p className="p-one">React</p>
            </section>
            <section className="skill">
              <a href="https://vuejs.org/" target="_blank">
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
              <a href="https://jquery.com/" target="_blank">
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
              <a href="https://getbootstrap.com/" target="_blank">
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
              <a href="https://sass-lang.com/" target="_blank">
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
        </article>
      </main>
    </div>
  );
}

export default Skills;
