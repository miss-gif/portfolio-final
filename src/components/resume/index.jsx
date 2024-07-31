import React, { useState } from "react";
import { cv } from "../../data/data";
import Card from "./Card";
import "./resume.scss";

const Resume = () => {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const toggleEducation = () => {
    setIsEducationOpen(!isEducationOpen);
  };

  const toggleExperience = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  return (
    <section className="resume section" id="resume">
      <h2 className="section__title text-cs">Resume</h2>
      <p className="section__subtitle">
        My <span>Story</span>
      </p>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3
            className="resume__heading"
            onClick={toggleEducation}
            title="Click!"
          >
            교육
          </h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                    allOpen={isEducationOpen}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="resume__group">
          <h3
            className="resume__heading"
            onClick={toggleExperience}
            title="Click!"
          >
            경험
          </h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                    allOpen={isExperienceOpen}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
