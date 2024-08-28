import { useState } from "react";
import { resume } from "./resume";
import Card from "./Card";
import "./resume.scss";

const Resume = () => {
  const [isEducationOpen, setIsEducationOpen] = useState<boolean>(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState<boolean>(false);

  const toggleEducation = () => {
    setIsEducationOpen((prev) => !prev);
  };

  const toggleExperience = () => {
    setIsExperienceOpen((prev) => !prev);
  };

  return (
    <section className="resume section">
      <h2 className="section__title text-cs" id="resume">
        Resume
      </h2>
      <p className="section__subtitle">
        My <span>Story</span>
      </p>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3
            className={`resume__heading ${isEducationOpen ? "active" : ""}`}
            onClick={toggleEducation}
            title="Click!"
          >
            교육
          </h3>
          <div className="resume__items">
            {resume
              .filter((val) => val.category === "education")
              .map((val) => (
                <Card
                  key={val.id} // Assuming 'id' is unique
                  title={val.title}
                  subtitle={val.subtitle}
                  date={val.date}
                  description={val.description}
                  allOpen={isEducationOpen}
                />
              ))}
          </div>
        </div>
        <div className="resume__group">
          <h3
            className={`resume__heading ${isExperienceOpen ? "active" : ""}`}
            onClick={toggleExperience}
            title="Click!"
          >
            경험
          </h3>
          <div className="resume__items">
            {resume
              .filter((val) => val.category === "experience")
              .map((val) => (
                <Card
                  key={val.id} // Assuming 'id' is unique
                  title={val.title}
                  subtitle={val.subtitle}
                  date={val.date}
                  description={val.description}
                  allOpen={isExperienceOpen}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
