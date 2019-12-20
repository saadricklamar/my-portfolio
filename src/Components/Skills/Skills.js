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
              <img
                src={require("../../assets/react.svg")}
                alt="Kiwi standing on oval"
                width="50"
                height="50"
                className="logo"
              />
              <p className="p-one">React</p>
            </section>
            <section className="skill">
              <img
                src={require("../../assets/vue.svg")}
                alt="Kiwi standing on oval"
                width="50"
                height="50"
                className="logo"
              />
              <p className="p-one">Vue.js</p>
            </section>
            <section className="skill">
              <img
                src={require("../../assets/jquery.svg")}
                alt="Kiwi standing on oval"
                width="50"
                height="50"
                className="logo"
              />
              <p className="p-one">Jquery</p>
            </section>
          </section>
          <hr />
        </article>
      </main>
    </div>
  );
}

export default Skills;
