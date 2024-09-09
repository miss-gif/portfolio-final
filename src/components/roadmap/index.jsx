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
import recoil from "../../assets/skill/recoil.svg";
import nextjs from "../../assets/skill/NextJS-Light.svg";
import supabase from "../../assets/skill/supabase.svg";
import native from "../../assets/skill/react-native.svg";

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
          <div className="flex gap-10">
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />
            <img src={sass} alt="Sass" />
          </div>
          <p>텍스트</p>
        </div>

        <div className="horizontal-item">
          <div className="flex gap-10">
            <img src={react} alt="React" />
            <img src={reactrouter} alt="React Router" />
            <img src={emotion} alt="Emotion" />
            <img src={axios} alt="Axios" />
            <img src={recoil} alt="Recoil" />
          </div>
          <p>텍스트</p>
        </div>

        <div className="horizontal-item">
          <div className="flex gap-10">
            <img src={redux} alt="Redux" />
            <img src={ts} alt="TypeScript" />
            <img src={swagger} alt="Swagger" />
            <img src={mui} alt="Material UI" />
          </div>
          <p>텍스트</p>
        </div>

        <div className="horizontal-item">
          <div className="flex gap-10">
            <img src={reactQuery} alt="React Query" />
            <img src={reacthookform} alt="React Hook Form" />
            <img src={zod} alt="Zod" />
          </div>
          <p>텍스트</p>
        </div>

        <div className="horizontal-item">
          <div className="flex gap-10">
            <img src={firebase} alt="Firebase" />
            <img src={zustand} alt="Zustand" />
          </div>
          <p>텍스트</p>
        </div>

        <div className="horizontal-item">
          <div className="flex gap-10">
            <img src={nextjs} alt="nextjs" />
            <img src={tailwind} alt="Tailwind CSS" />
            <img src={supabase} alt="supabase" />
          </div>
          <p>텍스트</p>
        </div>

        <div className="horizontal-item">
          <div className="flex gap-10">
            <img src={native} alt="React Native" />
          </div>
          <p>텍스트</p>
        </div>

        <div className="horizontal-item">
          <div className="flex gap-10">
            <img src={figma} alt="Figma" />
          </div>
          <p>텍스트</p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
