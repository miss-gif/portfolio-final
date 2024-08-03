import html from "../../assets/skill/html.svg";
import css from "../../assets/skill/css.svg";
import js from "../../assets/skill/JavaScript.svg";
import react from "../../assets/skill/react.svg";
import ts from "../../assets/skill/TypeScript.svg";
import redux from "../../assets/skill/redux.svg";
import zustand from "../../assets/skill/zustand.svg";
import axios from "../../assets/skill/axios.svg";
import reactQuery from "../../assets/skill/react-query.svg";
import figma from "../../assets/skill/figma.svg";
import sass from "../../assets/skill/sass.svg";
import emotion from "../../assets/skill/emotion-light.svg";
import swagger from "../../assets/skill/swagger.svg";
import mui from "../../assets/skill/MaterialUI-Light.svg";
import reactrouter from "../../assets/skill/ReactRouter.svg";

// 객체 타입 정의
interface Skills {
  img: string | null;
  id: number;
  name: string;
  percentage: number;
  description: string;
}

export const skills: Skills[] = [
  {
    img: html,
    id: 1,
    name: "HTML",
    percentage: 88,
    description: "웹표준, 웹접근성, SEO 등 기본적인 웹 개발 요소",
  },
  {
    img: css,
    id: 2,
    name: "CSS",
    percentage: 75,
    description: "레이아웃 구성, 반응형 디자인, 스타일링",
  },
  {
    img: js,
    id: 3,
    name: "JavaScript",
    percentage: 90,
    description: "ES6+ 문법 및 비동기 프로그래밍",
  },
  {
    img: react,
    id: 4,
    name: "React",
    percentage: 75,
    description: "리액트 훅, 커스텀 훅, 컴포넌트 최적화",
  },
  {
    img: ts,
    id: 5,
    name: "TypeScript",
    percentage: 70,
    description: "정적 타입 체크, 타입 시스템",
  },
  {
    img: redux,
    id: 6,
    name: "Redux",
    percentage: 80,
    description: "상태 관리 및 미들웨어 사용",
  },
  {
    img: zustand,
    id: 7,
    name: "Zustand",
    percentage: 80,
    description: "간단한 상태 관리 라이브러리",
  },
  {
    img: axios,
    id: 8,
    name: "Axios",
    percentage: 80,
    description: "REST API와의 비동기 통신",
  },
  {
    img: reactQuery,
    id: 9,
    name: "React Query",
    percentage: 80,
    description: "데이터 패칭 및 캐싱 최적화",
  },
  {
    img: sass,
    id: 11,

    name: "Sass",
    percentage: 80,
    description: "CSS 확장 및 재사용",
  },
  {
    img: emotion,
    id: 12,
    name: "Emotion",
    percentage: 80,
    description: "CSS-in-JS 스타일링",
  },
  {
    img: swagger,
    id: 13,
    name: "Swagger",
    percentage: 80,
    description: "백엔드 API 문서화 및 테스트",
  },
  {
    img: figma,
    id: 10,
    name: "Figma",
    percentage: 80,
    description: "디자이너와의 협업 및 UI 디자인",
  },
];
