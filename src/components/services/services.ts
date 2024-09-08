// 객체 타입 정의
interface Services {
  id: number;
  name: string;
  title: string;
  description: string;
}

// 서비스 데이터 배열
export const services: Services[] = [
  {
    id: 1,
    name: "Web Development",
    title: "Responsive Web Design",
    description:
      "HTML5, CSS3, SCSS를 활용하여 반응형 웹사이트를 개발. 다양한 기기에서 최적화된 사용자 경험 제공.",
  },
  {
    id: 2,
    name: "UI/UX Optimization",
    title: "Accessibility & Standards",
    description:
      "웹 접근성(WCAG 2.1 기준) 준수와 W3C 웹 표준을 준수하여 누구나 접근 가능한 사용자 인터페이스 제공.",
  },
  {
    id: 3,
    name: "Performance Tuning",
    title: "Optimization & Debugging",
    description:
      "성능 이슈 해결, 메모리 누수 및 네트워크 프로파일링을 통해 웹 애플리케이션의 성능을 향상.",
  },
  {
    id: 4,
    name: "Platform Development",
    title: "Service Scalability",
    description:
      "신규 플랫폼 설계 및 기존 서비스 아키텍처 개선을 통해 확장 가능하고 유지보수가 용이한 시스템 개발.",
  },
  {
    id: 5,
    name: "User-Centric Design",
    title: "Customer Experience",
    description:
      "고객 피드백과 사용자 행동 데이터를 분석하여 더욱 직관적이고 만족스러운 사용자 경험을 설계.",
  },
  {
    id: 6,
    name: "Technical Debt Management",
    title: "Code Refactoring",
    description:
      "기술 부채를 식별하고 단계별로 개선하여 유지보수성과 확장성을 향상시킨 경험이 있습니다.",
  },
];
