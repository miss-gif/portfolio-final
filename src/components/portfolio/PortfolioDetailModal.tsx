import Modal from "react-modal";
import "./PortfolioDetailModal.scss";
import { IoIosClose } from "react-icons/io";

// item의 타입 정의
interface PortfolioItem {
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
  lessonsLearned: string;
}

// 컴포넌트 Props 타입 정의
interface PortfolioDetailModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  item?: PortfolioItem;
}

const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
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
          <img src={item.img} alt={item.title} className="project-modal__img" />
          <div className="project-modal__info">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul className="tag__list">
              {(item.tag || []).map((tag, index) => (
                <li key={index} className="tag__item">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="project-modal__features">
              <p className="project-modal__section-title">
                주요 기능 및 학습 결과
              </p>
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
            <div className="project-modal__links">
              <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
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

export default PortfolioDetailModal;
