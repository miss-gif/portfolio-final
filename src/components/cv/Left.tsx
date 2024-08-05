import axios from "axios";
import { useEffect, useState } from "react";
import "./Left.scss";

const skillLevels = [
  { level: 1, description: "기본적인 작업을 수행할 수 있음" },
  { level: 2, description: "실무에서 경험이 있으며 코드 이해 가능" },
  { level: 3, description: "중간 난이도 프로젝트에 기여할 수 있음" },
  { level: 4, description: "복잡한 프로젝트를 주도할 수 있음" },
  { level: 5, description: "고난도 문제 해결 및 코드 최적화 능력 보유" },
];

const Left = () => {
  const [profile, setProfile] = useState({
    birthdate: "",
    contact: "",
    email: "",
    github: "",
    education: [],
    training: [],
    certifications: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/json/profile.json");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("/json/skills.json");
        const skillsData = response.data.map((skill) => ({
          img: skill.img,
          name: skill.name,
          level: Math.ceil(skill.percentage / 20),
        }));
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="cv__left">
      <div className="cv__profile">
        <ProfileItem label="생년월일:" value={profile.birthdate} />
        <ProfileItem label="연락처:" value={profile.contact} />
        <ProfileItem label="이메일:" value={profile.email} />
        <ProfileItem label="깃허브:" value={profile.github} />
        <ProfileItem
          label="학력:"
          value={
            <>
              {profile.education.map((edu, index) => (
                <div key={index}>
                  <p>{edu.period}</p>
                  <p>{edu.university}</p>
                  <p>전공 : {edu.major}</p>
                  {edu.minor && <p>복수전공 : {edu.minor}</p>}
                </div>
              ))}
            </>
          }
        />
        <ProfileItem
          label="교육이력:"
          value={
            <div className="education-gap">
              {profile.training.map((train, index) => (
                <EducationItem
                  key={index}
                  date={train.date}
                  description={train.description}
                />
              ))}
            </div>
          }
        />
        <ProfileItem
          label="관련 자격증:"
          value={
            <>
              {profile.certifications.map((cert, index) => (
                <p key={index}>{cert}</p>
              ))}
            </>
          }
        />
      </div>
      <div className="cv__portfolio">
        <PortfolioProject
          title="대표 프로젝트"
          projects={[
            {
              name: "주문이요",
              date: "2024.06.24 ~ 2024.07.23",
              demoUrl: "https://gybproject.com/",
              githubUrl: "https://github.com/miss-gif/jumunyo",
            },
            {
              name: "포트폴리오",
              date: "2024.07.24 ~ 2024.08.04",
              demoUrl: "",
              githubUrl: "",
            },
          ]}
        />
      </div>
      <div className="cv__skills">
        <SkillLevels levels={skillLevels} />
        <SkillBars skills={skills} />
      </div>
    </div>
  );
};

const ProfileItem = ({ label, value }) => (
  <div className="cv__profile__item">
    <span className="cv__profile__label cv_title">{label}</span> {value}
  </div>
);

const EducationItem = ({ date, description }) => (
  <div className="cv__profile__education">
    <p>{date}</p>
    <p>{description}</p>
  </div>
);

const PortfolioProject = ({ title, projects }) => (
  <div className="cv__portfolio__project">
    <p className="cv__portfolio__project-title cv_title">{title}</p>
    <div className="cv__portfolio__project-details">
      {projects.map((project, index) => (
        <div key={index} className="cv__subtitle">
          <p>
            {project.name} <span>{project.date}</span>
          </p>
          <div className="cv__link">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv__portfolio__project-link"
            >
              배포URL
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv__portfolio__project-link"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillLevels = ({ levels }) => (
  <ul>
    {levels.map((skill) => (
      <li key={skill.level} className="cv__skills__level">
        <p>
          <span>lv {skill.level}</span> : {skill.description}
        </p>
      </li>
    ))}
  </ul>
);

const SkillBars = ({ skills }) => (
  <ul className="cv__skills__bars">
    {skills.map(({ img, name, level }) => (
      <li key={name} className="cv__skill">
        <div>
          <img src={img} alt="" className="cv__skill__img" />
        </div>
        <div className="cv__skill__info">
          <div className="cv__skill__name">{name}</div>
          <div className="cv__skill__levels">
            {[...Array(level)].map((_, i) => (
              <div key={i} className="cv__skill__level"></div>
            ))}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default Left;
