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
    description:
      "React 및 관련 라이브러리 활용 기술, 그리고 프로젝트 중심의 프론트엔드 개발 방법을 배웠습니다. 협업 프로젝트를 통해 요구 사항 분석, 디자인 구현, 코드 최적화 등을 경험하며 현업에서 필요한 개발 역량을 강화했습니다. 특히 React 생태계를 깊이 이해하고, 사용자 중심의 인터페이스를 구현하는 데 필요한 기술들을 습득했습니다.",
    category: "education",
  },
  {
    id: 2,
    title: "K-MOOC x Udemy 구독권 (6개월)",
    subtitle: "FE Programming",
    date: "2023-12 ~ 2024-06",
    description:
      "프론트엔드 개발에 필요한 다양한 온라인 강의를 수강하며 최신 기술 트렌드와 개발 방법론을 학습했습니다.",
    category: "education",
  },
  {
    id: 3,
    title: "[과정평가형]정보처리산업기사(자바(Java)프로그래밍 활용 웹개발)A",
    subtitle: "FE Programming",
    date: "2021-12-13 ~ 2022-05-25",
    description:
      "자바를 활용한 웹 개발 과정으로, 서버 사이드 프로그래밍과 데이터베이스 연동을 학습했습니다. 프론트엔드와 백엔드의 상호작용을 이해하고, 웹 애플리케이션의 전체적인 구조를 설계하는 능력을 길렀습니다.",
    category: "education",
  },
  {
    id: 4,
    title: "패스트캠버스 프론트엔드 개발",
    subtitle: "FE Programming",
    date: "2021-12 ~ 현재 진행형",
    description:
      "프론트엔드 개발의 기초부터 심화까지 다양한 기술을 공부하고 있습니다. React를 중심으로 컴포넌트 기반 개발, 상태 관리, API 연동 등을 포함하여 최신 기술을 지속적으로 학습하고 있습니다.",
    category: "education",
  },
  {
    id: 5,
    title: "주문이요 (음식주문 플랫폼) 협업 3차 프로젝트",
    subtitle: "FE Programming",
    date: "2024-07-23 ~ 2024-08-24",
    description:
      "2차 프로젝트에서 구현한 기능을 고도화하는 작업을 진행 중입니다. 기존 시스템의 성능을 개선하고, 사용자 피드백을 반영하여 기능을 추가하며 지속적으로 서비스를 개선하고 있습니다.",
    category: "experience",
  },
  {
    id: 6,
    title: "주문이요 (음식주문 플랫폼) 협업 2차 프로젝트",
    subtitle: "FE Programming",
    date: "2024-06-23 ~ 2024-07-23",
    description:
      "음식 주문 플랫폼을 개발하며 프로젝트를 총괄하고 UI/UX 디자인, 공통 컴포넌트 및 레이아웃 설계, 라우터 설정, 깃허브 관리, 사용자 기능 등을 담당했습니다. Redux Toolkit을 사용한 상태 관리와 MUI를 활용한 UI 컴포넌트 커스터마이징 경험을 얻었습니다.",
    category: "experience",
  },
  {
    id: 7,
    title: "Plant Diary (식물관리 서비스) 협업 1차 프로젝트",
    subtitle: "FE Programming",
    date: "2024-05-23 ~ 2024-06-23",
    description:
      "식물 관리 서비스인 'Plant Diary' 프로젝트에서 커뮤니티 기능을 구현하였습니다. 게시글 작성, 검색, 정렬, 추천, 댓글 기능, 페이지네이션 등을 포함하여 사용자 경험을 고려한 직관적인 서비스를 제공했습니다.",
    category: "experience",
  },
];
