import sample from "../../assets/sample.gif";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";

// 객체 타입 정의
interface Project {
  id: number;
  img: string;
  date: string;
  title: string;
  description: string;
  techStack: string[];
  features: string | { title: string; details: string[] | string }[];
  role: string;
  demoUrl: string;
  githubUrl: string;
  lessonsLearned: string[] | string;
}

export const project: Project[] = [
  // {
  //   id: 1,
  //   img: sample,
  //   date: "2024.07.24 ~ 2024.8.23",
  //   title: "주문이요 (음식주문 플랫폼)",
  //   description: "음식주문 플랫폼 서비스 고도화",
  //   techStack: [
  //     "React",
  //     "Sass",
  //     "Emotion",
  //     "Axios",
  //     "React Router",
  //     "Redux Toolkit",
  //     "MUI",
  //   ],
  //   features: "프로젝트 주요 기능",
  //   role: "작업 영역 (기여도)",
  //   demoUrl: "배포 사이트",
  //   githubUrl: "깃헙 사이트",
  //   lessonsLearned: "프로젝트에서 배운 점",
  // },
  {
    id: 2,
    img: team2,
    date: "2024.06.24 ~ 2024.7.23",
    title: "주문이요 (음식주문 플랫폼)",
    description:
      "남녀노소 누구나 쉽고 빠르게 음식을 주문할 수 있는 사용자 친화적인 웹 플랫폼입니다. 직관적인 인터페이스와 필터링 기능을 통해 원하는 음식을 간편하게 찾고 주문할 수 있으며, 사업자를 위한 매장 관리 기능을 제공하여 매출 증대를 지원합니다.",
    features: [
      {
        title: "회원 관리",
        details: "회원가입 (일반 사용자, 사업자), 로그인, 로그아웃",
      },
      {
        title: "사용자 기능",
        details: [
          "마이페이지 (사용자 정보 수정, 주소 관리, 주문 내역 조회, 리뷰 관리, 회원 탈퇴)",
          "위치 기반 검색",
          "카테고리 필터",
          "장바구니",
          "주문 및 결제",
          "주문 확인",
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
    techStack: [
      "React",
      "Sass",
      "Emotion",
      "Axios",
      "React Router",
      "Redux Toolkit",
      "MUI",
    ],
    role: "프로젝트 총괄, 사용자 기능 (80%) 외 업무",
    demoUrl: "배포 사이트",
    githubUrl: "깃헙 사이트",
    lessonsLearned: [
      "Redux Toolkit을 활용한 상태 관리 학습",
      "MUI를 활용한 UI 컴포넌트 커스터마이징 경험",
      "Axios를 이용한 RESTful API 연동 및 데이터 처리 능력 향상",
    ],
  },
  {
    id: 3,
    img: team1,
    date: "2024.05.24 ~ 2024.6.23",
    title: "Plant Diary (식물관리 서비스)",
    description: `식물을 사랑하는 사용자들이 자신의 반려식물을 더욱 건강하고 아름답게 키울 수 있도록 돕는 웹 애플리케이션입니다. 사용자는 식물 등록, 물주기, 분갈이, 비료 주기 등 관리 일정을 쉽게 기록하고 알림을 받을 수 있으며, 다른 사용자들과 식물 관리 노하우를 공유하고 소통할 수 있는 커뮤니티 기능을 제공합니다.`,
    techStack: ["React", "Sass", "Emotion", "Axios", "React Router"],
    features: [
      {
        title: "회원 관리",
        details:
          "회원가입, 로그인, 프로필 관리 기능을 통해 개인화된 서비스를 제공합니다.",
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
    role: "커뮤니티 개발 (100%)",
    demoUrl: "배포 사이트",
    githubUrl: "https://github.com/miss-gif/green-01prj",
    lessonsLearned: [
      "React 생태계의 다양한 라이브러리를 활용하여 효율적인 개발 방법을 익혔습니다.",
      "사용자 중심의 UI/UX 디자인 원칙을 적용하여 직관적이고 편리한 서비스를 구현했습니다.",
      "댓글 기능, 페이지네이션 등 복잡한 기능을 구현하며 문제 해결 능력과 코드 최적화 능력을 향상시켰습니다.",
    ],
  },
];
