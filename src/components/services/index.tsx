import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import shapeTwo from "../../assets/shape-2.png";
import { services } from "./services";
import "./services.scss";

const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const openModal = (title: string, description: string) => {
    setModalContent({ title, description });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <section className="services section">
        <h2 className="section__title text-cs" id="services">
          What I do
        </h2>
        <p className="section__subtitle">
          My <span>service</span>
        </p>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="services__container container mySwiper"
        >
          {services.map(({ id, name, title, description }) => (
            <SwiperSlide className="services__item card card-one" key={id}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <button
                className="link"
                onClick={() => openModal(title, description)}
              >
                More
                <FaArrowRight className="link__icon" />
              </button>
              <img src={shapeTwo} alt="Shape" className="shape c__shape" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Information Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="Modal__title">{modalContent.title}</h2>
        <div className="Modal__content">{modalContent.description}</div>
        <button className="Modal__close-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default Services;
