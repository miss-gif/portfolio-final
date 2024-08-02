import Modal from "react-modal";
import "./ProjectDetailModal.scss";

// item의 타입 정의
interface ProjectItem {
  id: number;
  img: string;
  date: string;
  title: string;
  description: string;
  techStack: string[];
  features: string;
  role: string;
  demoUrl: string;
  githubUrl: string;
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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      {item ? (
        <div className="modal__content">
          <div className="project-modal__img">
            <div className="project-modal__img-sub-main">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="project-modal__img-sub">
              <img src={item.img} alt={item.title} />
              <img src={item.img} alt={item.title} />
              <img src={item.img} alt={item.title} />
            </div>
          </div>
          <div className="project-modal__info">
            <div className="project-modal__info-title">
              <p>{item.title}</p>
              <span>{item.date}</span>
            </div>
            <p>{item.description}</p>
            <div className="project-modal__features">
              <p>주요 기능</p>
              <ul>
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
            <ul className="project-modal__techStack">
              {item.techStack.map((techStack, index) => (
                <li key={index} className="project-modal__techStack-item">
                  {techStack}
                </li>
              ))}
            </ul>
            <div className="project-modal__details">
              <div>
                <p>역할</p>
                <p>{item.role}</p>
              </div>
              <div>
                <p>배운 점</p>
                <ul>
                  {item.lessonsLearned.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              </div>
              <div className="project-modal__links">
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  배포 사이트
                </a>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  깃헙 사이트
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </Modal>
  );
};

export default ProjectDetailModal;
