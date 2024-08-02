import React from "react";
import profileImg from "../../assets/sample.gif";
import SkipNavigation from "./SkipNavigation";
import "./cv.scss";

const Cv = () => {
  return (
    <div className="cv">
      <h2 className="cv__title hidden">이력서</h2>
      <SkipNavigation />
      <div className="cv__container">
        <div className="cv__top">
          <ProfileSection />
        </div>
        <div className="cv__bottom">
          <div className="cv__left">
            <DetailsSection />
          </div>
          <div className="cv__right">
            <ProfileDetails />
            <ProjectHistory />
            <Degree />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileSection = () => (
  <div className="profile">
    <div className="profile__img-container">
      <img src={profileImg} alt="Profile" className="profile__img" />
    </div>
    <div className="profile__info">
      <div className="profile__name">
        doeok<span className="profile__highlight">.gwak</span>
      </div>
      <div className="profile__description">Web Developer</div>
    </div>
  </div>
);

const DetailsSection = () => (
  <div className="details">
    <div id="details" className="details__container">
      <DetailItem number="1" title="Details" />
      <DetailContent />
    </div>
  </div>
);

const DetailItem = ({ number, title }) => (
  <div className="detail-item">
    <span className="detail-number">{number}</span> {title}
  </div>
);

const DetailContent = () => (
  <div className="detail-content">
    <DetailField title="Github" link="https://github.com/paullabkorea" />
    <DetailField
      title="Pick Project"
      linkList={[
        { name: "주문이요", link: "#none" },
        { name: "포트폴리오", link: "#none" },
      ]}
    />
    <DetailField
      title="Homepage And Service"
      linkList={[
        {
          name: "https://github.com/miss-gif",
          link: "https://github.com/miss-gif",
        },
      ]}
    />
    <DetailField
      title="Skill"
      skills={[
        "1bar-Project 3개 이하",
        "2bar-Project 5개 이상",
        "3bar-즉시 투입 가능",
      ]}
    />
    <SkillBars />
  </div>
);

const DetailField = ({ title, link, linkList, skills }) => (
  <div className="detail-field">
    <div className="field-title">{title}</div>
    {link && (
      <a className="field-link" href={link}>
        {link}
      </a>
    )}
    {linkList && (
      <ul className="field-list">
        {linkList.map((item, index) => (
          <li key={index}>
            <a className="field-link" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    )}
    {skills && (
      <ul className="field-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    )}
  </div>
);

const SkillBars = () => (
  <div>
    <SkillBar name="HTML" level={4} />
    <SkillBar name="CSS" level={4} />
    <SkillBar name="JavaScript" level={4} />
    <SkillBar name="React" level={1} />
    <SkillBar name="TypeScript" level={3} />
    <SkillBar name="Redux-Toolkit" level={4} />
    <SkillBar name="Axios" level={4} />
    <SkillBar name="TanStack Query" level={4} />
    <SkillBar name="Figma" level={4} />
  </div>
);

const SkillBar = ({ name, level }) => (
  <div className="skill-bar">
    <div className="skill-name">{name}</div>
    {[...Array(level)].map((_, i) => (
      <div key={i} className="skill-level"></div>
    ))}
  </div>
);

const ProfileDetails = () => (
  <div id="profile" className="profile-details">
    <DetailItem number="2" title="Profile" />
    <div className="profile-description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero
        optio harum provident aut, mollitia qui veniam nihil quo corrupti
        doloremque repellat. Unde corrupti qui praesentium alias error sit
        saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero
        optio harum provident aut, mollitia qui veniam nihil quo corrupti
        doloremque repellat. Unde corrupti qui praesentium alias error sit
        saepe.
      </p>
    </div>
  </div>
);

const ProjectHistory = () => (
  <div id="projectHistory" className="project-history">
    <DetailItem number="3" title="Project History" />
    <ProjectDetail
      title="Weniv world"
      duration="2017.03. - 2021.11"
      skills="#React #HTML #CSS #JS"
      link="http://www.paullab.co.kr/"
    />
  </div>
);

const ProjectDetail = ({ title, duration, skills, link }) => (
  <div className="project-detail">
    <div className="project-title">
      {title} <span className="project-duration">{duration}</span>
    </div>
    <div>
      Used Skill : <span className="project-skills">{skills}</span>
    </div>
    <div>
      Project link :{" "}
      <a className="project-link" href={link}>
        {link}
      </a>
    </div>
    <div className="project-description">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere illum
        esse, blanditiis odio tenetur odit consectetur accusamus consequuntur
        neque assumenda eveniet, aperiam cumque unde architecto, fugiat quas
        porro? Quo, officia!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere illum
        esse, blanditiis odio tenetur odit consectetur accusamus consequuntur
        neque assumenda eveniet, aperiam cumque unde architecto, fugiat quas
        porro? Quo, officia!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere illum
        esse, blanditiis odio tenetur odit consectetur accusamus consequuntur
        neque assumenda eveniet, aperiam cumque unde architecto, fugiat quas
        porro? Quo, officia!
      </p>
    </div>
  </div>
);

const Degree = () => (
  <div id="degree" className="degree">
    <DetailItem number="4" title="Degree" />
    <DegreeDetail title="Coding University" duration="2017.03. - 2021.11" />
  </div>
);

const DegreeDetail = ({ title, duration }) => (
  <div className="degree-detail">
    <div className="degree-title">
      {title} <span className="degree-duration">{duration}</span>
    </div>
    <div className="degree-description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        soluta laudantium officiis atque quasi pariatur voluptates placeat
        suscipit, dolor quaerat, sunt quibusdam porro corporis ab. Mollitia non
        iure nobis quaerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        soluta laudantium officiis atque quasi pariatur voluptates placeat
        suscipit, dolor quaerat, sunt quibusdam porro corporis ab. Mollitia non
        iure nobis quaerat.
      </p>
    </div>
  </div>
);

export default Cv;
