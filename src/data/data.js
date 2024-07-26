import Project1 from "../assets/project1.jpeg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpeg";
import Project4 from "../assets/project4.jpeg";
import Project5 from "../assets/project5.jpg";
import Project6 from "../assets/project6.jpg";
// import "../assets/blog1.jpg"

import Testimonial1 from "../assets/testimonial1.jpg";
import Testimonial2 from "../assets/testimonial2.jpg";
import Testimonial3 from "../assets/testimonial3.jpg";
import Testimonial4 from "../assets/testimonial4.jpg";
import Testimonial5 from "../assets/testimonial5.jpg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Experience",
    path: "experience",
  },
  {
    name: "Skill",
    path: "skill",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

// services 경험쪽으로..
export const services = [
  {
    id: 1,
    name: "Web Development",
    title: "Web Design",
    description: "웹사이트 개발을 위한 레이아웃, 디자인 작업",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    percentage: 85,
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

export const projects = [
  {
    id: 1,
    img: Project1,
    category: "Branding",
    title: "Zorro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    img: Project2,
    category: "UI UX Design",
    title: "Gooir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    img: Project3,
    category: "Development",
    title: "Explore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    img: Project4,
    category: "Photography",
    title: "Mozar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 5,
    img: Project5,
    category: "Development",
    title: "Stay Fit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 6,
    img: Project6,
    category: "Branding",
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

export const cv = [
  {
    id: 1,
    title: "CoderHouse Courses",
    subtitle: "Backend Programming",
    date: "2014 - 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 2,
    title: "Lviv National Academy of Arts",
    subtitle: "Faculty of Design",
    date: "2012 - 2014",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 3,
    title: "IT Future",
    subtitle: "High School",
    date: "2010 - 2012",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 4,
    title: "UI Head & Manager",
    subtitle: "Soft Tech Inc.",
    date: "2020 - PRESENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 5,
    title: "UI / UX Specialist",
    subtitle: "Kana Design Studio",
    date: "2018 - 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 6,
    title: "Plugins Developer",
    subtitle: "Fiverr.com",
    date: "2016 - 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: "Barbara Wilson",
    author: "CEO Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Testimonial2,
    name: "Charlie Smith",
    author: "Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Testimonial3,
    name: "Roy Wang",
    author: "Manager GYM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Testimonial4,
    name: "Jennifer Smith",
    author: "CEO & Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Testimonial5,
    name: "Paul Freeman",
    author: "Photographer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
