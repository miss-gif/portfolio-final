import { skills } from "./skills";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills section">
      <h2 className="section__title text-cs" id="skills">
        Professional Skills
      </h2>
      <p className="section__subtitle">
        My <span>기술스택</span>
      </p>
      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div
              className="skills__item"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">
                  {percentage} <span>%</span>
                </span>
              </div>
              <p className="skills__description">{description}</p>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
