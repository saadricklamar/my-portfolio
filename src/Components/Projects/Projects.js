import React, { Component } from "react";
import ProjectsHeader from "../ProjectsHeader/ProjectsHeader";
import "./Projects.scss";

export class Projects extends Component {
  constructor() {
    super();
    this.state = {
      all: true,
      react: false,
      vue: false,
      node: false,
      allButtonId: ""
    };
  }

  componentDidMount = () => {
    this.setState({ allButtonId: "focus" });
  };

  renderAll = () => {
    this.setState({
      vue: false,
      node: false,
      react: false,
      all: true
    });
  };

  renderReact = () => {
    this.setState({
      all: false,
      vue: false,
      node: false,
      react: true
    });
  };

  renderVue = () => {
    this.setState({
      all: false,
      react: false,
      node: false,
      vue: true
    });
  };

  renderNode = () => {
    this.setState({
      all: false,
      react: false,
      vue: false,
      node: true
    });
  };

  render() {
    if (this.state.all) {
      return (
        <main className="projects" id="mobile-projects">
          <ProjectsHeader
            renderAll={this.renderAll}
            renderReact={this.renderReact}
            renderVue={this.renderVue}
            renderNode={this.renderNode}
            allButton={this.state.allButtonId}
          />
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">LEARN MORE</button>
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">LEARN MORE</button>
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">LEARN MORE</button>
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">LEARN MORE</button>
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">LEARN MORE</button>
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">LEARN MORE</button>
                </a>
              </div>
            </article>
          </section>
        </main>
      );
    }
    if (this.state.node) {
      return (
        <main className="projects" id="mobile-projects">
          <ProjectsHeader
            renderAll={this.renderAll}
            renderReact={this.renderReact}
            renderVue={this.renderVue}
            renderNode={this.renderNode}
          />
          <section className="projects-container">
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">Learn More</button>
                </a>
              </div>
            </article>
          </section>
        </main>
      );
    }
    if (this.state.react) {
      return (
        <main className="projects" id="mobile-projects">
          <ProjectsHeader
            renderAll={this.renderAll}
            renderReact={this.renderReact}
            renderVue={this.renderVue}
            renderNode={this.renderNode}
          />
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">Learn More</button>
                </a>
              </div>
            </article>
          </section>
        </main>
      );
    }
    if (this.state.vue) {
      return (
        <main className="projects" id="mobile-projects">
          <ProjectsHeader
            renderAll={this.renderAll}
            renderReact={this.renderReact}
            renderVue={this.renderVue}
            renderNode={this.renderNode}
          />
          <section className="projects-container">
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                >
                  <button className="learn-more">Learn More</button>
                </a>
              </div>
            </article>
          </section>
        </main>
      );
    }
  }
}

export default Projects;
