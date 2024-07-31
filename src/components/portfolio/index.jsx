import React, { useState } from "react";
import List from "./List";
import Items from "./Items";
import { portfolio } from "../../data/portfolio.js";
import "./portfolio.scss";
import { AnimatePresence } from "framer-motion";
import PortfolioDetailModal from "../modal/PortfolioDetailModal";

const allCategories = [
  ...new Set(portfolio.flatMap((project) => project.category)),
];

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(portfolio);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [isModal, setIsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModal(true);
    document.body.style.overflow = "hidden"; // 스크롤 정지
  };

  const closeModal = () => {
    setIsModal(false);
    setSelectedItem(null);
    document.body.style.overflow = "auto"; // 스크롤 해제
  };

  const filterItems = (category) => {
    let updatedCategories;
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setProjectItems(portfolio);
    } else {
      const newProjectItems = portfolio.filter((item) =>
        updatedCategories.every((cat) => item.category.includes(cat))
      );
      setProjectItems(newProjectItems);
    }
  };

  const selectAll = () => {
    setSelectedCategories([]);
    setProjectItems(portfolio);
  };

  return (
    <>
      <PortfolioDetailModal
        isOpen={isModal}
        onRequestClose={closeModal}
        item={selectedItem}
      />
      <section className="portfolio section">
        <h2 className="section__title text-cs" id="portfolio">
          Portfolio
        </h2>
        <p className="section__subtitle">
          My <span>Cases</span>
        </p>
        <List
          categories={allCategories}
          filterItems={filterItems}
          selectedCategories={selectedCategories}
          selectAll={selectAll}
        />
        <div className="portfolio__container container grid">
          <AnimatePresence initial={false}>
            <Items projectItems={projectItems} openModal={openModal} />
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
