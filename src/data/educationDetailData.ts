import type { EducationDetail } from "../types/education";

export const EDUCATION_DETAIL_DATA: EducationDetail[] = [
  {
    id: "dx-school",
    title: "LG전자 DX School",
    period: "교육기간 2024.06 - 2024.12",
    tag: "데이터 기반 서비스 기획",
    items: [
      {
        text: "시장 데이터 분석(TF-IDF, LDA, 크롤링)을 활용한 ",
        highlightText: "문제 정의·인사이트 도출",
      },

      {
        text: "고객 경험 기반의 서비스 구조 설계 및 기능 기획",
        highlightText: "서비스 구조 설계 및 기능 기획",
      },

      {
        text: "실무형 프로젝트 3건 수행",
        children: [
          { text: "중고가전 서비스 기획 (2등, 우수상)" },
          { text: "K-pop 굿즈 서비스 기획 (1등, 최우수상)" },
          { text: "기획·분석 기반 서비스 구현 프로젝트 (2등, 우수상)" },
        ],
      },

      {
        text: "분석-기획-UX 전 과정을 경험하며 \n",
        highlightText: "프론트엔드 개발 시 사용자 흐름·기능 설계에 강점을 보유",
      },
    ],
  },

  {
    id: "zero-base",
    title: "제로베이스",
    period: "교육기간 2025.02 - 2025.08",
    tag: "프론트엔드 취업 스쿨 36기",
    items: [
      {
        text: "HTML/CSS/JavaScript 기반의 웹 기본기 및 DOM 조작 학습",
      },

      {
        text: "React 기반 컴포넌트 개발, 상태 관리, 라우팅 등 SPA 구조 이해",
      },

      {
        text: "TypeScript를 활용한 정적 타입 기반 개발 실습",
      },

      {
        text: "Redux/Recoil 등 상태 관리 도구 실습",
      },

      {
        text: "API 연동 및 비동기 처리(Axios, Fetch)",
      },

      {
        text: "반응형 UI, 재사용 가능한 컴포넌트 설계",
      },

      {
        text: "Git/GitHub 기반 협업 및 PR 방식 실습",
      },
      {
        text: "실제 서비스 형태의 프로젝트를 진행하며 \n",
        highlightText: "기획 → UI 구현 → 상태 관리 → 배포까지 전 과정을 경험",
      },
    ],
  },
];
