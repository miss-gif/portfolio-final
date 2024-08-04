import React from "react";

const Right = () => {
  return (
    <div className="cv__right">
      <div className="profile-details">
        <div className="detail-item">
          <span className="detail-item__number">2</span> Profile
        </div>
        <div className="profile-details__description">
          <p>
            저는 리액트 기반의 웹 개발자로서 사용자 중심의 사고를 바탕으로
            기능성과 심미성을 모두 갖춘 웹사이트를 제작합니다. 다양한 기술
            스택을 활용하여 효율적인 개발 방법을 익히고, 복잡한 문제를 해결하며
            개발 역량을 지속적으로 향상시키고 있습니다.
          </p>
        </div>
      </div>
      <div className="project-history">
        <div className="detail-item">
          <span className="detail-item__number">3</span> Project History
        </div>
        <div className="project-detail">
          <div className="project-detail__title">
            주문이요 (음식 주문 플랫폼){" "}
            <span className="project-detail__duration">
              2024.07.24 - 2024.08.23
            </span>
          </div>
          <div className="project-detail__role">
            <strong>Role:</strong> 기능 고도화 및 성능 개선
          </div>
          <div className="project-detail__features">
            <strong>주요 기능:</strong>
            <ul>
              <li>
                회원 관리: 회원가입 (일반 사용자, 사업자), 로그인, 로그아웃
              </li>
              <li>
                사용자 기능: 마이페이지 (정보 수정, 주소 관리, 주문 내역 조회,
                리뷰 관리, 회원 탈퇴), 위치 기반 검색, 카테고리 필터, 장바구니,
                주문 및 결제, 주문 확인 및 취소
              </li>
              <li>
                사업자 기능: 주문 관리, 주문 내역 조회, 리뷰 관리, 매장 관리
                (메뉴 등록 및 수정, 영업 시간 설정, 매장 정보 업데이트), 통계
                (매출, 주문량, 인기 메뉴 등)
              </li>
            </ul>
          </div>
          <div className="project-detail__technologies">
            <strong>사용 기술:</strong> React, React Router, Redux, Axios, Sass,
            Emotion, Material-UI
          </div>
          <div className="project-detail__contributions">
            <strong>역할 및 기여도:</strong> 기존 시스템의 성능 개선 및 사용자
            피드백 반영하여 기능 추가
          </div>
          <div className="project-detail__learnings">
            <strong>배운 점:</strong>
            <ul>
              <li>Redux Toolkit을 활용한 상태 관리</li>
              <li>MUI를 활용한 UI 컴포넌트 커스터마이징</li>
              <li>Axios를 이용한 RESTful API 연동 및 데이터 처리</li>
            </ul>
          </div>
          <div>
            <strong>Project link:</strong>{" "}
            <a className="project-detail__link" href="#none">
              #none
            </a>
          </div>
          <div className="project-detail__description">
            <p>
              주문이요 프로젝트에서는 사용자의 요구를 반영하여 기능을 고도화하고
              성능을 개선하는 작업을 진행했습니다. 사용자 피드백을 반영하여
              서비스의 품질을 높였습니다.
            </p>
          </div>
        </div>
        <div className="project-detail">
          <div className="project-detail__title">
            Plant Diary (식물 관리 서비스){" "}
            <span className="project-detail__duration">
              2024.05.24 - 2024.06.23
            </span>
          </div>
          <div className="project-detail__role">
            <strong>Role:</strong> 커뮤니티 기능 개발
          </div>
          <div className="project-detail__features">
            <strong>주요 기능:</strong>
            <ul>
              <li>회원 관리: 회원가입, 로그인, 프로필 관리</li>
              <li>
                식물 관리: 식물 등록 (종류, 이름, 사진 등), 일정 관리 (물주기,
                분갈이, 비료 주기)
              </li>
              <li>
                커뮤니티: 게시글 작성, 수정, 삭제, 검색 및 정렬, 추천, 댓글,
                페이지네이션
              </li>
            </ul>
          </div>
          <div className="project-detail__technologies">
            <strong>사용 기술:</strong> React, React Router, Axios, Sass,
            Emotion
          </div>
          <div className="project-detail__contributions">
            <strong>역할 및 기여도:</strong> 커뮤니티 기능 개발 (100%)
          </div>
          <div className="project-detail__learnings">
            <strong>배운 점:</strong>
            <ul>
              <li>
                React 생태계의 다양한 라이브러리를 활용하여 효율적인 개발 방법
                습득
              </li>
              <li>사용자 중심의 UI/UX 디자인 원칙 적용</li>
              <li>
                댓글 기능, 페이지네이션 등 복잡한 기능 구현 및 최적화 능력 향상
              </li>
            </ul>
          </div>
          <div>
            <strong>Project link:</strong>{" "}
            <a className="project-detail__link" href="#none">
              #none
            </a>
          </div>
          <div className="project-detail__description">
            <p>
              Plant Diary 프로젝트에서는 커뮤니티 기능을 중심으로 식물 관리
              서비스를 구축했습니다. 사용자 요구에 맞춘 다양한 기능을 제공하며,
              효율적인 개발 방법을 적용했습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="degree">
        <div className="detail-item">
          <span className="detail-item__number">4</span> Degree
        </div>
        <div className="degree-detail">
          <div className="degree-detail__title">
            기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트) 개발자
            양성{" "}
            <span className="degree-detail__duration">
              2024-03-29 - 2024-09-13
            </span>
          </div>
          <div className="degree-detail__description">
            <p>
              React 및 관련 라이브러리 활용 기술과 프로젝트 중심의 프론트엔드
              개발 방법을 배웠습니다. 협업 프로젝트를 통해 요구 사항 분석,
              디자인 구현, 코드 최적화 등을 경험하며 현업에서 필요한 개발 역량을
              강화했습니다.
            </p>
          </div>
        </div>
        <div className="degree-detail">
          <div className="degree-detail__title">
            K-MOOC x Udemy 구독권 (6개월){" "}
            <span className="degree-detail__duration">2023-12 - 2024-06</span>
          </div>
          <div className="degree-detail__description">
            <p>
              프론트엔드 개발에 필요한 다양한 온라인 강의를 수강하며 최신 기술
              트렌드와 개발 방법론을 학습했습니다.
            </p>
          </div>
        </div>
        <div className="degree-detail">
          <div className="degree-detail__title">
            [과정평가형] 정보처리산업기사 (자바(Java) 프로그래밍 활용 웹 개발) A{" "}
            <span className="degree-detail__duration">
              2021-12-13 - 2022-05-25
            </span>
          </div>
          <div className="degree-detail__description">
            <p>
              자바를 활용한 웹 개발 과정으로, 서버 사이드 프로그래밍과
              데이터베이스 연동을 학습했습니다. 프론트엔드와 백엔드의 상호작용을
              이해하고 웹 애플리케이션의 전체적인 구조를 설계하는 능력을
              길렀습니다.
            </p>
          </div>
        </div>
        <div className="degree-detail">
          <div className="degree-detail__title">
            패스트캠퍼스 프론트엔드 개발{" "}
            <span className="degree-detail__duration">
              2021-12 - 현재 진행형
            </span>
          </div>
          <div className="degree-detail__description">
            <p>
              프론트엔드 개발의 기초부터 심화까지 다양한 기술을 공부하고
              있습니다. React를 중심으로 컴포넌트 기반 개발, 상태 관리, API 연동
              등을 포함하여 최신 기술을 지속적으로 학습하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
