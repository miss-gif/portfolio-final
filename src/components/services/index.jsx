import "./services.scss";
import { services } from "../../data/services";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
// 스와이퍼
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

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
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className="services__item card card-one" key={index}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <a href="" className="link">
                바로가기
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
