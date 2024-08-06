import React, { useState } from "react";
import { sections } from "../GlobalNav/navSection";
import useActiveSection from "../../hooks/useActiveSection";
import "./Header.scss";
import { IoIosClose, IoIosMenu } from "react-icons/io";

type SectionType = string;

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // nav__mobile 열림 상태
  const { activeSection, handleClick } = useActiveSection(sections);

  // 메뉴 열기
  const openNav = () => {
    setIsNavOpen(true);
    document.body.style.overflow = "hidden";
  };

  // 메뉴 닫기
  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto";
  };

  // 메뉴 항목 클릭 시 닫기
  const handleNavItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: SectionType
  ) => {
    handleClick(event, section);
    closeNav();
  };

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
        <nav className={`nav__mobile ${isNavOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={closeNav}>
            <IoIosClose />
          </button>
          <ul className="nav__mobile__list">
            {sections.map((section: SectionType) => (
              <li key={section} className="nav__mobile__item">
                <a
                  className="nav__mobile__link"
                  href={`#${section}`}
                  onClick={(event) => handleNavItemClick(event, section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="menu" onClick={openNav}>
          <IoIosMenu fontSize={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;
