import profileImg from "../../assets/sample.gif";
import "./cv.scss";
import Left from "./Left";
import Right from "./Right";
import SkipNavigation from "./SkipNavigation";

const Cv = () => {
  return (
    <div className="cv">
      <h2 className="hidden">이력서</h2>
      <div className="inner">
        <SkipNavigation />
        <div className="cv__container">
          <div className="cv__top">
            <div className="profile">
              <div className="profile__img-container">
                <img src={profileImg} alt="Profile" className="profile__img" />
              </div>
              <div className="profile__info">
                <div className="profile__name">
                  곽<span className="profile__highlight">도억</span>
                </div>
                <div className="profile__description">리액트 웹 개발자</div>
                <p>
                  저는 리액트 기반의 웹 개발자로서 사용자 중심의 사고를 바탕으로
                  기능성과 심미성을 모두 갖춘 웹사이트를 제작합니다. <br />
                  다양한 기술 스택을 활용하여 효율적인 개발 방법을 익히고,
                  복잡한 문제를 해결하며 개발 역량을 지속적으로 향상시키고
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="cv__bottom">
            <Left />
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
