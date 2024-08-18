import "./GlobalInfo.scss";
import React, { useState } from "react";
import Modal from "react-modal";

const indax = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleScrollLock = () => {
    // document.body.style.overflow = "hidden";
  };

  const handleScrollUnlock = () => {
    // document.body.style.overflow = "auto";
  };

  // useEffect(() => {
  //   if (modalIsOpen) {
  //     handleScrollLock();
  //   } else {
  //     handleScrollUnlock();
  //   }
  // }, [modalIsOpen]);

  return (
    <div className="GlobalInfo">
      <button className="GlobalInfo-btn" onClick={openModal}>
        info
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Information Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="Modal__title">
          새로운 기능 개발을 위해 사이트를 개선하고 있습니다
        </h2>
        <div className="Modal__content">
          더욱 편리하고 빠른 서비스를 제공하기 위해 노력하고 있습니다. <br />
          최대한 빠른 시일 내에 작업을 완료하겠습니다.
        </div>
        <button className="Modal__close-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default indax;
