import "animate.css";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { RiNotionFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { handleClick } from "../../utils/scrollClick";
import { home } from "./home";
import "./home.scss";
import VideoMain from "./VideoMain.jsx";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleBannerClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="home" id="home">
      <VideoMain />
      <div className="home__container container">
        <div className="home__left">
          <p className="home__subtitle text-cs">
            안녕하세요. <span>제 이름은</span>
          </p>
          <h2 className="home__title text-cs animate__animated animate__flipInX">
            <span>{home.name}</span>
          </h2>
          <p className="home__job">
            <span className="text-cs">
              리액트 <b>web developer</b>
            </span>
          </p>
          {/* 설명 */}
          <p className="home__text">{home.description}</p>
          {/* 버튼2 */}
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
            <a
              href="https://instinctive-answer-8a6.notion.site/74e393256dd24977beb8733d1fc23937"
              target="_blank"
              className="home__social-link"
              rel="noopener noreferrer"
            >
              <GiNotebook fontSize={32} />
            </a>
          </div>
          {/* 버튼3 */}
          <div className="home__btns">
            <Link to="/cv" className="btn text-cs">
              View Cv
            </Link>
            <a
              className="hero__link text-cs"
              href="#skills"
              onClick={(event) => handleClick(event, "skills")}
            >
              My Skills
            </a>
          </div>
        </div>
        <div className="home__img-wrapper">
          {/* 이미지 영역 */}
          <div
            className={`home__banner ${isFlipped ? "flipped" : ""}`}
            onClick={handleBannerClick}
            title="Click!"
          >
            <div className="home__banner__front">
              <img src="/Avatar1.png" alt="" className="home__profile" />
            </div>
            <div className="home__banner__back">
              <img src="" alt="" className="home__profile" />
            </div>
          </div>
          <p className="home__data home__data-one">
            <span className="text-lg">
              2 <b>+</b>
            </span>
            <span className="text-sm text-cs">
              Years of <span>Experience</span>
            </span>
          </p>

          <p className="home__data home__data-two">
            <span className="text-lg">
              19<b>+</b>
            </span>
            <span className="text-sm text-cs">
              Completed <span>Portfolio</span>
            </span>
          </p>

          <img src={shapeOne} alt="" className="shape shape__1" />
          <img src={shapeTwo} alt="" className="shape shape__2" />
          <img src={shapeTwo} alt="" className="shape shape__3" />
        </div>
      </div>

      {/* 스크롤 다운 */}
      <a
        className="scroll-down"
        href="#skills"
        onClick={(event) => handleClick(event, "skills")}
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
