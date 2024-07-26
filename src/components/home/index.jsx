import React from "react";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaGithub } from "react-icons/fa";
import "./home.scss";

const Home = () => {
  return (
    <section className="home " id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            안녕하세요. <span>저는</span>
          </p>
          <h1 className="home__title text-cs">
            <span>곽도억</span>
          </h1>
          <p className="home__job">
            <span className="text-cs">
              리액트 <b>웹 개발자</b>
            </span>
          </p>
          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src="" alt="" className="home__profile" />
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

          <p className="home__text">
            웹 개발은 끊임없이 변화하지만, 저는 기술적인 숙련도뿐 아니라 사용자
            중심의 사고를 중요하게 생각합니다. 기능성과 심미성을 갖춘 웹사이트
            제작을 추구합니다. <br />제 포트폴리오에서 경험과 역량을 확인하실 수
            있습니다.
          </p>
          <div className="home__socials">
            <a
              href="https://github.com/miss-gif"
              target="_blank"
              className="home__social-link"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="home__btns">
            <a href="#" className="btn text-cs">
              Download Cv
            </a>
            <a href="#" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
