import { EDUCATION_DATA } from "../../data/educationData";
import styles from "../../styles/education/Education.module.scss";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      {/* 타이틀 */}

      <div className={styles.titleArea}>
        <a className={styles.title}># EDUCATION</a>
        <p className={styles.desc}>
          <span>프론트엔드 개발자가 되기 위한 교육 및 자격증 취득</span>
        </p>
      </div>

      {/* 본문 */}
      <div className={styles.body}>
        {EDUCATION_DATA.map((education) => (
          <div key={education.year} className={styles.yearGroup}>
            {/* 연도 */}
            <div className={styles.year}>{education.year}</div>

            {/* 라인 + dot */}
            <div className={styles.lineDot}>
              <span className={styles.dot} />
              <span className={styles.line} />
            </div>

            {/* 아이템들 */}

            <div className={styles.items}>
              {education.items.map((item, idx) => (
                <div key={`${item.date}-${idx}`} className={styles.item}>
                  <p className={styles.date}>{item.date}</p>

                  <div className={styles.itemDesc}>
                    <p className={styles.title}>{item.title}</p>

                    {item.hasDetail && (
                      <button type="button" className={styles.moreBtn}>
                        자세히 보기
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
