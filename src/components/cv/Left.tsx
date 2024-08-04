import "./Left.scss";

const skillLevels = [
  { level: 1, description: "기본적인 작업을 수행할 수 있음" },
  { level: 2, description: "실무에서 경험이 있으며 코드 이해 가능" },
  { level: 3, description: "중간 난이도 프로젝트에 기여할 수 있음" },
  { level: 4, description: "복잡한 프로젝트를 주도할 수 있음" },
  { level: 5, description: "고난도 문제 해결 및 코드 최적화 능력 보유" },
];

const skillLevelBar = [
  { name: "HTML", level: 4 },
  { name: "CSS", level: 4 },
  { name: "JavaScript", level: 3 },
  { name: "TypeScript", level: 2 },
  { name: "React", level: 4 },
  { name: "Redux Toolkit", level: 3 },
  { name: "Axios", level: 4 },
  { name: "TanStack Query", level: 2 },
  { name: "Scss", level: 4 },
  { name: "Emotion", level: 3 },
  { name: "Figma", level: 2 },
];

const Left = () => {
  return (
    <div className="cv__left">
      <div className="cv__profile">
        <ProfileItem label="생년월일:" value="1991 (32세)" />
        <ProfileItem label="연락처:" value="010-****-5535" />
        <ProfileItem label="이메일:" value="svx***@naver.com" />
        <ProfileItem label="깃허브:" value="https://github.com/miss-gif" />
        <ProfileItem
          label="학력:"
          value={
            <>
              <p>2010.03 ~ 2018.02 졸업</p>
              <p>대구가톨릭대학교(4년제)</p>
              <p>전공 : 문헌정보학</p>
              <p>복수전공 : 일어일문학</p>
            </>
          }
        />
        <ProfileItem
          label="교육이력:"
          value={
            <>
              <EducationItem
                date="2024.03 ~ 2024.09"
                description="기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자 양성"
              />
              <EducationItem
                date="2021.12 ~ 2022.05"
                description="[과정평가형]정보처리산업기사(자바(Java)프로그래밍 활용 웹개발)A"
              />
            </>
          }
        />
        <ProfileItem
          label="관련 자격증:"
          value={
            <>
              <p>웹디자인기능사 2022.06</p>
              <p>컴퓨터그래픽스운용기능사 2009.07</p>
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
        <SkillBars skills={skillLevelBar} />
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
    {skills.map((skill) => (
      <li key={skill.name} className="cv__skill">
        <div className="cv__skill__name">{skill.name}</div>
        <div className="cv__skill__levels">
          {[...Array(skill.level)].map((_, i) => (
            <div key={i} className="cv__skill__level"></div>
          ))}
        </div>
      </li>
    ))}
  </ul>
);

export default Left;
