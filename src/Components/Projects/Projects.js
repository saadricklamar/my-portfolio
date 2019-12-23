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
    </main>
  );
}

export default Projects;
