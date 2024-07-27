import React from "react";
import "./Header.scss";

import { links } from "../../data/data";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <div className="logo">
            <img src="../../../public/logo_white.png" alt="" />
          </div>
        </h1>
        <nav>
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <a href={path}>{name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
