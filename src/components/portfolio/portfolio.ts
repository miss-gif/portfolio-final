import Project0 from "../../assets/project0.png";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3 (1).png";
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

interface PortfolioItem {
  id: number;
  img: string; // img는 일반적으로 이미지의 경로나 URL을 나타내는 문자열입니다.
  category: string[]; // 여러 카테고리를 나타내기 위해 문자열 배열을 사용합니다.
  title: string;
  description: string;
  features: string | { title: string; details: string[] | string }[];
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  date?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    date: "2024",
    id: 0,
    img: Project0,
    category: [
      "리액트",
      "비동기통신",
      "라우터",
      "전역상태관리",
      "타입스크립트",
      "반응형",
    ],
    techStack: [
      react,
      sass,
      reactrouter,
      axios,
      ts,
      emotion,
      zustand,
      firebase,
      tailwind,
      reacthookform,
      zod,
    ],
    title: "포트폴리오",
    description: `현재까지 작업한 작업물을 정리한 웹사이트입니다`,
    features: [
      {
        title: "헤더",
        details: [
          "헤더의 nav는 해당 영역을 표시하고, 클릭하면 해당 영역으로 스크롤되도록 구현했습니다.",
        ],
      },
      {
        title: "히어로 영역",
        details: [
          "히어로 영역에는 배경으로 동영상을 삽입하고, 텍스트와 도형을 적절히 배치했습니다.",
          "반응형 디자인을 적용하여 모바일 환경에서도 동영상이 잘 보이도록 구현했습니다.",
          "그 밖에 클릭 요소가 있는 경우, 마우스 커서를 포인터로 변경하여 사용자에게 클릭 요소의 힌트를 제공했습니다.",
        ],
      },
      {
        title: "스킬 영역",
        details: [
          "스킬 영역에는 사용 가능한 기술 스택을 아이콘으로 표현하고, 페이드 애니메이션을 적용하여 사용자에게 시각적인 효과를 제공했습니다.",
          "또한, 퍼센트 애니메이션을 제공함으로 사용자에게 지루하지 않는 웹사이트가 되도록 구현했습니다.",
        ],
      },
      {
        title: "서비스 영역",
        details: [],
      },
      {
        title: "프로젝트 영역",
        details: [
          "협업 프로젝트 개요를 툴팁으로 제공하여 사용자가 프로젝트에 대한 간략한 정보를 확인할 수 있도록 구현했습니다.",
          "프로젝트 카드를 클릭하면 상세 정보를 확인할 수 있도록 모달 창을 구현했습니다.",
        ],
      },
      {
        title: "포트폴리오 영역",
        details: [
          "포트폴리오 영역에는 현재까지 작업한 포트폴리오를 카드 형태로 제공하고, 클릭 시 상세 정보를 확인할 수 있도록 구현했습니다.",
          "포트폴리오 카드에는 프로젝트의 이미지, 제목, 기술 스택, 간단한 설명이 포함되어 있습니다.",
          "필터를 통해 특정 기술 스택을 가진 프로젝트만 필터링하여 확인할 수 있도록 구현했습니다.",
        ],
      },
      {
        title: "이력서 영역",
        details: [
          "이력서 영역에는 교육과 경험으로 아코디언 형태로 제공하고, 클릭 시 해당 내용을 확인할 수 있도록 구현했습니다.",
          "이력서 카드에는 제목, 기간, 내용이 포함되어 있습니다.",
          "제목을 클릭하면 해당 내용이 펼쳐지고, 다시 클릭하면 접히도록 구현했습니다.",
        ],
      },
      {
        title: "연락처 영역",
        details: [
          "연락처 영역에는 이메일, 전화번호, 깃허브 주소를 제공하고, 적절한 아이콘을 사용하여 사용자에게 편의성을 제공했습니다.",
          "Outlook 메일 전송 기능을 사용하지 않고, 직접 이메일 전송 기능을 구현하여 사용자가 웹사이트에서 바로 이메일을 보낼 수 있도록 구현했습니다.",
        ],
      },
      {
        title: "푸터",
        details: [
          "년도 영역을 하드코딩하지 않고, 자바스크립트를 사용하여 동적으로 표시하도록 구현했습니다.",
        ],
      },
    ],

    demoUrl: "https://portfolio-final-neon-psi.vercel.app/",
    githubUrl: "https://github.com/miss-gif/portfolio-final",
  },
  {
    date: "2023",
    id: 1,
    img: Project1,
    category: ["퍼블리싱", "인터랙션", "반응형"],
    techStack: [html, sass, js],
    title: "애플 웹사이트",
    description: ``,
    features: [
      {
        title: "스크롤 인터랙션 구현",
        details: [
          "애플 웹사이트의 특징적인 스크롤 동작을 구현하기 위한 원리와 실제 코딩 연습을 진행했습니다.",
          "고해상도 비디오와 스크롤 액션을 연동하여 더욱 부드럽고 자연스러운 사용자 경험을 제공하는 방법을 학습했습니다.",
        ],
      },
      {
        title: "위치 및 크기 계산",
        details: [
          "스크롤에 따라 요소의 위치와 크기를 동적으로 계산하여 다양한 시각 효과를 구현하는 방법을 익혔습니다.",
          "이를 통해 애플 웹사이트의 복잡한 레이아웃과 인터랙션을 정확하게 재현할 수 있었습니다.",
        ],
      },
      {
        title: "고화질 비디오 제어",
        details: [
          "고해상도 비디오를 효율적으로 관리하고 부드럽게 재생하기 위한 다양한 기법을 학습했습니다.",
          "사용자의 기기 성능에 따라 최적화된 비디오 재생 환경을 구축하는 방법을 익혔습니다.",
        ],
      },
      {
        title: "SVG 애니메이션",
        details: [
          "Scalable Vector Graphics (SVG)를 이용하여 벡터 기반의 애니메이션을 제작하고 웹 페이지에 적용하는 방법을 학습했습니다.",
          "SVG 애니메이션은 고해상도 디스플레이에서도 선명하게 표현되며, 인터랙티브한 사용자 경험을 제공하는 데 효과적입니다.",
        ],
      },
      {
        title: "학습을 통해 얻은 것",
        details: [
          "애플 웹사이트의 기술적 이해: 애플 웹사이트의 뛰어난 사용자 인터페이스를 구현하기 위해 사용된 다양한 웹 기술과 디자인 원리를 깊이 있게 이해할 수 있었습니다.",
          "스크롤 인터랙션 전문성 향상: 스크롤 기반의 인터랙션을 설계하고 구현하는 능력을 향상시켰습니다.",
          "웹 표준 기술 활용 능력 향상: HTML, CSS, JavaScript 등 웹 표준 기술을 활용하여 복잡한 웹 애플리케이션을 개발하는 능력을 향상시켰습니다.",
          "문제 해결 능력 향상: 클론 코딩 과정에서 발생하는 다양한 문제를 해결하며 문제 해결 능력을 키울 수 있었습니다.",
        ],
      },
    ],
    demoUrl: "https://apple-ipad-app-wheat.vercel.app/",
    githubUrl: "https://github.com/miss-gif/DP_Study_apple-ipad-app",
  },
  {
    date: "2022",
    id: 2,
    img: Project2,
    category: ["퍼블리싱", "반응형"],
    techStack: [html, sass, js],
    title: "KlayUniverse",
    description: "피그마 파일만을 제공 받아 디자인대로 작업했습니다.",
    features: [
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
    ],

    demoUrl: "https://lighthearted-profiterole-5975f7.netlify.app/",
    githubUrl: "https://github.com/miss-gif/KlayUniverse_04",
  },
  {
    date: "2024",
    id: 3,
    img: Project3,
    category: ["리액트", "라우터", "반응형"],
    techStack: [react, reactrouter, sass, emotion],
    title: "감정 다이어리",
    description: "감정 다이어리 웹앱",
    features: [
      {
        title: "CRUD 기능 구현",
        details: [
          "감정 다이어리에 글을 작성하고, 수정하고, 삭제하고, 조회하는 CRUD 기능을 구현하며 데이터 관리에 대한 이해를 높였습니다.",
        ],
      },
      {
        title: "쿼리스트링 활용",
        details: [
          "URL에 추가 정보를 담아 특정 글을 조회하거나 검색하는 기능을 구현하기 위해 쿼리스트링을 활용하는 방법을 학습했습니다.",
        ],
      },
      {
        title: "페이지 라우팅",
        details: [
          "다양한 페이지를 구성하고 사용자가 원하는 페이지로 이동할 수 있도록 페이지 라우팅 기능을 구현했습니다.",
        ],
      },
      {
        title: "로컬 스토리지 및 세션 스토리지 활용",
        details: [
          "사용자의 정보나 설정값을 브라우저에 저장하기 위해 로컬 스토리지와 세션 스토리지를 활용하는 방법을 학습했습니다.",
        ],
      },
      {
        title: "학습을 통해 얻은 것",
        details: [
          "웹 개발 전반에 대한 이해: CRUD 기능, 쿼리스트링, 페이지 라우팅, 로컬 스토리지 등 웹 개발에서 필수적인 개념들을 익히고, 이들을 통합하여 실제 서비스를 구현하는 경험을 했습니다.",
          "데이터 관리 능력 향상: 사용자가 입력한 데이터를 효율적으로 관리하고, 필요한 데이터를 조회하는 방법을 익혔습니다.",
          "사용자 인터페이스 설계 능력 향상: 사용자가 편리하게 감정 다이어리를 이용할 수 있도록 직관적인 인터페이스를 설계하는 방법을 학습했습니다.",
          "문제 해결 능력 향상: 개발 과정에서 발생하는 다양한 문제를 해결하며 문제 해결 능력을 키울 수 있었습니다.",
        ],
      },
    ],
    demoUrl: "https://diary-one-kappa.vercel.app/",
    githubUrl: "https://github.com/miss-gif/react-emotion-diary",
  },
  {
    date: "2024",
    id: 4,
    img: Project4,
    category: ["리액트", "전역상태관리", "라우터", "비동기통신"],
    techStack: [react, reactrouter, sass, emotion],
    title: "NARAS",
    description: "NARAS API를 활용한 웹 애플리케이션",
    features: [
      {
        title: "NARAS API 연동",
        details: [
          "NARAS API를 활용하여 서버에서 필요한 데이터를 가져와 웹 페이지에 동적으로 반영하는 방법을 학습했습니다.",
          "이를 통해 실시간 데이터를 기반으로 웹 페이지를 구성하는 방법을 익혔습니다.",
        ],
      },
      {
        title: "메타 태그 및 오픈 그래프 태그 활용",
        details: [
          "메타 태그와 오픈 그래프 태그를 활용하여 검색 엔진 최적화(SEO)를 진행하고, 소셜 미디어 공유 시 정확한 정보가 표시되도록 페이지 완성도를 높이는 작업을 수행했습니다.",
        ],
      },
      {
        title: "학습을 통해 얻은 것",
        details: [
          "API 활용 능력 향상: 외부 API를 연동하여 웹 페이지에 데이터를 가져오는 방법을 익히고, 이를 통해 웹 페이지의 동적성을 높이는 방법을 학습했습니다.",
          "SEO에 대한 이해: 메타 태그와 오픈 그래프 태그를 활용하여 검색 엔진에 웹 페이지를 효과적으로 노출시키는 방법을 이해했습니다.",
          "웹 표준 준수: 웹 표준에 맞게 메타 태그를 작성하여 웹 페이지의 접근성을 높이고, 다양한 기기에서 최적화된 화면을 제공하는 방법을 학습했습니다.",
        ],
      },
    ],
    demoUrl: "https://react-naras-app.vercel.app/",
    githubUrl: "https://github.com/miss-gif/react-naras-app",
  },
  {
    date: "2022",
    id: 5,
    img: Project5,
    category: ["퍼블리싱"],
    techStack: [html, sass, js],
    title: "스타벅스 홈페이지 클론 코딩",
    description: `스타벅스 홈페이지 클론 코딩`,
    features: [
      {
        title: "HTML, CSS, JavaScript 기반 웹 개발",
        details: [
          "HTML5, CSS3, JavaScript를 활용하여 스타벅스 홈페이지의 레이아웃과 기능을 구현했습니다.",
          "Flexbox, Grid, SCSS 등의 레이아웃 시스템을 적극 활용하여 반응형 웹 디자인을 구현했습니다.",
          "JavaScript를 통해 동적인 웹 페이지를 구현했습니다.",
        ],
      },
      {
        title: "클론 코딩을 통한 실전 경험",
        details: [
          "스타벅스 홈페이지를 반복적으로 클론 코딩하며 실제 웹 개발 프로젝트를 수행하는 경험을 쌓았습니다.",
          "웹 표준, 접근성, 성능 최적화 등 실무에서 필요한 다양한 지식과 기술을 습득했습니다.",
        ],
      },
      {
        title: "문제 해결 능력 향상",
        details: [
          "클론 코딩 과정에서 발생하는 다양한 문제들을 직접 해결하며 문제 해결 능력을 향상시켰습니다.",
          "예를 들어, 브라우저 간 호환성 문제, 반응형 레이아웃 구현 시 발생하는 문제 등을 해결하기 위해 다양한 시도와 실험을 수행했습니다.",
        ],
      },
      {
        title: "학습을 통해 얻은 것",
        details: [
          "웹 개발 전반에 대한 이해: HTML, CSS, JavaScript를 넘어 웹 개발 전반에 대한 폭넓은 이해를 얻었습니다.",
          "웹 표준, 웹 접근성, 웹 성능 최적화 등 웹 개발의 기본적인 원리와 개념을 숙달했습니다.",
          "실전 문제 해결 능력: 실제 웹 개발 환경에서 발생할 수 있는 다양한 문제들을 해결하는 능력을 키웠습니다.",
          "문제를 분석하고 해결책을 찾는 논리적 사고 능력을 향상시켰습니다.",
          "자기 주도 학습 능력: 강의 내용을 바탕으로 스스로 학습하고 문제를 해결하며 자기 주도 학습 능력을 키웠습니다.",
        ],
      },
    ],
    demoUrl: "https://dp-study-starbucks-03.vercel.app/",
    githubUrl: "https://github.com/miss-gif/DP_Study_Starbucks_03",
  },
  {
    date: "2023",
    id: 6,
    img: Project6,
    category: ["퍼블리싱"],
    techStack: [html, sass],
    title: "쇼핑몰",
    description: "일반적인 쇼핑몰의..",
    features: [
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
    ],

    demoUrl: "https://dp-shopping-mall-site-basic.vercel.app/",
    githubUrl: "https://github.com/miss-gif/DP_Shopping-mall-site-Basic",
  },
  {
    date: "2023",
    id: 7,
    img: Project7,
    category: ["리액트", "라우터", "전역상태관리", "비동기통신"],
    techStack: [react, reactrouter, sass, emotion],
    title: "디즈니 플러스 클론코딩",
    description: "디즈니 플러스 클론코딩..",
    features: [
      {
        title: "파이어베이스를 활용한 사용자 인증",
        details: [
          "파이어베이스의 로그인 기능을 간단하게 도입하여 사용자 로그인 기능을 구현했습니다.",
        ],
      },
      {
        title: "영화 API 연동",
        details: [
          "외부 영화 API를 활용하여 다양한 영화 정보를 가져와 웹 페이지에 동적으로 출력했습니다.",
          "검색 기능을 구현하여 사용자가 원하는 영화를 빠르게 찾을 수 있도록 했습니다.",
        ],
      },
      {
        title: "디즈니플러스 UI/UX 구현",
        details: [
          "디즈니플러스의 특징적인 UI/UX를 React를 사용하여 구현했습니다.",
          "사용자 친화적인 인터페이스를 통해 직관적인 사용자 경험을 제공하고자 노력했습니다.",
        ],
      },
      {
        title: "학습을 통해 얻은 것",
        details: [
          "API 활용 능력 향상: 외부 API를 연동하여 웹 페이지에 데이터를 가져오고, 이를 가공하여 사용자에게 제공하는 능력을 향상시켰습니다.",
          "웹 개발 전반에 대한 이해: 사용자 인증, 데이터베이스 연동, UI/UX 디자인 등 웹 개발 전반에 대한 지식을 쌓았습니다.",
        ],
      },
    ],

    demoUrl: "https://dp-study-disney-plus-app.vercel.app/",
    githubUrl: "https://github.com/miss-gif/DP_Study_disney-plus-app",
  },
  {
    date: "2024",
    id: 8,
    img: Project8,
    category: ["리액트", "반응형", "마이그레이션"],
    techStack: [react],
    title: "카카오브래인 클론코딩",
    description: "카카오브래인 클론코딩",
    features: [
      {
        title: "HTML, CSS, JavaScript 기반 클론 코딩",
        details: [
          "카카오브레인 블로그의 레이아웃과 기능을 HTML, CSS, JavaScript를 사용하여 1차적으로 구현했습니다.",
          "간단한 캐러셀 기능, 다양한 애니메이션 효과, 반응형 디자인을 적용하여 원본 블로그의 디자인과 기능을 최대한 구현해냈습니다.",
        ],
      },
      {
        title: "React로 마이그레이션",
        details: [
          "1차적으로 구현한 웹 페이지를 React로 마이그레이션하여 더욱 효율적이고 관리하기 쉬운 웹 애플리케이션으로 만들었습니다.",
          "React의 컴포넌트 기반 개발 방식을 활용하여 코드의 재사용성을 높이고, 가상 DOM을 이용하여 효율적인 렌더링을 구현했습니다.",
        ],
      },
      {
        title: "학습을 통해 얻은 것",
        details: [
          "프론트엔드 개발 역량 강화: HTML, CSS, JavaScript, React 등 다양한 프론트엔드 기술을 활용하여 복잡한 웹 페이지를 구현하는 능력을 향상시켰습니다.",
          "반응형 웹 디자인: 다양한 화면 크기에 맞춰 웹 페이지가 유연하게 변형되는 반응형 웹 디자인을 구현하는 경험을 통해 웹 접근성에 대한 이해를 높였습니다.",
          "컴포넌트 기반 개발: React를 통해 컴포넌트 기반 개발 방식을 익히고, 코드의 재사용성과 유지보수성을 높이는 방법을 학습했습니다.",
          "문제 해결 능력 향상: 클론 코딩 과정에서 발생하는 다양한 문제를 해결하며 문제 해결 능력을 키울 수 있었습니다.",
        ],
      },
    ],
    demoUrl: "https://react-blog-kakaobrain.vercel.app/",
    githubUrl: "https://github.com/miss-gif/react-blog-kakaobrain",
  },
  {
    date: "2022",
    id: 9,
    img: Project9,
    category: ["퍼블리싱", "반응형"],
    techStack: [html, sass, js],
    title: "메카스마",
    description: "메카스마 클론코딩",
    features: [
      {
        title: "해외 이벤트 랜딩 페이지 커스텀 제작",
        details: [
          "해외 이벤트 랜딩 페이지를 참고하여 디자인 및 기능을 커스텀 제작했습니다.",
          "해당 페이지는 HTML, CSS, 그리고 JavaScript를 활용하여 제작되었습니다.",
          "페이지 내 주요 기능으로는 애니메이션 효과, 사용자 친화적인 인터랙션 요소가 포함되었습니다.",
        ],
      },
    ],

    demoUrl: "https://mecha-smile-impact-02.vercel.app/",
    githubUrl: "https://github.com/miss-gif/mecha-smile-impact_02",
  },
  {
    date: "2022",
    id: 10,
    img: Project10,
    category: ["퍼블리싱", "반응형"],
    techStack: [html, sass, js],
    title: "메가박스",
    description: "메가박스 클론코딩",
    features: [
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
    ],
    demoUrl: "https://mecha-smile-impact-02-lpxs.vercel.app/",
    githubUrl: "https://github.com/miss-gif/MEGABOX",
  },
  {
    date: "2022",
    id: 11,
    img: Project11,
    category: ["퍼블리싱", "반응형"],
    techStack: [html, sass, js],
    title: "표준 웹사이트",
    description: "표준 웹사이트의 기본형을",
    features: [
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
      {
        title: "",
        details: [],
      },
    ],

    demoUrl: "https://zealous-heisenberg-77e41a.netlify.app/",
    githubUrl: "https://github.com/miss-gif/Reactive-web",
  },
];
