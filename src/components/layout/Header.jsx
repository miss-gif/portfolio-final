import React from "react";
import "./Header.scss";

import { links } from "../../data/data";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src="" alt="" />
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
    </header>
  );
};

export default Header;
