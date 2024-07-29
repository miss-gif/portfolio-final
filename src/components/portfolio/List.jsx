import React from "react";

const List = ({ categories, filterItems, selectedCategories, selectAll }) => {
  const handleSelectAll = () => {
    selectAll();
  };

  return (
    <div className="portfolio__list">
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
            id={`checkbox-${index}`} // 고유한 ID 부여
            checked={selectedCategories.includes(category)}
            onChange={() => filterItems(category)}
          />
          <label htmlFor={`checkbox-${index}`}>{category}</label>
          {/* for 속성에 ID 설정 */}
        </div>
      ))}
    </div>
  );
};

export default List;
