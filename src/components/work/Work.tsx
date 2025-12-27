import { WORK_EXPERIENCE_DATA } from "../../data/workData";
import styles from "../../styles/work/Work.module.scss";

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      {/* 타이틀 */}

      <div className={styles.titleArea}>
        <a className={styles.title}># WORK</a>
        <p className={styles.desc}>
          <span>프론트엔드 개발자로 전향하기 전의 직무 경험</span>
        </p>
      </div>

      {/* 본문 */}
      <div className={styles.body}>
        {WORK_EXPERIENCE_DATA.map((work) => (
          <article key={work.company} className={styles.workCard}>
            {/* 헤더(회사 정보) */}
            <div className={styles.header}>
              <div className={styles.ImgCard}>
                <img src={work.logoImg} alt={`${work.company} 로고`} />
              </div>

              <div className={styles.companyInfo}>
                <h3 className={styles.company}>{work.company}</h3>
                <p className={styles.period}>{work.period}</p>
                <p className={styles.role}>{work.role}</p>
              </div>
            </div>

            {/* 업무 설명 영역 */}
            <div className={styles.sections}>
              {work.sections.map((section) => (
                <div key={section.title} className={styles.section}>
                  <h4 className={styles.sectionTitle}>{section.title}</h4>

                  <ul className={styles.list}>
                    {section.items.map((item, index) => (
                      <li key={index} className={styles.item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
