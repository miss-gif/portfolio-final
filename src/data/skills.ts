// 객체 타입 정의
interface Skills {
  id: number;
  name: string;
  percentage: number;
  description: string;
}

export const skills: Skills[] = [
  {
    id: 1,
    name: "HTML",
    percentage: 88,
    description: "웹표준, 웹접근성, seo",
  },

  {
    id: 2,
    name: "CSS",
    percentage: 75,
    description: "레이아웃, 반응형",
  },

  {
    id: 3,
    name: "JavaScript",
    percentage: 90,
    description: "es6",
  },

  {
    id: 4,
    name: "React",
    percentage: 75,
    description: "리액트 훅, 커스텀훅, 최적화",
  },

  {
    id: 5,
    name: "TypeScript",
    percentage: 70,
    description: "타입..",
  },

  {
    id: 6,
    name: "리덕스",
    percentage: 80,
    description: "상태관리",
  },
  {
    id: 7,
    name: "Axios",
    percentage: 80,
    description: "rest api",
  },
  {
    id: 8,
    name: "리액트쿼리",
    percentage: 80,
    description: "최적화..",
  },
  {
    id: 9,
    name: "피그마",
    percentage: 80,
    description: "디자이너와 협업이 가능",
  },
  {
    id: 10,
    name: "scss",
    percentage: 80,
    description: "css 재사용",
  },
  {
    id: 11,
    name: "emotion",
    percentage: 80,
    description: "js-in-css",
  },
  {
    id: 12,
    name: "스웨거",
    percentage: 80,
    description: "백엔드 협업",
  },
];
