import type { ProjectItem } from "../types/projects";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "behindkit",
    title: "BEHINDKIT.",
    subtitle: "디지털 파일 쇼핑몰",
    period: "2025.06.09 - 2025.07.04",
    members: "1명",
    roles: ["기획", "디자인", "개발"],
    techs: [
      "TypeScript",
      "React",
      "Recoil",
      "CSS",
      "Firebase",
      "Vite",
      "Vercel",
    ],

    thumbnail: "/projectLogo/behindkit.png",
    links: {
      gitHub: "https://github.com/minioness/behindKit",
      web: "",
    },

    notion:
      "https://www.notion.so/BEHIND-KIT-2c0805aa8c3f80269e54db025f5e49d4?source=copy_link",
  },

  {
    id: "cohouse",
    title: "COHOUSE",
    subtitle: "공동생활 통합 관리 플랫폼",
    period: "2025.07.28 - 2025.09.04",
    members: "7명 (BE 4명, FE 3명)",
    roles: ["기획", "디자인", "개발"],
    techs: [
      "TypeScript",
      "React",
      "ReactQuery",
      "ReactHookForm",
      "TailwindCSS",
      "MSW",
      "Axios",
      "Vite",
      "Vercel",
    ],
    thumbnail: "/projectLogo/cohouse.png",

    links: {
      gitHub: "https://github.com/CoHouseTeam",
      web: "https://cohouse.vercel.app",
    },

    notion:
      "https://onyx-cloak-677.notion.site/CoHouse-2428e1f790e98080ab7cdfe10843bb78?source=copy_link",
  },

  {
    id: "homemate",
    title: "HOMEMATE",
    subtitle: "1인가구 집안일 루틴 설계 서비스",
    period: "2025.09.01 - 진행중",
    members: "11명 (PM 3명, UI/UX 3명, FE 1명, BE 4명)",
    roles: ["개발"],
    techs: [
      "TypeScript",
      "React",
      "ReactNative",
      "ReactQuery",
      "ReactHookForm",
      "Axios",
      "Expo",
      "Vercel",
    ],
    thumbnail: "/projectLogo/homemate.svg",

    links: {
      gitHub: "https://github.com/Homemate-dev",
      web: "https://app.homemate.io.kr",
    },

    notion: "https://www.notion.so/Zerobase-2-25e6d021113580a09378ddca3e56a13c",
  },

  {
    id: "portfolio",
    title: "MINIONEFOLIO",
    subtitle: "프론트엔드 포트폴리오",
    period: "2025.12.10 - 진행중",
    members: "1명",
    roles: ["기획", "디자인", "개발"],
    techs: ["TypeScript", "React", "CSS", "Vite", "Vercel"],
    thumbnail: "/projectLogo/minionefolio.svg",

    links: {
      gitHub: "https://github.com/minioness/MINIONEFOLIO",
      web: "",
    },

    notion: "",
  },
];
