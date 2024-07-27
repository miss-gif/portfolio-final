import React from "react";
import "./project.scss";

const Project = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section__title text-cs">project</h2>
      <p className="section__subtitle">
        My <span>역할</span>
      </p>
      <div className="project__container container">
        <ul>
          <li>3차</li>
          <li>2차</li>
          <li>1차</li>
        </ul>
      </div>
    </section>
  );
};

export default Project;
