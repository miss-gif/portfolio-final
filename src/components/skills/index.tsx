import axios from "axios";
import { useEffect, useState, useRef } from "react";
import "./skills.scss";

// 객체 타입 정의
interface Skill {
  img: string;
  id: number;
  name: string;
  percentage: number;
  description: string;
}

interface SkillItemProps {
  img: string;
  name: string;
  percentage: number;
  description: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("/json/skills.json");
        setSkills(response.data);
      } catch (error) {
        setError("Skills data could not be loaded. Please try again later.");
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
        My <span>techStack</span>
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="skills__container container grid">
          {skills.map(({ img, name, percentage, description, id }) => (
            <SkillItem
              key={id}
              img={img}
              name={name}
              percentage={percentage}
              description={description}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

const SkillItem = ({ img, name, percentage, description }: SkillItemProps) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const skillRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // 요소가 화면에 보일 때 애니메이션 시작
        const interval = setInterval(() => {
          setCurrentPercentage((prev) => {
            if (prev < percentage) {
              return Math.min(prev + 1, percentage); // 1씩 증가
            } else {
              clearInterval(interval); // 목표에 도달하면 인터벌 정지
              return percentage;
            }
          });
        }, 20); // 20ms마다 실행
      } else {
        // 요소가 화면에서 벗어날 때 `currentPercentage` 초기화
        setCurrentPercentage(0);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 10%가 보일 때 콜백 호출
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    // 클린업 함수는 옵저버를 해제하지 않고 애니메이션과 초기화만 처리합니다.
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);

  return (
    <li
      className="skills__item"
      data-aos="fade-up"
      data-aos-duration="1500"
      ref={skillRef}
    >
      <div className="skills__item-img__cover">
        <img src={img} alt={name} />
      </div>
      <div className="skills__item__info">
        <div className="skills__titles">
          <h3 className="skills__name">{name}</h3>
          <span className="skills__number">
            {currentPercentage} <span>%</span>
          </span>
        </div>
        <p className="skills__description">{description}</p>
        <div className="skills__bar">
          <span
            className="skills__percentage"
            style={{ width: `${currentPercentage}%` }}
          >
            <span></span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Skills;
