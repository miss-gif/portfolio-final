import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Items from "./Items";
import List from "./List";
import { portfolio } from "./portfolio";
import "./portfolio.scss";
import PortfolioDetailModal from "./PortfolioDetailModal";

const allCategories = [
  ...new Set(portfolio.flatMap((project) => project.date)),
];

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(portfolio);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [isModal, setIsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModal(true);
    document.documentElement.style.overflow = "hidden"; // 스크롤 정지
  };

  const closeModal = () => {
    setIsModal(false);
    setSelectedItem(null);
    document.documentElement.style.overflow = "auto"; // 스크롤 해제
  };

  const filterItems = (categories) => {
    let updatedCategories;
    if (Array.isArray(categories)) {
      updatedCategories = categories;
    } else {
      updatedCategories = selectedCategories.includes(categories)
        ? selectedCategories.filter((cat) => cat !== categories)
        : [...selectedCategories, categories];
    }

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setProjectItems(portfolio);
    } else {
      const newProjectItems = portfolio.filter((item) =>
        updatedCategories.some((cat) => item.date.includes(cat))
      );
      setProjectItems(newProjectItems);
    }
  };

  const selectAll = () => {
    setSelectedCategories([]);
    setProjectItems(portfolio);
  };

  // 디폴트 필터링 카테고리
  // const defaultCategories = ["2024", "2023", "2022"];

  useEffect(() => {
    // filterItems(defaultCategories);
  }, []);

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
          My <span>result</span>
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
