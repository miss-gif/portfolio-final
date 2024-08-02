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
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul className="techStack__list">
              {item.techStack.map((techStack, index) => (
                <li key={index} className="techStack__item">
                  {techStack}
                </li>
              ))}
            </ul>
            <button onClick={onRequestClose}>확인</button>
          </div>
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </Modal>
  );
};

export default ProjectDetailModal;
