export type ProjectRole = "기획" | "디자인" | "개발";

export type ProjectLink = {
  gitHub: string;
  web?: string;
};

export type ProjectTech =
  | "TypeScript"
  | "JavaScript"
  | "React"
  | "ReactNative"
  | "ReactQuery"
  | "Redux"
  | "Recoil"
  | "Axios"
  | "MSW"
  | "Firebase"
  | "Vite"
  | "Vercel"
  | "Sass"
  | "CSS"
  | "TailwindCSS"
  | "Expo"
  | "GitHub"
  | "ReactHookForm";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;

  period: string;
  members: string;
  roles: ProjectRole[];
  techs: ProjectTech[];

  thumbnail: string;
  links: ProjectLink;

  notion: string;
}
