import html from "../../assets/skill/HTML.svg";
import css from "../../assets/skill/CSS.svg";
import js from "../../assets/skill/JavaScript.svg";
import react from "../../assets/skill/React.svg";
import ts from "../../assets/skill/TypeScript.svg";
import redux from "../../assets/skill/Redux.svg";
import zustand from "../../assets/skill/Zustand.svg";
import axios from "../../assets/skill/Axios.svg";
import reactQuery from "../../assets/skill/react-query.svg";
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

      // 배경 색상 전환 애니메이션
      gsap.utils.toArray(".horizontal-item").forEach((section, index) => {
        gsap.to(section, {
          backgroundColor: index % 2 === 0 ? "#334155" : "#424B5A",
          duration: 1.5, // 색상 전환에 시간을 추가
          ease: "power1.inOut", // 부드러운 전환 효과를 위한 이징 함수 추가
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            containerAnimation: horizontalTween,
          },
        });
      });

      // 기술 아이콘 회전 애니메이션
      gsap.utils.toArray(".horizontal-item img").forEach((img) => {
        gsap.fromTo(
          img,
          { rotate: 0 },
          {
            rotate: 360,
            duration: 2, // 회전이 좀 더 명확하게 보이도록 지속 시간 추가
            scrollTrigger: {
              trigger: img,
              start: "top 90%", // 트리거 시작점을 뷰포트와 좀 더 가깝게 설정
              end: "top 10%", // 끝점도 넓게 잡아 스크롤 범위 확장
              scrub: 1, // 스크롤과 애니메이션을 비례해서 동작
              containerAnimation: horizontalTween,
            },
          }
        );
      });

      // 텍스트 등장 애니메이션
      gsap.utils.toArray(".horizontal-item p").forEach((text) => {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            containerAnimation: horizontalTween,
          },
        });
      });

      // 아이콘 마우스 인터랙션 애니메이션
      gsap.utils.toArray(".horizontal-item p").forEach((img) => {
        // 마우스 호버 시 회전 및 크기 변화
        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.2, // 확대
            duration: 0.5,
            ease: "power1.out",
          });
        });

        // 마우스 떠났을 때 원상태로 복구
        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1, // 원래 크기
            duration: 0.5,
            ease: "power1.out",
          });
        });
      });
    },

    { scope: horizontalRef }
  );

  const roadMapData = [
    {
      title: "웹 개발의 기초",
      images: [html, css, js, sass],
      description: [
        "HTML과 CSS로 웹의 기초를 다집니다.",
        "JavaScript로 동적인 기능을 더하고, Sass로 스타일 관리를 최적화합니다.",
      ],
    },
    {
      title: "유연한 SPA 구축",
      images: [react, reactrouter, emotion, axios, recoil],
      description: [
        "React로 컴포넌트를 재사용하며, Router로 페이지 전환을 관리합니다.",
        "Emotion으로 동적 스타일을 처리하고, Axios와 Recoil로 데이터와 상태를 간결하게 관리합니다.",
      ],
    },
    {
      title: "복잡한 상태 관리",
      images: [redux, ts, mui],
      description: [
        "Redux Toolkit으로 상태 관리를 체계화하고, TypeScript로 안전성을 강화합니다.",
        "Material UI로 일관된 UI를 빠르게 구축합니다.",
      ],
    },
    {
      title: "성능 최적화",
      images: [reactQuery, reacthookform, zod],
      description: [
        "React Query로 서버 데이터를 효율적으로 캐싱하고,",
        "Hook Form과 Zod로 폼의 상태와 유효성 검사를 간소화합니다.",
      ],
    },
    {
      title: "빠른 개발 도구",
      images: [firebase, zustand],
      description: [
        "Firebase로 인증과 데이터 관리를 간소화하고,",
        "Zustand로 가벼운 상태 관리를 구현합니다.",
      ],
    },
    {
      title: "최신 기술 습득",
      images: [nextjs, tailwind, supabase],
      description: [
        "Next.js(15+)로 SSR과 ISR을 학습 중입니다.",
        "Tailwind CSS로 생산성을 높였습니다.",
        "Supabase로 빠른 데이터베이스 구축을 학습 중입니다.",
      ],
    },
    {
      title: "모바일 개발 시작",
      images: [native],
      description: [
        "React Native를 사용한 크로스 플랫폼 모바일 앱을 개발을 학습 중입니다.",
      ],
    },
    {
      title: "효율적인 협업",
      images: [figma, swagger],
      description: [
        "Figma로 실시간 협업을 하고, Swagger로 백엔드와 소통을 원활하게 합니다.",
      ],
    },
  ];

  return (
    <div className="road-map">
      {/* 가로 스크롤 컨테이너 */}

      <div className="horizontal-container" ref={horizontalRef}>
        <div className="horizontal-item">
          <h2 className="text-9xl">학습 로드맵</h2>
        </div>
        {roadMapData.map((chapter, index) => (
          <div className="horizontal-item chapter" key={index}>
            <div className="chapter__title">
              <h3 className="text-6xl">{chapter.title}</h3>
            </div>
            <div className="flex gap-10">
              {chapter.images.map((image, idx) => (
                <img src={image} alt={chapter.title} key={idx} />
              ))}
            </div>
            <div className="chapter__text">
              {chapter.description.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
