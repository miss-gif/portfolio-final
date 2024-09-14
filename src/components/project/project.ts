import axios from "../../assets/skill/Axios.svg";
import emotion from "../../assets/skill/Emotion-Light.svg";
import mui from "../../assets/skill/MaterialUI-Light.svg";
import react from "../../assets/skill/React.svg";
import reactrouter from "../../assets/skill/React-Router.svg";
import redux from "../../assets/skill/Redux.svg";
import sass from "../../assets/skill/Sass.svg";

import team1_1 from "../../assets/team1/1.png";
import team1_2 from "../../assets/team1/1 (1).png";
import team1_3 from "../../assets/team1/1 (2).png";
import team1_4 from "../../assets/team1/1 (3).png";
import team1_5 from "../../assets/team1/1 (4).png";
import team1_6 from "../../assets/team1/1 (5).png";
import team1_7 from "../../assets/team1/1 (6).png";
import team1_8 from "../../assets/team1/1 (7).png";
import team1_9 from "../../assets/team1/1 (8).png";
import team1_10 from "../../assets/team1/1 (9).png";
import team1_11 from "../../assets/team1/1 (10).png";
import team1_12 from "../../assets/team1/1 (11).png";
import team1_13 from "../../assets/team1/1 (12).png";

import team2_1 from "../../assets/team2/1.png";
import team2_2 from "../../assets/team2/2.png";
import team2_3 from "../../assets/team2/3.png";
import team2_4 from "../../assets/team2/4.png";
import team2_5 from "../../assets/team2/5.png";
import team2_6 from "../../assets/team2/6.png";
import team2_7 from "../../assets/team2/7.png";

import team3_1 from "../../assets/team3/1.png";
import team3_2 from "../../assets/team3/1 (1).png";
import team3_3 from "../../assets/team3/1 (2).png";
import team3_4 from "../../assets/team3/1 (3).png";
import team3_5 from "../../assets/team3/1 (4).png";
import team3_6 from "../../assets/team3/1 (5).png";
import team3_7 from "../../assets/team3/1 (6).png";
import team3_8 from "../../assets/team3/1 (7).png";
import team3_9 from "../../assets/team3/1 (8).png";
import team3_10 from "../../assets/team3/1 (9).png";
import team3_11 from "../../assets/team3/1 (10).png";
import team3_12 from "../../assets/team3/1 (11).png";
import team3_13 from "../../assets/team3/1 (12).png";

import swagger1 from "../../assets/team1/swagger1.png";
import swagger2 from "../../assets/team2/swagger2.png";
import swagger3 from "../../assets/team3/swagger3.png";

// 객체 타입 정의
interface Project {
  id: number;
  tag: string[];
  img: string[];
  date: string;
  title: string;
  description: string;
  techStack: string[];
  features: string | { title: string; details: string[] | string }[];
  role: string;
  demoUrl: string;
  githubUrl: string;
  canvaUrl?: string;
  figmaUrl?: string;
  lessonsLearned: string[] | string;
}

export const project: Project[] = [
  {
    id: 1,
    tag: ["완료"],
    img: [
      team3_1,
      team3_2,
      team3_3,
      team3_4,
      team3_5,
      team3_6,
      team3_7,
      team3_8,
      team3_9,
      team3_10,
      team3_11,
      team3_12,
      team3_13,
      swagger3,
    ],
    date: "2024.07.24 ~ 2024.8.23",
    title: "주문이요 (음식주문 플랫폼)",
    description:
      "2차 프로젝트에서 구현한 기능을 고도화하는 작업을 진행 중입니다. 기존 시스템의 성능을 개선하고, 사용자 피드백을 반영하여 기능을 추가하며 지속적으로 서비스를 개선하고 있습니다.",
    features: [
      {
        title: "회원 관리",
        details: [
          "회원가입 (일반 사용자, 사업자) 및 소셜 로그인(카카오, 네이버, 구글), 로그인, 로그아웃",
          "아아디, 비밀번호 찾기",
        ],
      },
      {
        title: "사용자 기능",
        details: [
          "사용자 정보 수정",
          "주소관리",
          "상점 즐겨찾기",
          "주문내역 조회",
          "리뷰관리 (리뷰 작성, 수정, 삭제)",
          "쿠폰확인 및 내역조회",
          "회원탈퇴",
          "상점 검색(주소 기반)",
          "상점 카테고리 필터",
          "메뉴 장바구니",
          "메뉴 주문 및 결제(NicePay)",
          "주문 확인 및 주문 취소",
          "리뷰 신고",
        ],
      },
      {
        title: "사업자 기능",
        details: [
          "사업장 관리",
          "메뉴등록 및 수정",
          "주문접수",
          "리뷰관리",
          "주문접수 내역조회",
          "매장쿠폰 발급",
          "매출 통계",
        ],
      },
      {
        title: "관리자 기능",
        details: [
          "사업자 회원가입 시 승인 관리",
          "사이트 메뉴 카테고리 관리",
          "고객센터 문의 내용 관리",
          "리뷰 신고 내용 관리",
          "가입자, 탈퇴 통계",
          "전체 상점 매출, 주문 수 관리",
        ],
      },
    ],
    techStack: [react, reactrouter, redux, axios, sass, emotion, mui],
    role: "작업 영역 (기여도)",
    demoUrl: "https://jumuniyo.gybproject.com/",
    githubUrl: "https://github.com/miss-gif/jumunyo",
    canvaUrl:
      "https://www.canva.com/design/DAGOX4a8SaE/F06Qj7PFzV0Ck796fnsNLA/edit",
    figmaUrl:
      "https://www.figma.com/design/wo9ijijb6eANcrwEzBAFQA/%EC%A3%BC%EB%AC%B8%EC%9D%B4%EC%9A%94-(%EA%B0%80%EC%B9%AD)?node-id=25-2&t=KnhWp6vxL0mDpwiK-1",
    lessonsLearned: ["프로젝트에서 배운 점"],
  },
  {
    id: 2,
    tag: [],
    img: [
      team2_1,
      team2_2,
      team2_3,
      team2_4,
      team2_5,
      team2_6,
      team2_7,
      swagger2,
    ],
    date: "2024.06.24 ~ 2024.07.23",
    title: "주문이요 (음식주문 플랫폼)",
    description:
      "남녀노소 누구나 쉽고 빠르게 음식을 주문할 수 있는 사용자 친화적인 웹 플랫폼입니다. 직관적인 인터페이스와 필터링 기능을 통해 원하는 음식을 간편하게 찾고 주문할 수 있으며, 사업자를 위한 매장 관리 기능을 제공하여 매출 증대를 지원합니다.",
    features: [
      {
        title: "회원 관리",
        details: ["회원가입 (일반 사용자, 사업자), 로그인, 로그아웃"],
      },
      {
        title: "사용자 기능",
        details: [
          "마이페이지 (사용자 정보 수정, 주소 관리, 주문 내역 조회, 리뷰 관리, 회원 탈퇴)",
          "위치 기반 상점검색 및 조회",
          "카테고리 검색 및 정렬",
          "장바구니",
          "주문 및 결제(PortOne)",
          "주문 확인 및 주문 취소",
        ],
      },
      {
        title: "사업자 기능",
        details: [
          "주문 관리",
          "주문 내역 조회",
          "리뷰 관리",
          "매장 관리 (메뉴 등록 및 수정, 영업 시간 설정, 매장 정보 업데이트)",
          "통계 (매출, 주문량, 인기 메뉴 등)",
        ],
      },
    ],
    techStack: [react, reactrouter, redux, axios, sass, emotion, mui],
    role: "프로젝트 총괄, 사용자 기능 개발 (80%) 외 기타 업무",
    demoUrl: "https://jumuniyo.gybproject.com/",
    githubUrl: "https://github.com/miss-gif/jumuniyo-v2-final",
    canvaUrl:
      "https://www.canva.com/design/DAGLYEhJ6nk/gAYEVyu2zAcb906KrDz7Hw/edit",
    figmaUrl:
      "https://www.figma.com/design/wo9ijijb6eANcrwEzBAFQA/%EC%A3%BC%EB%AC%B8%EC%9D%B4%EC%9A%94-(%EA%B0%80%EC%B9%AD)?node-id=25-2&t=KnhWp6vxL0mDpwiK-1",
    lessonsLearned: [
      "Redux Toolkit을 활용한 상태 관리 학습",
      "MUI를 활용한 UI 컴포넌트 커스터마이징 경험",
      "Axios를 이용한 RESTful API 연동 및 데이터 처리 능력 향상",
    ],
  },
  {
    id: 3,
    tag: [],
    img: [
      team1_1,
      team1_2,
      team1_3,
      team1_4,
      team1_5,
      team1_6,
      team1_7,
      team1_8,
      team1_9,
      team1_10,
      team1_11,
      team1_12,
      team1_13,
      swagger1,
    ],
    date: "2024.05.24 ~ 2024.6.23",
    title: "Plant Diary (식물관리 서비스)",
    description: `식물을 사랑하는 사용자들이 자신의 반려식물을 더욱 건강하고 아름답게 키울 수 있도록 돕는 웹 애플리케이션입니다. 사용자는 식물 등록, 물주기, 분갈이, 비료 주기 등 관리 일정을 쉽게 기록하고 알림을 받을 수 있으며, 다른 사용자들과 식물 관리 노하우를 공유하고 소통할 수 있는 커뮤니티 기능을 제공합니다.`,
    techStack: [react, reactrouter, axios, sass, emotion],
    features: [
      {
        title: "회원 관리",
        details: [
          "회원가입, 로그인, 프로필 관리 기능을 통해 개인화된 서비스를 제공합니다.",
        ],
      },
      {
        title: "식물 관리",
        details: [
          "식물 등록: 식물 종류, 이름, 사진 등 상세 정보를 등록하고 관리할 수 있습니다.",
          "일정 관리: 물주기, 분갈이, 비료 주기 등 식물별 맞춤 관리 일정을 설정할 수 있습니다.",
        ],
      },
      {
        title: "커뮤니티",
        details: [
          "게시글 작성, 수정, 삭제: 자유롭게 식물 관련 정보와 경험을 공유할 수 있습니다.",
          "게시글 검색, 정렬: 원하는 정보를 빠르게 찾을 수 있도록 검색 및 정렬 기능을 제공합니다.",
          "추천 기능: 게시글을 추천할 수 있습니다.",
          "댓글 기능: 다른 사용자의 게시글에 댓글을 달고 소통할 수 있습니다.",
          "페이지네이션: 많은 게시글을 효율적으로 탐색할 수 있도록 페이지네이션 기능을 지원합니다.",
        ],
      },
    ],
    role: "커뮤니티 기능 개발 (100%)",
    demoUrl: "https://green-01prj.vercel.app/",
    githubUrl: "https://github.com/miss-gif/green-01prj",
    canvaUrl:
      "https://www.canva.com/design/DAGLYEhJ6nk/gAYEVyu2zAcb906KrDz7Hw/edit",
    figmaUrl:
      "https://www.figma.com/design/wo9ijijb6eANcrwEzBAFQA/%EC%A3%BC%EB%AC%B8%EC%9D%B4%EC%9A%94-(%EA%B0%80%EC%B9%AD)?node-id=25-2&t=KnhWp6vxL0mDpwiK-1",
    lessonsLearned: [
      "React 생태계의 다양한 라이브러리를 활용하여 효율적인 개발 방법을 익혔습니다.",
      "사용자 중심의 UI/UX 디자인 원칙을 적용하여 직관적이고 편리한 서비스를 구현했습니다.",
      "댓글 기능, 페이지네이션 등 복잡한 기능을 구현하며 문제 해결 능력과 코드 최적화 능력을 향상시켰습니다.",
    ],
  },
];
