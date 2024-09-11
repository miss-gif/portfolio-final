import classNames from "classnames";
import { useState } from "react";
import Card from "./Card";
import { resume } from "./resume";
import "./resume.scss";

const Resume = () => {
  // 개별 ID별로 열림 상태를 관리 (1번, 5번, 6번은 기본적으로 열림 상태)
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    1: true,
    5: true,
    6: true,
  });

  // 전체 섹션 열림/닫힘 상태를 관리
  const [isEducationOpen, setIsEducationOpen] = useState<boolean>(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState<boolean>(false);

  // 특정 항목 열기/닫기 토글
  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id], // 해당 id의 상태를 토글
    }));
  };

  // 교육 전체 열기/닫기 토글
  const toggleEducation = () => {
    const newOpenState = !isEducationOpen;
    setIsEducationOpen(newOpenState);

    // 교육 섹션의 모든 아이템 열기/닫기
    const updatedOpenItems = resume
      .filter((val) => val.category === "education")
      .reduce((acc, val) => ({ ...acc, [val.id]: newOpenState }), openItems);
    setOpenItems(updatedOpenItems);
  };

  // 경험 전체 열기/닫기 토글
  const toggleExperience = () => {
    const newOpenState = !isExperienceOpen;
    setIsExperienceOpen(newOpenState);

    // 경험 섹션의 모든 아이템 열기/닫기
    const updatedOpenItems = resume
      .filter((val) => val.category === "experience")
      .reduce((acc, val) => ({ ...acc, [val.id]: newOpenState }), openItems);
    setOpenItems(updatedOpenItems);
  };

  return (
    <section className="resume section">
      <h2 className="section__title text-cs" id="resume">
        Resume
      </h2>
      <p className="section__subtitle">
        My <span>Story</span>
      </p>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3
            className={classNames("resume__heading", {
              active: isEducationOpen,
            })}
            onClick={toggleEducation}
            title="Click!"
          >
            교육
          </h3>
          <div className="resume__items">
            {resume
              .filter((val) => val.category === "education")
              .map((val) => (
                <Card
                  key={val.id}
                  id={val.id}
                  title={val.title}
                  subtitle={val.subtitle}
                  date={val.date}
                  description={val.description}
                  isOpen={openItems[val.id] || false} // 개별 id 열림 상태 전달
                  toggleOpen={() => toggleItem(val.id)} // 열림 상태를 토글하는 함수 전달
                />
              ))}
          </div>
        </div>
        <div className="resume__group">
          <h3
            className={classNames("resume__heading", {
              active: isExperienceOpen,
            })}
            onClick={toggleExperience}
            title="Click!"
          >
            경험
          </h3>
          <div className="resume__items">
            {resume
              .filter((val) => val.category === "experience")
              .map((val) => (
                <Card
                  key={val.id}
                  id={val.id}
                  title={val.title}
                  subtitle={val.subtitle}
                  date={val.date}
                  description={val.description}
                  isOpen={openItems[val.id] || false}
                  toggleOpen={() => toggleItem(val.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
