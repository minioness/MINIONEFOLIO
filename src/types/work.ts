export type WorkSection =
  | { title: "주요 업무"; items: string[] }
  | { title: "성과"; items: string[] }
  | { title: "기술 스택"; items: string[] }
  | { title: "문제 해결"; items: string[] }
  | { title: "배운 점"; items: string[] }
  | { title: "프론트엔드 업무에 기여할 수 있는 경험"; items: string[] };

export type WorkExperience = {
  company: string;
  logoImg: string;
  period: string;
  role: string;
  sections: WorkSection[];
};
