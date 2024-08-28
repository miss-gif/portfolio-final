import React from "react";

const List = ({ categories, filterItems, selectedCategories, selectAll }) => {
  const handleSelectAll = () => {
    selectAll();
  };

  return (
    <div className="portfolio__list container">
      <input
        id="seeAll"
        type="checkbox"
        checked={selectedCategories.length === 0}
        onChange={handleSelectAll}
      />
      <label htmlFor="seeAll" className="portfolio__list-item text-cs">
        전체보기
      </label>
      {categories.map((category, index) => (
        <div
          key={index}
          className="portfolio__list-item text-cs checkbox-style"
        >
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            checked={selectedCategories.includes(category)}
            onChange={() => filterItems(category)}
          />
          <label htmlFor={`checkbox-${index}`}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default List;
