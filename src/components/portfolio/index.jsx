import React, { useState } from "react";
import List from "./List";
import Items from "./Items";
import { portfolio } from "../../data/portfolio.js";
import "./portfolio.scss";
import { AnimatePresence } from "framer-motion";

const allNavList = [
  "all",
  ...new Set(portfolio.map((project) => project.category)),
];

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(portfolio);
  const [navList, setNavList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(portfolio);
      return;
    }
    const newProjecItems = portfolio.filter(
      (item) => item.category === category
    );
    setMenuItems(newProjecItems);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Cases</span>
      </p>
      <List list={navList} filterItems={filterItems} />
      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
