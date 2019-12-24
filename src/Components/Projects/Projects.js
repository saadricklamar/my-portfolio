import React from "react";
import "./Projects.scss";

function Projects() {
  return (
    <main className="projects">
      <header className="projects-header">
        <button className="project-buttons">All</button>
        <button className="project-buttons">React</button>
        <button className="project-buttons">Vue.js</button>
        <button className="project-buttons">Mobile</button>
      </header>
      <section className="projects-container">
        <article className="project">
          <img
            src={require("../../assets/cycle-city.png")}
            alt="Home page of Cycle City Project"
            className="project-image"
          />
          <div className="middle">
            <p className="text">Cycle City</p>
            <a
              href="https://github.com/saadricklamar/cycle-city"
              target="_blank"
            >
              <button className="learn-more">Learn More</button>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Projects;
