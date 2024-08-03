import axios from "axios";
import { useEffect, useState } from "react";
import "./skills.scss";

// 객체 타입 정의
interface Skills {
  img: string;
  id: number;
  name: string;
  percentage: number;
  description: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("./json/skills.json");
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section className="skills section">
      <h2 className="section__title text-cs" id="skills">
        Professional Skills
      </h2>
      <p className="section__subtitle">
        My <span>기술스택</span>
      </p>
      <div className="skills__container container grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          skills.map(({ img, name, percentage, description, id }) => (
            <SkillItem
              key={id}
              img={img}
              name={name}
              percentage={percentage}
              description={description}
            />
          ))
        )}
      </div>
    </section>
  );
};

const SkillItem = ({ img, name, percentage, description }) => (
  <ul>
    <li className="skills__item" data-aos="fade-up" data-aos-duration="1500">
      <div className="skills__item-img__cover">
        <img src={img} alt={name} />
      </div>
      <div className="skills__item__info">
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
    </li>
  </ul>
);

export default Skills;
