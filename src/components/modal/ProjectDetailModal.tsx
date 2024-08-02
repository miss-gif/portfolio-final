import Modal from "react-modal";
import "./ProjectDetailModal.scss";

// item의 타입 정의
interface ProjectItem {
  img: string;
  title: string;
  description: string;
  tag: string[];
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
          <img src={item.img} alt={item.title} className="project-modal__img" />
          <div className="project-modal__info">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul className="tag__list">
              {item.tag.map((tag, index) => (
                <li key={index} className="tag__item">
                  {tag}
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
