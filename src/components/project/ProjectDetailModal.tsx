import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ProjectDetailModal.scss";
import { IoIosClose } from "react-icons/io";

// item의 타입 정의
interface ProjectItem {
  id: number;
  img: string[];
  date: string;
  title: string;
  description: string;
  techStack: string[];
  features: string;
  role: string;
  demoUrl: string;
  githubUrl: string;
  canvaUrl?: string;
  figmaUrl?: string;
  lessonsLearned: string;
}

// 컴포넌트 Props 타입 정의
interface ProjectDetailModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  item?: ProjectItem | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onRequestClose,
  item,
}) => {
  // 메인 이미지의 상태를 관리
  const [mainImg, setMainImg] = useState<string>("");

  // item의 변화에 따라 mainImg 상태를 초기화
  useEffect(() => {
    if (item && item.img.length > 0) {
      setMainImg(item.img[0]);
    } else {
      setMainImg("");
    }
  }, [item]);

  // 이미지를 클릭했을 때 메인 이미지를 변경하는 함수
  const handleImageClick = (img: string) => {
    setMainImg(img);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setMainImg(item?.img[0] || ""); // 모달을 닫을 때 mainImg 초기화
        onRequestClose();
      }}
      className="modal"
      overlayClassName="overlay"
    >
      {item ? (
        <div className="modal__content">
          <div className="project-modal__img">
            <div className="project-modal__img-sub-main">
              <img src={mainImg} alt={item.title} />
            </div>
            <div className="project-modal__img-sub">
              {item.img.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${item.title} ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
          <div className="project-modal__info">
            <div className="project-modal__info-header">
              <p className="project-modal__info-title">{item.title}</p>
              <span className="project-modal__info-date">{item.date}</span>
            </div>
            <p>{item.description}</p>
            <div className="project-modal__features">
              <p className="project-modal__section-title">주요 기능</p>
              <ul className="project-modal__section-contents">
                {item.features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.title}:</strong>
                    {Array.isArray(feature.details) ? (
                      <ul>
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    ) : (
                      feature.details
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-modal__techStack">
              <p className="project-modal__section-title">사용 기술</p>
              <ul className="project-modal__techStack-list">
                {item.techStack.map((techStack, index) => (
                  <li key={index} className="project-modal__techStack-item">
                    <img src={techStack} alt={techStack} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-modal__role">
              <p className="project-modal__section-title">역할</p>
              <p>{item.role}</p>
            </div>
            <div className="project-modal__lessonsLearned">
              <p className="project-modal__section-title">배운 점</p>
              <ul>
                {item.lessonsLearned.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </div>
            <div className="project-modal__links">
              <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
                배포-Link
              </a>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                깃헙-Link
              </a>
              <a href={item.canvaUrl} target="_blank" rel="noopener noreferrer">
                Canva-Link
              </a>
              <a href={item.figmaUrl} target="_blank" rel="noopener noreferrer">
                피그마-Link
              </a>
            </div>
            <button className="modal__close-btn" onClick={onRequestClose}>
              <IoIosClose />
            </button>
          </div>
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </Modal>
  );
};

export default ProjectDetailModal;
