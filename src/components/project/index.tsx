import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import TypeIt from "typeit-react";
import { project } from "./project";
import "./project.scss";
import ProjectDetailModal from "./ProjectDetailModal";

// 타입 정의
interface ProjectItem {
  id: number;
  tag: string[];
  img: string[];
  date: string;
  title: string;
  description: string;
  techStack: string[];
  features: string | { title: string; details: string[] | string }[];
  role: string;
  demoUrl: string;
  githubUrl: string;
  lessonsLearned: string[] | string;
}

const Project: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);

  const openModal = (item: ProjectItem) => {
    setSelectedItem(item);
    setIsModal(true);
    document.documentElement.style.overflow = "hidden"; // 스크롤 정지
  };

  const closeModal = () => {
    setIsModal(false);
    setSelectedItem(null);
    document.documentElement.style.overflow = "auto"; // 스크롤 해제
  };

  return (
    <>
      <ProjectDetailModal
        isOpen={isModal}
        onRequestClose={closeModal}
        item={selectedItem}
      />
      <section className="project section">
        <div className="project__title-cover flex flex-col">
          <h2 className="section__title text-cs" id="project">
            FE & BE 협업 프로젝트
          </h2>
          <TypeIt
            className="py-4 text-center text-lg text-green-500"
            options={{
              speed: 20,
              waitUntilVisible: true,
            }}
          >
            KDT 수강생 FE/BE 팀이 협업하여 실무에 가까운 환경에서 실제 서비스를
            개발하는 프로젝트입니다. <br /> 정해진 기간 내에 서비스 완성을
            목표로 하며, 실무 경험과 협업 능력을 향상시키는 기회를 제공했습니다.
          </TypeIt>
        </div>
        <p className="section__subtitle">
          My <span>role</span>
        </p>
        <div className="project__container container">
          <ul className="project__list">
            {project.map((item: ProjectItem) => (
              <li
                key={item.id}
                className="project__item"
                onClick={() => openModal(item)}
              >
                <div>
                  <div className="project__img-wrapper">
                    <img
                      src={item.img[0]}
                      alt={item.title}
                      className="project__img"
                    />
                    <ul className="project__tags">
                      {item.tag.map((tag, index) => (
                        <li key={index} className="project__tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="project__category text-cs">{item.date}</span>
                  <h3 className="project__title">{item.title}</h3>
                  <p className="project__description">{item.description}</p>
                </div>
                <div>
                  <ul className="techStack__list">
                    {item.techStack.map((techStack, index) => (
                      <li key={index} className="techStack__item">
                        <img src={techStack} alt={techStack} />
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="link">
                    View More
                    <FaArrowRight className="link__icon" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Project;
