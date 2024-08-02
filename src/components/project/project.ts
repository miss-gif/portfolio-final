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
  features: string;
  role: string;
  demoUrl: string;
  githubUrl: string;
  lessonsLearned: string;
}

export const project: Project[] = [
  {
    id: 1,
    img: sample,
    date: "2024.07.24 ~ 2024.8.23",
    title: "주문이요 (음식주문 플랫폼)",
    description: "음식주문 플랫폼 서비스 고도화",
    techStack: ["html", "css", "JS"],
    features: "프로젝트 주요 기능",
    role: "작업 영역 (기여도)",
    demoUrl: "배포 사이트",
    githubUrl: "깃헙 사이트",
    lessonsLearned: "프로젝트에서 배운 점",
  },
  {
    id: 2,
    img: team2,
    date: "2024.06.24 ~ 2024.7.23",
    title: "주문이요 (음식주문 플랫폼)",
    description: `"모든 연령층이 쉽게 사용할 수 있는 음식주문 플랫폼입니다. 쉽고
                빠른 주문 경험을 제공하여 언제 어디서든 맛있는 음식을 간편하게
                주문할 수 있도록 돕습니다. 또한, 음식점 사장님을 위한 사업자
                서비스를 통해 매장 소개, 메뉴 등록, 주문 접수, 리뷰 관리 등 매장
                관리 기능을 제공하여 매출 증대를 지원합니다."`,
    techStack: ["html", "css", "JS"],
    features: "프로젝트 주요 기능",
    role: "작업 영역 (기여도)",
    demoUrl: "배포 사이트",
    githubUrl: "깃헙 사이트",
    lessonsLearned: "프로젝트에서 배운 점",
  },
  {
    id: 3,
    img: team1,
    date: "2024.05.24 ~ 2024.6.23",
    title: "Plant Diary (식물관리 서비스)",
    description: `"사용자가 식물의 관리 일정을 쉽게 추적하고 관리할 수 있도록 돕는
                앱입니다."`,
    techStack: ["html", "css", "JS"],
    features: "프로젝트 주요 기능",
    role: "작업 영역 (기여도)",
    demoUrl: "배포 사이트",
    githubUrl: "깃헙 사이트",
    lessonsLearned: "프로젝트에서 배운 점",
  },
];
