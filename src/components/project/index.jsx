import React from "react";
import { BsExclamationDiamondFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import "./project.scss";

const Project = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section__title text-cs">
        FE & BE 협업 프로젝트
        <span>
          <BsExclamationDiamondFill />
        </span>
      </h2>
      <p className="section__subtitle">
        My <span>역할</span>
      </p>
      <div className="project__container container">
        <ul className="project__list">
          <li className="project__item">
            <div className="project__img-wrapper">
              <img src="" alt="" className="project__img" />
            </div>
            <span className="project__category text-cs">
              2024.07.24 ~ 2024.8.23
            </span>
            <h3 className="project__title">주문이요 (음식주문 플랫폼)</h3>
            <p className="project__description">
              음식주문 플랫폼 서비스 고도화
            </p>
            <ul className="tag__list">
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
            </ul>
            <a href="" className="link">
              See Pricing
              <FaArrowRight className="link__icon"></FaArrowRight>
            </a>
          </li>
          <li className="project__item">
            <div className="project__img-wrapper">
              <img src="" alt="" className="project__img" />
            </div>
            <span className="project__category text-cs">
              2024.06.24 ~ 2024.7.23
            </span>
            <h3 className="project__title">주문이요 (음식주문 플랫폼)</h3>
            <p className="project__description">
              모든 연령층이 쉽게 사용할 수 있는 음식주문 플랫폼입니다. 쉽고 빠른
              주문 경험을 제공하여 언제 어디서든 맛있는 음식을 간편하게 주문할
              수 있도록 돕습니다. 또한, 음식점 사장님을 위한 사업자 서비스를
              통해 매장 소개, 메뉴 등록, 주문 접수, 리뷰 관리 등 매장 관리
              기능을 제공하여 매출 증대를 지원합니다.
            </p>
            <ul className="tag__list">
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
            </ul>
            <a href="" className="link">
              See Pricing
              <FaArrowRight className="link__icon"></FaArrowRight>
            </a>
          </li>
          <li className="project__item">
            <div className="project__img-wrapper">
              <img src="" alt="" className="project__img" />
            </div>
            <span className="project__category text-cs">
              2024.05.24 ~ 2024.6.23
            </span>
            <h3 className="project__title">Plant Diary (식물관리 서비스)</h3>
            <p className="project__description">
              사용자가 식물의 관리 일정을 쉽게 추적하고 관리할 수 있도록 돕는
              앱입니다.
            </p>
            <ul className="tag__list">
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
              <li className="tag__item">react</li>
            </ul>
            <a href="" className="link">
              See Pricing
              <FaArrowRight className="link__icon"></FaArrowRight>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;
