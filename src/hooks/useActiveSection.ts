import { useEffect, useRef, useState } from "react";

function useActiveSection(sections: string[], headerHeight: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [sections]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: string
  ) => {
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
