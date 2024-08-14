import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import useActiveSection from "../../hooks/useActiveSection";
import useAuth from "../../hooks/useAuth";
import { sections } from "../GlobalNav/navSection";
import "./Header.scss";

type SectionType = string;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false); // nav__mobile 열림 상태
  const { activeSection, handleClick } = useActiveSection(sections);
  const { userCurrent, userData, setUserCurrent } = useAuth();
  const handleLogout = async () => {
    // FB 에서 로그아웃
    await signOut(auth);
    setUserCurrent(null);
    // 로그인으로 이동
    navigate("/");
  };

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

        {!userCurrent ? (
          <Link to="/auth">로그인</Link>
        ) : (
          <button
            onClick={() => {
              handleLogout();
            }}
            className="p-2 bg-red-500 rounded text-white hover:bg-red-600"
          >
            로그아웃
          </button>
        )}

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
