// 객체 타입 정의
interface Cv {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  category: string;
}

export const resume: Cv[] = [
  {
    id: 1,
    title:
      "기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자 양성",
    subtitle: "FE Programming",
    date: "2024-03-29 ~ 2024-09-13",
    description: "과정에서 배운 내용에 대한 간략한 설명",
    category: "education",
  },
  {
    id: 2,
    title: "K-MOOC x Udemy 구독권",
    subtitle: "FE Programming",
    date: "2023-12 ~ 2024-06",
    description: "과정에서 배운 내용에 대한 간략한 설명",
    category: "education",
  },
  {
    id: 3,
    title: "[과정평가형]정보처리산업기사(자바(Java)프로그래밍 활용 웹개발)A",
    subtitle: "FE Programming",
    date: "2021-12-13 ~ 2022-05-25",
    description: "과정에서 배운 내용에 대한 간략한 설명",
    category: "education",
  },
  {
    id: 4,
    title: "패스트캠버스 프론트엔드 개발",
    subtitle: "FE Programming",
    date: "2021-12 ~ 현재 진행형",
    description: "과정에서 배운 내용에 대한 간략한 설명",
    category: "education",
  },
  {
    id: 5,
    title: "3차 프로젝트",
    subtitle: "FE Programming",
    date: "2024-07-23 ~ 2024-08-24",
    description: "경험과 배운 내용 요약",
    category: "experience",
  },
  {
    id: 6,
    title: "2차 프로젝트",
    subtitle: "FE Programming",
    date: "2024-06-23 ~ 2024-07-23",
    description: "경험과 배운 내용 요약",
    category: "experience",
  },
  {
    id: 7,
    title: "1차 프로젝트",
    subtitle: "FE Programming",
    date: "2024-05-23 ~ 2024-06-23",
    description: "경험과 배운 내용 요약",
    category: "experience",
  },
];
