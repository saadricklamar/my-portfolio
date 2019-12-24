import React from "react";
import "./Projects.scss";

function Projects() {
  return (
    <main className="projects">
      <header className="projects-header">
        <button className="project-buttons">All</button>
        <button className="project-buttons">React</button>
        <button className="project-buttons">Vue.js</button>
        <button className="project-buttons">Node.js</button>
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
        <article className="project">
          <img
            src={require("../../assets/harvard-art.png")}
            alt="Home page of Harvard Art Museum Project"
            className="project-image"
          />
          <div className="middle">
            <p className="text">Harvard Art Museum</p>
            <a
              href="https://github.com/saadricklamar/harvard-art"
              target="_blank"
            >
              <button className="learn-more">Learn More</button>
            </a>
          </div>
        </article>
        <article className="project">
          <img
            src={require("../../assets/vue-calculator.png")}
            alt="Home page of Vue Calculator project"
            className="project-image"
          />
          <div className="middle">
            <p className="text">Vue Calculator</p>
            <a
              href="https://github.com/saadricklamar/vue-calculator"
              target="_blank"
            >
              <button className="learn-more">Learn More</button>
            </a>
          </div>
        </article>
        <article className="project">
          <img
            src={require("../../assets/movie-tracker.png")}
            alt="Home page of Movie Tracker project"
            className="project-image"
          />
          <div className="middle">
            <p className="text">Movie Tracker</p>
            <a
              href="https://github.com/saadricklamar/movie-tracker"
              target="_blank"
            >
              <button className="learn-more">Learn More</button>
            </a>
          </div>
        </article>
        <article className="project">
          <img
            src={require("../../assets/shakesbeer.png")}
            alt="Home page of Shakesbeer project"
            className="project-image"
          />
          <div className="middle">
            <p className="text">ShakesBeer</p>
            <a
              href="https://github.com/saadricklamar/shakesbeer"
              target="_blank"
            >
              <button className="learn-more">Learn More</button>
            </a>
          </div>
        </article>
        <article className="project">
          <img
            src={require("../../assets/philosophers.png")}
            alt="Philosophers Restful API"
            className="project-image"
          />
          <div className="middle">
            <p className="text">Philosophers Back-End</p>
            <a
              href="https://github.com/saadricklamar/philosophers-backend"
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
