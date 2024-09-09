import { gsap } from "gsap";
import { useRef } from "react";
import "./OneTest.css";

const OneTest = () => {
  const circleRef = useRef();
  const iconRefs = useRef([]);

  const handleClick = () => {
    // 원형 요소 움츠림 효과
    gsap.to(circleRef.current, {
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        // 원형 요소가 다시 펼쳐지면서 아이콘 확산
        gsap.to(circleRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });

        // 아이콘들이 원형 뒤에서 중앙에서 튀어나오는 느낌으로 확산
        const radius = 300; // 아이콘이 퍼질 반경

        iconRefs.current.forEach((icon, index) => {
          const angle = (index / iconRefs.current.length) * Math.PI * 2;
          gsap.fromTo(
            icon,
            {
              x: 0,
              y: 0,
              scale: 0,
              opacity: 0,
            },
            {
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: 0.1 * index,
            }
          );
        });
      },
    });
  };

  const handleMouseEnter = (icon) => {
    gsap.to(icon, {
      scale: 1.2,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (icon) => {
    gsap.to(icon, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      {/* 원형 요소 */}
      <div
        className="circle bg-blue-500 w-80 h-80 rounded-full flex justify-center items-center relative"
        ref={circleRef}
        onClick={handleClick}
      >
        {/* 아이콘들 */}
        <div className="icons absolute inset-0 flex justify-center items-center">
          {["HTML", "CSS", "JavaScript", "React"].map((icon, index) => (
            <div
              key={icon}
              ref={(el) => (iconRefs.current[index] = el)}
              className="icon absolute bg-blue-800 w-60 h-60 rounded-full text-center leading-12 text-white opacity-0"
              onMouseEnter={() => handleMouseEnter(iconRefs.current[index])}
              onMouseLeave={() => handleMouseLeave(iconRefs.current[index])}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneTest;
