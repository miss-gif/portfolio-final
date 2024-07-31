const headerHeight = 100; // 헤더 높이

export const handleClick = (event, section) => {
  event.preventDefault();
  const element = document.getElementById(section);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
};
