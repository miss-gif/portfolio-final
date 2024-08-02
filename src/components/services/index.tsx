import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import shapeTwo from "../../assets/shape-2.png";
import { services } from "./services";
import "./services.scss";

const Services = () => {
  return (
    <section className="services section">
      <h2 className="section__title text-cs" id="services">
        What I do
      </h2>
      <p className="section__subtitle">
        My <span>경험</span>
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
            <a href="" className="link">
              바로가기
              <FaArrowRight className="link__icon" />
            </a>
            <img src={shapeTwo} alt="Shape" className="shape c__shape" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
