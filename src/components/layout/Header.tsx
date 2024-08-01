import React from "react";
import { sections } from "../../data/navSection";
import useActiveSection from "../../hooks/useActiveSection";
import "./Header.scss";

type SectionType = string;

const Header: React.FC = () => {
  const { activeSection, handleClick } = useActiveSection(sections);

  return (
    <header className="header">
      <div className="container">
        <h1>
          <a href="/#" className="logo">
            <img src="/logo_white.png" alt="Logo" />
          </a>
        </h1>
        <nav>
          <ul className="nav__list">
            {sections.map((section: SectionType) => (
              <li
                key={section}
                className={activeSection === section ? "active" : ""}
              >
                <a
                  className="nav__link"
                  href={`#${section}`}
                  onClick={(event) => handleClick(event, section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
