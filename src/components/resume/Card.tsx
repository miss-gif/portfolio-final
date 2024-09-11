import React from "react";

interface CardProps {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  subtitle,
  date,
  description,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="resume__item">
      <div className="resume__header" onClick={toggleOpen}>
        <div className="resume__subtitle">{title}</div>
        <div className="resume__icon">{isOpen ? "-" : "+"}</div>
      </div>
      <div className={`${isOpen ? "show-content" : ""} resume__content`}>
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
