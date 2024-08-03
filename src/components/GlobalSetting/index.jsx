import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./GlobalSetting.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";

const GlobalSetting = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`global-setting ${isDarkMode ? "theme-dark" : "theme-light"}`}
    >
      <main className="global-setting__main-content">
        <section className="content">
          <Outlet />
        </section>
      </main>

      <div className="global-setting__controller">
        <button
          className="theme-switch"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineModeNight />}
        </button>
        <button
          className="scroll-button scroll-button--top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <IoIosArrowUp />
        </button>
        <button
          className="scroll-button scroll-button--bottom"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
        >
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default GlobalSetting;
