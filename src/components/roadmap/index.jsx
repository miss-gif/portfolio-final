import html from "../../assets/skill/HTML.svg";
import css from "../../assets/skill/CSS.svg";
import js from "../../assets/skill/JavaScript.svg";
import react from "../../assets/skill/React.svg";
import ts from "../../assets/skill/TypeScript.svg";
import redux from "../../assets/skill/Redux.svg";
import zustand from "../../assets/skill/Zustand.svg";
import axios from "../../assets/skill/Axios.svg";
import reactQuery from "../../assets/skill/react-query.svg";
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
import recoil from "../../assets/skill/recoil.svg";
import nextjs from "../../assets/skill/NextJS-Light.svg";
import supabase from "../../assets/skill/supabase.svg";
import native from "../../assets/skill/react-native.svg";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import "./index.scss";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const RoadMap = () => {
  const horizontalRef = useRef();

  useGSAP(
    () => {
      // 가로 스크롤 애니메이션
      const horizontalSections = gsap.utils.toArray(".horizontal-item");
      const horizontalTween = gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: () =>
            `+=${horizontalRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 세로 스크롤 애니메이션, horizontalTween과 연동
      gsap.utils.toArray(".vertical-item").forEach((item) => {
        gsap.to(item, {
          y: 100,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            containerAnimation: horizontalTween, // 가로 스크롤 애니메이션과 연동
          },
        });
      });

      // 배경 색상 전환 애니메이션
      gsap.utils.toArray(".horizontal-item").forEach((section, index) => {
        gsap.to(section, {
          backgroundColor: index % 2 === 0 ? "lightblue" : "lightcoral",
          duration: 1.5, // 색상 전환에 시간을 추가
          ease: "power1.inOut", // 부드러운 전환 효과를 위한 이징 함수 추가
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            containerAnimation: horizontalTween,
          },
        });
      });

      // 기술 아이콘 회전 애니메이션
      gsap.utils.toArray(".horizontal-item img").forEach((img) => {
        gsap.fromTo(
          img,
          { rotate: 0 },
          {
            rotate: 360,
            duration: 2, // 회전이 좀 더 명확하게 보이도록 지속 시간 추가
            scrollTrigger: {
              trigger: img,
              start: "top 90%", // 트리거 시작점을 뷰포트와 좀 더 가깝게 설정
              end: "top 10%", // 끝점도 넓게 잡아 스크롤 범위 확장
              scrub: 1, // 스크롤과 애니메이션을 비례해서 동작
              containerAnimation: horizontalTween,
            },
          }
        );
      });

      // 텍스트 등장 애니메이션
      gsap.utils.toArray(".horizontal-item p").forEach((text) => {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            containerAnimation: horizontalTween,
          },
        });
      });
    },

    { scope: horizontalRef }
  );

  return (
    <div className="road-map">
      {/* 가로 스크롤 컨테이너 */}
      <div className="horizontal-container" ref={horizontalRef}>
        <div className="horizontal-item">
          <p>학습 로드맵</p>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" />
            <img src={sass} alt="Sass" />
          </div>
          <div>
            <p>
              HTML과 CSS로 웹 페이지의 기본 구조와 스타일을 설계합니다.
              JavaScript를 사용하여 페이지에 동적인 기능을 추가합니다.
            </p>
            <p>
              Sass를 통해 CSS의 유지보수성과 코드 재사용성을 높입니다. 변수를
              사용하고 중첩된 규칙을 통해 스타일을 보다 효과적으로 관리합니다.
            </p>
          </div>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={react} alt="React" />
            <img src={reactrouter} alt="React Router" />
            <img src={emotion} alt="Emotion" />
            <img src={axios} alt="Axios" />
            <img src={recoil} alt="Recoil" />
          </div>
          <div>
            <p>
              React로 컴포넌트 기반 UI를 구축하며 재사용성과 유지보수성을
              강화했습니다.
            </p>
            <p>
              React Router를 사용해 SPA 환경에서 경로 관리를 효율적으로
              처리하였습니다.
            </p>
            <p>
              Emotion으로 동적인 CSS-in-JS 방식을 도입해 스타일 관리가
              쉬워졌습니다. 상태 변화에 따라 스타일을 동적으로 적용할 수
              있었습니다.
            </p>
            <p>
              Axios로 API 요청과 응답을 처리했으며, 비동기 처리에서의 에러
              핸들링을 간단히 처리했습니다.
            </p>
            <p>
              Recoil로 상태 관리를 중앙화하여 복잡한 컴포넌트 간 상태를 간결하게
              관리하며, 불필요한 props 전달을 최소화하여 성능을 최적화했습니다.
            </p>
          </div>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={redux} alt="Redux" />
            <img src={ts} alt="TypeScript" />
            <img src={swagger} alt="Swagger" />
            <img src={mui} alt="Material UI" />
          </div>
          <div>
            <p>
              RTK로 전역 상태를 관리하여 복잡한 상태 변화를 예측 가능하고
              안정적으로 처리합니다.
            </p>
            <p>
              TypeScript를 도입해 정적 타입을 제공함으로써 런타임 오류를 줄이고,
              타입 안전성을 확보했습니다.
            </p>
            <p>
              Swagger로 API 명세를 문서화하고, 백엔드와의 협업을 원활하게
              진행했습니다.
            </p>
            <p>
              Material UI를 사용해 UI 요소를 빠르게 구성하고, 커스텀 디자인도
              적용해 일관성 있는 UI를 유지했습니다.
            </p>
          </div>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={reactQuery} alt="React Query" />
            <img src={reacthookform} alt="React Hook Form" />
            <img src={zod} alt="Zod" />
          </div>
          <div>
            <p>
              React Query를 통해 서버 데이터를 캐싱하고, API 요청을
              최적화했습니다. 특히 페이지 간 이동 시 데이터를 지속적으로
              동기화하여 사용자 경험을 향상시켰습니다.
            </p>
            <p>
              React Hook Form으로 폼 상태를 간결하게 관리하고, 비동기 검증을
              포함한 다양한 유효성 검사를 구현했습니다.
            </p>
            <p>
              Zod를 도입해 복잡한 폼 데이터 구조에 대해 유효성 검사를 타입
              안전하게 적용했습니다.
            </p>
          </div>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={firebase} alt="Firebase" />
            <img src={zustand} alt="Zustand" />
          </div>
          <div>
            <p>
              Firebase로 인증 및 실시간 데이터베이스를 구현해 서버 관리를
              최소화했습니다.
            </p>
            <p>
              Zustand로 경량화된 상태 관리를 도입하여 간단한 애플리케이션에서
              RTK보다 더 직관적이고 빠르게 상태를 처리했습니다.
            </p>
          </div>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={nextjs} alt="nextjs" />
            <img src={tailwind} alt="Tailwind CSS" />
            <img src={supabase} alt="supabase" />
          </div>
          <div>
            <p>
              Next.js(15+)로 SSR, ISR, App Router을 공부하고 있습니다. (입문
              단계)
            </p>
            <p>
              Tailwind CSS로 클래스 기반의 직관적인 스타일링을 통해 반복적인 CSS
              작성을 줄이고 생산성을 높였습니다.
            </p>
            <p>
              Supabase를 사용해 빠른 데이터베이스 구축을 통해 개발 시간을
              절감했습니다. 학습 중인 기술입니다.
            </p>
          </div>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={native} alt="React Native" />
          </div>
          <div>
            <p>
              React Native을 사용해 모바일 애플리케이션을 개발을 공부 중입니다.
              (입문 단계)
            </p>
          </div>
        </div>

        <div className="horizontal-item chapter">
          <div className="flex gap-10">
            <img src={figma} alt="Figma" />
          </div>
          <div>
            <p>
              Figma를 활용한 실시간 협업으로 디자인과 개발의 간극을 줄이고,
              빠르게 변화하는 요구사항에 유연하게 대응할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
