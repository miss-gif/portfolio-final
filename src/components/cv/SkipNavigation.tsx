import "./SkipNavigation.scss"; // SCSS 파일 import

const SkipNavigation = () => {
  return (
    <>
      <div id="u_skip">
        <a href="#details">
          <span>Details 바로가기</span>
        </a>
        <a href="#profile">
          <span>Profile 바로가기</span>
        </a>
        <a href="#projectHistory">
          <span>Project History 바로가기</span>
        </a>
        <a href="#degree">
          <span>Degree 바로가기</span>
        </a>
      </div>
    </>
  );
};

export default SkipNavigation;
