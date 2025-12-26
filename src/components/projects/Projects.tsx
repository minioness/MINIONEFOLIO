import { PROJECTS_DATA } from "../../data/projectsData";
import styles from "../../styles/projects/Projects.module.scss";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      {/* 타이틀 */}

      <div className={styles.titleArea}>
        <a className={styles.title}># PROJECTS</a>
        <p className={styles.desc}>
          <span>사용자 경험을 중심으로 기획·개발한 실제 프로젝트</span>
        </p>
      </div>

      {/* 본문 */}

      <div className={styles.body}>
        <div className={styles.gridArea}>
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
