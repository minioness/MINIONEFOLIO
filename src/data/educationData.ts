import type { EducationYear } from "../types/education";

export const EDUCATION_DATA: EducationYear[] = [
  {
    year: 2023,
    items: [
      {
        date: "2023.06.16",
        title: "데이터분석 준전문가(ADsP) 자격증 취득",
      },
    ],
  },

  {
    year: 2024,
    items: [
      {
        id: "dx-school",
        date: "2024.06 - 2024.12",
        title: "LG전자 DX School 부트캠프",
        hasDetail: true,
      },
      {
        date: "2024.09.20",
        title: "SQL 개발자(SQLD) 자격증 취득",
      },
    ],
  },

  {
    year: 2025,
    items: [
      {
        id: "zero-base",
        date: "2025.02 - 2025.08",
        title: "제로베이스 - 프론트엔드 취업 스쿨 36기",
        hasDetail: true,
      },
    ],
  },
  {
    year: 2026,
    items: [
      {
        date: "-",
        title: "Next...",
      },
    ],
  },
];
