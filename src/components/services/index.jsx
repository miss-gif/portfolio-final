import React from "react";
import "./services.scss";
import { services } from "../../data/data";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I do</h2>
      <p className="section__subtitle">
        My <span>경험</span>
      </p>
      <div className="services__container container mySwiper">
        {services.map(({ name, title, description }, index) => {
          return (
            <div className="services__item card card-one" key={index}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <a href="" className="link">
                바로가기
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
              {/* <img src={shapeTwo} alt="" className="shape c__shape" /> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
