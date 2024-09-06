import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PortfolioDetailModal from "./PortfolioDetailModal";
import Items from "./Items";
import List from "./List";
import { portfolio } from "./portfolio";
import "./portfolio.scss";

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
        updatedCategories.every((cat) => item.category.includes(cat))
      );
      setProjectItems(newProjectItems);
    }
  };

  const selectAll = () => {
    setSelectedCategories([]);
    setProjectItems(portfolio);
  };

  const defaultCategories = [
    "리액트",
    "비동기통신",
    "라우터",
    "전역상태관리",
    "타입스크립트",
    "반응형",
  ];

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
