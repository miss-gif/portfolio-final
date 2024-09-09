import html from "../../assets/skill/HTML.svg";
import css from "../../assets/skill/CSS.svg";
import js from "../../assets/skill/JavaScript.svg";
import react from "../../assets/skill/React.svg";
import ts from "../../assets/skill/TypeScript.svg";
import redux from "../../assets/skill/Redux.svg";
import zustand from "../../assets/skill/Zustand.svg";
import axios from "../../assets/skill/Axios.svg";
import reactQuery from "../../assets/skill/React-Query.svg";
import figma from "../../assets/skill/Figma.svg";
import sass from "../../assets/skill/Sass.svg";
import emotion from "../../assets/skill/Emotion-Light.svg";
import swagger from "../../assets/skill/Swagger.svg";
import mui from "../../assets/skill/MaterialUI-Light.svg";
import reactrouter from "../../assets/skill/React-Router.svg";
import firebase from "../../assets/skill/Firebase-Light.svg";
import tailwind from "../../assets/skill/TailwindCSS-Light.svg";
import zod from "../../assets/skill/Zod.svg";
import reacthookform from "../../assets/skill/React-Hook-Form.svg";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import "./index.scss";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const RoadMap = () => {
  const horizontalRef = useRef();

  useGSAP(
    () => {
      // 가로 스크롤 애니메이션
      const horizontalSections = gsap.utils.toArray(".horizontal-item");
      const horizontalTween = gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: () =>
            `+=${horizontalRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 세로 스크롤 애니메이션, horizontalTween과 연동
      gsap.utils.toArray(".vertical-item").forEach((item) => {
        gsap.to(item, {
          y: 100,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            containerAnimation: horizontalTween, // 가로 스크롤 애니메이션과 연동
          },
        });
      });
    },
    { scope: horizontalRef }
  );

  return (
    <div className="road-map">
      {/* 가로 스크롤 컨테이너 */}
      <div className="horizontal-container" ref={horizontalRef}>
        <div className="horizontal-item">
          <p>학습 로드맵</p>
        </div>
        <div className="horizontal-item">
          <img src={html} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="horizontal-item">
          <img src={css} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="horizontal-item">
          <img src={js} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="horizontal-item">
          <img src={react} alt="React" />
          <p>React</p>
        </div>
        <div className="horizontal-item">
          <img src={ts} alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        <div className="horizontal-item">
          <img src={redux} alt="Redux" />
          <p>Redux Toolkit</p>
        </div>
        <div className="horizontal-item">
          <img src={zustand} alt="Zustand" />
          <p>Zustand</p>
        </div>
        <div className="horizontal-item">
          <img src={axios} alt="Axios" />
          <p>Axios</p>
        </div>
        <div className="horizontal-item">
          <img src={reactQuery} alt="React Query" />
          <p>React Query</p>
        </div>
        <div className="horizontal-item">
          <img src={figma} alt="Figma" />
          <p>Figma</p>
        </div>
        <div className="horizontal-item">
          <img src={sass} alt="Sass" />
          <p>Sass</p>
        </div>
        <div className="horizontal-item">
          <img src={emotion} alt="Emotion" />
          <p>Emotion</p>
        </div>
        <div className="horizontal-item">
          <img src={swagger} alt="Swagger" />
          <p>Swagger</p>
        </div>
        <div className="horizontal-item">
          <img src={mui} alt="Material UI" />
          <p>Material UI</p>
        </div>
        <div className="horizontal-item">
          <img src={reactrouter} alt="React Router" />
          <p>React Router</p>
        </div>
        <div className="horizontal-item">
          <img src={firebase} alt="Firebase" />
          <p>Firebase</p>
        </div>
        <div className="horizontal-item">
          <img src={tailwind} alt="Tailwind CSS" />
          <p>Tailwind CSS</p>
        </div>
        <div className="horizontal-item">
          <img src={zod} alt="Zod" />
          <p>Zod</p>
        </div>
        <div className="horizontal-item">
          <img src={reacthookform} alt="React Hook Form" />
          <p>React Hook Form</p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
