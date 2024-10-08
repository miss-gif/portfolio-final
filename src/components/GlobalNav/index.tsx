import { PiStarFourFill } from "react-icons/pi";
import useActiveSection from "../../hooks/useActiveSection";
import "./GlobalNav.scss";
import { sections } from "./navSection";

const GlobalNav = () => {
  const { activeSection, handleClick } = useActiveSection(sections);

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
