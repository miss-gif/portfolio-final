import React, { useState, useEffect, useRef } from "react";
import "./GlobalNav.scss";
import { sections } from "../../data/navSection";
import { PiStarFourFill } from "react-icons/pi";

const GlobalNav = () => {
  const [activeSection, setActiveSection] = useState("");

  const observer = useRef(null);
  const headerHeight = 100; // 헤더 높이

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // 섹션이 화면의 절반 이상 보일 때 감지
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleClick = (event, section) => {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="global-nav">
      <ul className="global-nav__list">
        {sections.map((section) => (
          <li
            key={section}
            className={activeSection === section ? "active" : ""}
          >
            <a
              className="global-nav__link"
              href={`#${section}`}
              onClick={(event) => handleClick(event, section)}
            >
              <PiStarFourFill />
            </a>
            <span className="tooltip">{section}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlobalNav;
