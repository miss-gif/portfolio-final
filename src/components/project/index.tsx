import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { project } from "./project";
import ProjectDetailModal from "./ProjectDetailModal";
import TooltipButton from "./TooltipButton";
import "./project.scss";

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
    document.body.style.overflow = "hidden"; // 스크롤 정지
  };

  const closeModal = () => {
    setIsModal(false);
    setSelectedItem(null);
    document.body.style.overflow = "auto"; // 스크롤 해제
  };

  return (
    <>
      <ProjectDetailModal
        isOpen={isModal}
        onRequestClose={closeModal}
        item={selectedItem}
      />
      <section className="project section">
        <div className="project__title-cover">
          <h2 className="section__title text-cs" id="project">
            FE & BE 협업 프로젝트
          </h2>
          <button className="tooltip-btn">
            <TooltipButton />
          </button>
        </div>
        <p className="section__subtitle">
          My <span>역할</span>
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
