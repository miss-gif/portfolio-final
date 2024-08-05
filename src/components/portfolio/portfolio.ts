import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.png";
import Project6 from "../../assets/project6.png";
import Project7 from "../../assets/project7.png";
import Project8 from "../../assets/project8.png";
import Project9 from "../../assets/project9.png";
import Project10 from "../../assets/project10.png";
import Project11 from "../../assets/project11.png";

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
import reactrouter from "../../assets/skill/ReactRouter.svg";

interface PortfolioItem {
  id: number;
  img: string; // img는 일반적으로 이미지의 경로나 URL을 나타내는 문자열입니다.
  category: string[]; // 여러 카테고리를 나타내기 위해 문자열 배열을 사용합니다.
  title: string;
  description: string;
  techStack: string[];
}

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    img: Project1,
    category: ["HTML"],
    techStack: [html, sass, js],
    title: "애플 웹사이트",
    description: "인터랙션 구현",
  },
  {
    id: 2,
    img: Project2,
    category: ["React", "Typescript"],
    techStack: [html, sass, js],
    title: "Gooir",
    description: "디자인 파일을 제공 받아 제작됨",
  },
  {
    id: 3,
    img: Project3,
    category: ["React", "Redux", "반응형"],
    techStack: [react, reactrouter, sass, emotion],
    title: "감정 다이어리",
    description: "감정 다이어리 웹앱",
  },
  {
    id: 4,
    img: Project4,
    category: ["React", "Recoil", "SCSS"],
    techStack: [react, reactrouter, sass, emotion],
    title: "나라 정보를 검색하는..",
    description: "API를 사용해서 간단한 나라 정보를 받는..",
  },
  {
    id: 5,
    img: Project5,
    category: ["HTML", "CSS", "JS"],
    techStack: [html, sass, js],
    title: "스타벅스 클론코딩",
    description: "스타벅스 홈페이지를 클론 코딩",
  },
  {
    id: 6,
    img: Project6,
    category: ["HTML", "CSS", "반응형"],
    techStack: [html, sass],
    title: "쇼핑몰",
    description: "일반적인 쇼핑몰의..",
  },
  {
    id: 7,
    img: Project7,
    category: ["HTML", "CSS", "반응형"],
    techStack: [react, reactrouter, sass, emotion],
    title: "디즈니 플러스 클론코딩",
    description: "디즈니 플러스 클론코딩..",
  },
  {
    id: 8,
    img: Project8,
    category: ["HTML", "CSS", "반응형"],
    techStack: [react],
    title: "카카오브래인 클론코딩",
    description: "카카오브래인 클론코딩",
  },
  {
    id: 9,
    img: Project9,
    category: ["HTML", "CSS", "반응형"],
    techStack: [react],
    title: "메카스마",
    description: "메카스마 클론코딩",
  },
  {
    id: 10,
    img: Project10,
    category: ["HTML", "CSS", "반응형"],
    techStack: [react],
    title: "메가박스",
    description: "메가박스 클론코딩",
  },
  {
    id: 11,
    img: Project11,
    category: ["HTML", "CSS", "반응형"],
    techStack: [react],
    title: "표준 웹사이트",
    description: "표준 웹사이트의 기본형을",
  },
];
