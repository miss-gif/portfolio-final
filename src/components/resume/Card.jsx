import React, { useState, useEffect } from "react";

const Card = ({ title, subtitle, date, description, allOpen }) => {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setShowInfo(allOpen);
  }, [allOpen]);

  return (
    <div className="resume__item">
      <div
        className="resume__header"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        <div className="resume__subtitle">{title}</div>
        <div className="resume__icon">{showInfo ? "-" : "+"}</div>
      </div>
      <div className={`${showInfo ? "show-content" : ""} resume__content`}>
        <div className="resume__date-title">
          <h3 className="resume__title">{subtitle}</h3>
          <span className="resume__date text-cs">{date}</span>
        </div>
        <p className="resume__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
