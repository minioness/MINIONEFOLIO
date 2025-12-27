import type { WorkExperience } from "../types/work";

export const WORK_EXPERIENCE_DATA: WorkExperience[] = [
  {
    company: "(주) 알파에이디티",
    logoImg: "/companyLogo/company-alpha.png",
    period: "2021.12 - 2024.05 (2년 6개월)",
    role: "반도체 공정 엔지니어",
    sections: [
      {
        title: "주요 업무",
        items: [
          "반도체 공정 안정화 및 장비 상태 모니터링",
          "이상 신호 감지 및 원인 분석, 품질 유지 위한 공정 최적화",
          "온도·압력 등 장비 제어 파라미터 분석 및 불량률 개선",
          "문제 상황 발생 시 즉각적인 트러블슈팅 및 재발 방지 조치",
        ],
      },
      {
        title: "프론트엔드 업무에 기여할 수 있는 경험",
        items: [
          "공정 이상 발생 시 원인을 단계적으로 추적하며 논리적 디버깅 역량 강화",
          "장비 UI 구성 차이가 작업 효율에 미치는 영향을 경험하며 사용성·작업 흐름의 중요성 체감",
          "다양한 팀과 협업하며 명확한 커뮤니케이션 및 문제 해결 중심의 협업 역량",
        ],
      },
    ],
  },
];
