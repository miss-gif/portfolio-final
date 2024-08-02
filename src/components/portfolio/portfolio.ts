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

interface PortfolioItem {
  id: number;
  img: string; // img는 일반적으로 이미지의 경로나 URL을 나타내는 문자열입니다.
  category: string[]; // 여러 카테고리를 나타내기 위해 문자열 배열을 사용합니다.
  title: string;
  description: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    img: Project1,
    category: [
      "React",
      "Typescript",
      "협업 능력",
      "문제 해결 능력",
      "HTML",
      "CSS",
      "JS",
      "반응형",
      "Next",
      "Redux",
      "Zustand",
      "Recoil",
      "API",
      "성능 최적화",
      "SEO",
      "AWS",
      "Firebase",
      "웹 접근성",
      "웹 표준",
      "UI/UX 디자인",
    ],
    title: "Zorro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    img: Project2,
    category: ["React", "Typescript"],
    title: "Gooir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    img: Project3,
    category: ["React", "Redux", "반응형"],
    title: "Explore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    img: Project4,
    category: ["React", "Recoil", "SCSS"],
    title: "Mozar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 5,
    img: Project5,
    category: ["HTML", "CSS", "JS"],
    title: "Stay Fit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 6,
    img: Project6,
    category: ["HTML", "CSS", "반응형"],
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 7,
    img: Project7,
    category: ["HTML", "CSS", "반응형"],
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 8,
    img: Project8,
    category: ["HTML", "CSS", "반응형"],
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 9,
    img: Project9,
    category: ["HTML", "CSS", "반응형"],
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 10,
    img: Project10,
    category: ["HTML", "CSS", "반응형"],
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 11,
    img: Project11,
    category: ["HTML", "CSS", "반응형"],
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];
