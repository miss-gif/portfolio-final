import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { project } from "../../data/project";
import ProjectDetailModal from "../modal/ProjectDetailModal";
import TooltipButton from "./TooltipButton";

import "./project.scss";

const Project = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      <ProjectDetailModal
        isOpen={isModal}
        onRequestClose={closeModal}
        item={selectedItem}
      />
      <section className="project section" id="project">
        <h2 className="section__title text-cs">
          FE & BE 협업 프로젝트
          <TooltipButton />
        </h2>
        <p className="section__subtitle">
          My <span>역할</span>
        </p>
        <div className="project__container container">
          <ul className="project__list">
            {project.map((item) => (
              <li
                key={item.id}
                className="project__item"
                onClick={() => openModal(item)}
              >
                <div className="project__img-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="project__img"
                  />
                </div>
                <span className="project__category text-cs">{item.date}</span>
                <h3 className="project__title">{item.title}</h3>
                <p className="project__description">{item.description}</p>
                <ul className="tag__list">
                  {item.tag.map((tag, index) => (
                    <li key={index} className="tag__item">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a href="#" className="link">
                  See Pricing
                  <FaArrowRight className="link__icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Project;
