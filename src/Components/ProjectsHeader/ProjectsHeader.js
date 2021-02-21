import React from "react";
import "./ProjectsHeader.scss";

function ProjectsHeader(props) {
  return (
    <header className="projects-header">
      <button
        className="project-buttons"
        id={`${props.allButton}`}
        onClick={props.renderAll}
      >
        All
      </button>
      <button className="project-buttons" onClick={props.renderReact}>
        React
      </button>
      <button className="project-buttons" onClick={props.renderVue}>
        Vue.js
      </button>
      <button className="project-buttons" onClick={props.renderNode}>
        Node.js
      </button>
    </header>
  );
}

export default ProjectsHeader;
