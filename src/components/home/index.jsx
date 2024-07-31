import React, { useState } from "react";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import "./home.scss";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { home } from "../../data/home";
import { handleClick } from "../../utils/scrollClick";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleBannerClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            안녕하세요. <span>저는</span>
          </p>
          <h2 className="home__title text-cs">
            <span>{home.name}</span>
          </h2>
          <p className="home__job">
            <span className="text-cs">
              리액트 <b>웹 개발자</b>
            </span>
          </p>
          <div className="home__img-wrapper">
            {/* 이미지 영역 */}
            <div
              className={`home__banner ${isFlipped ? "flipped" : ""}`}
              onClick={handleBannerClick}
              title="Click!"
            >
              <div className="home__banner__front">
                <img src="" alt="" className="home__profile" />
              </div>
              <div className="home__banner__back">
                <img src="" alt="" className="home__profile" />
              </div>
            </div>
            <p className="home__data home__data-one">
              <span className="text-lg">
                1 <b>+</b>
              </span>
              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">10</span>
              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">{home.description}</p>
          <div className="home__socials">
            <a
              href="https://github.com/miss-gif"
              target="_blank"
              className="home__social-link"
              rel="noopener noreferrer"
            >
              <FaGithub fontSize={28} />
            </a>
            <a
              href="https://instinctive-answer-8a6.notion.site/7cc024f51ae948aca2c3bbb605a95827"
              target="_blank"
              className="home__social-link"
              rel="noopener noreferrer"
            >
              <RiNotionFill fontSize={32} />
            </a>
          </div>
          <div className="home__btns">
            <a href="/favicon.png" className="btn text-cs" download>
              Download Cv
            </a>
            <a
              className="hero__link text-cs"
              href="#skills"
              onClick={(event) => handleClick(event, "skills")}
            >
              My Skills
            </a>
          </div>
        </div>
      </div>
      <a
        className="scroll-down"
        href="#services"
        onClick={(event) => handleClick(event, "services")}
      >
        <p>scroll down</p>
        <span className="scroll-down__icon">
          <MdKeyboardDoubleArrowDown />
        </span>
      </a>
    </section>
  );
};

export default Home;
