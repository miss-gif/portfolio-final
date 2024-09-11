import React from "react";

interface ListProps {
  categories: string[];
  filterItems: (category: string) => void;
  selectedCategories: string[];
  selectAll: () => void;
}

const List: React.FC<ListProps> = ({
  categories,
  filterItems,
  selectedCategories,
  selectAll,
}) => {
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

      {categories.map((category, index) => (
        <div
          key={index}
          className="portfolio__list-item text-cs checkbox-style text-2xl"
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
