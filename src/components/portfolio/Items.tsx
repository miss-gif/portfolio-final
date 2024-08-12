import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Items = ({ projectItems, openModal }) => {
  return (
    <>
      {projectItems.map((item) => {
        const { id, img, category, title, description } = item;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
            onClick={() => openModal(item)}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>
            <ul className="portfolio__category text-cs">
              {item.category.map((category, index) => (
                <li key={index} className="category__item">
                  <span>#{category}</span>
                </li>
              ))}
            </ul>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <ul className="techStack__list">
              {item.techStack.map((techStack, index) => (
                <li key={index} className="techStack__item">
                  <img src={techStack} alt={techStack} />
                </li>
              ))}
            </ul>
            <a href="#" className="link">
              View More
              <FaArrowRight className="link__icon" />
            </a>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
