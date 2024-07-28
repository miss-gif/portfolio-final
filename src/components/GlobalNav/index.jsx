import React, { useState, useEffect, useRef } from "react";
import "./GlobalNav.scss";

const GlobalNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const sections = [
    "home",
    "services",
    "skills",
    "project",
    "portfolio",
    "resume",
    "contact",
  ];
  const observer = useRef(null);

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

  return (
    <nav className="global-nav">
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={activeSection === section ? "active" : ""}
          >
            <a href={`#${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GlobalNav;
