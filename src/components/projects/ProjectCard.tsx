import { PROJECT_ROLE_STYLE } from "../../constants/projectRoleStyle";
import styles from "../../styles/projects/ProjectCard.module.scss";
import type { ProjectItem } from "../../types/projects";

type Props = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      {/* 깃허브 및 배포 링크 */}
      <div className={styles.links}>
        <a
          href={project.links.gitHub}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <img src="/icons/tech/GitHub.svg" alt="github logo" />
        </a>

        <a
          href={project.links.web}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <img src="/icons/tech/Globe.svg" alt="web image" />
        </a>
      </div>

      {/* 썸네일 + 타이틀 */}
      <div className={styles.header}>
        <div className={styles.thumbnail}>
          <img src={project.thumbnail} alt="" />
        </div>
        <div className={styles.headText}>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </div>

      {/* 정보 */}
      <div className={styles.info}>
        <div className={styles.row}>
          <span className={styles.label}>진행기간</span>
          <span className={styles.value}>{project.period}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>개발인원</span>
          <span className={styles.value}>{project.members}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>역할</span>

          <div className={styles.roles}>
            {project.roles.map((r) => {
              const s = PROJECT_ROLE_STYLE[r];

              return (
                <span
                  key={r}
                  className={styles.role}
                  style={{ backgroundColor: s.bg }}
                >
                  {r}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* 기술 */}
      <div className={styles.techs}></div>

      {/* 자세히보기 버튼 */}
    </article>
  );
}
