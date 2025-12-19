import styles from "../../styles/skills/Skills.module.scss";
import { SKILLS_DATA } from "./skillsData";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      {/* 타이틀 */}

      <div className={styles.titleArea}>
        <a className={styles.title}># SKILLS</a>
        <p className={styles.desc}>
          <span>현재까지 배우고 사용 해봤던 기술</span>
        </p>
      </div>

      {/* 본문 */}
      <div className={styles.body}>
        {SKILLS_DATA.map((section) => (
          <article className={styles.skillCard}>
            <h2 className={styles.skillTitle}>{section.title}</h2>

            <div className={styles.skillArea}>
              {section.skills.map((skill) => (
                <div
                  key={skill.label}
                  className={styles.skill}
                  style={{
                    backgroundColor: skill.color,
                  }}
                >
                  {skill.label}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
