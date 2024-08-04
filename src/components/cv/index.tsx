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
