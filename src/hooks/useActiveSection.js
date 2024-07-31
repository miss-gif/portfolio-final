/* observer 관련 훅 */

import { useState, useEffect, useRef } from "react";

function useActiveSection(sections, headerHeight = 100) {
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.25,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [sections]);

  const handleClick = (event, section) => {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return { activeSection, handleClick };
}

export default useActiveSection;
