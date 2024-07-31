import React, { useState } from "react";
import { BsExclamationDiamondFill } from "react-icons/bs";
import "./TooltipButton.scss";

const TooltipButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="tooltip__container">
      <button
        onClick={handleToggle}
        className={`tooltip__button ${isActive ? "active" : ""}`}
        title="설명보기"
      >
        <BsExclamationDiamondFill />
      </button>
      <div className={`tooltip__box ${isActive ? "visible" : ""}`}>
        KDT 수강생 FE/BE 팀이 협업하여 실무에 가까운 환경에서 실제 서비스를
        개발하는 프로젝트입니다. <br /> 정해진 기간 내에 서비스 완성을 목표로
        하며, 실무 경험과 협업 능력을 향상시키는 기회를 제공합니다.
      </div>
    </div>
  );
};

export default TooltipButton;
