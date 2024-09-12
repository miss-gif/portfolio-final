import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Items = ({ projectItems, openModal }) => {
  return (
    <>
      {projectItems.map((item) => {
        const {
          id,
          img,
          category,
          title,
          description,
          date,
          demoUrl,
          githubUrl,
        } = item;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
            // onClick={() => openModal(item)}
          >
            <div className="portfolio__item">
              <div className="portfolio__img-wrapper">
                <img src={img} alt="" className="portfolio__img" />
              </div>
              <ul className="portfolio__category text-cs">
                {category.map((item, index) => (
                  <li key={index} className="category__item">
                    <span>#{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="portfolio__title">
                {title}
                <span className="text-sm">({date})</span>
              </h3>
              <p className="portfolio__description">{description}</p>
              <div className="techStack__wrap">
                <ul className="techStack__list">
                  {item.techStack.map((techStack, index) => (
                    <li key={index} className="techStack__item">
                      <img src={techStack} alt={techStack} />
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={demoUrl}
                    className="link py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dome
                  </a>
                  <a
                    href={githubUrl}
                    className="link py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
