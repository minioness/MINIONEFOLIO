import { useMemo, useState } from "react";
import { EDUCATION_DATA } from "../../data/educationData";
import styles from "../../styles/education/Education.module.scss";
import EducationDetailCard from "./EducationDetailCard";
import { EDUCATION_DETAIL_DATA } from "../../data/educationDetailData";

export default function Education() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // id로 상세 데이터 찾기
  const selectedDetail = useMemo(() => {
    if (!selectedId) return null;

    return EDUCATION_DETAIL_DATA.find((d) => d.id === selectedId) ?? null;
  }, [selectedId]);

  const isModalOpen = Boolean(selectedDetail);

  const closeDetail = () => setSelectedId(null);

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
      <div
        className={`${styles.layout} ${isModalOpen ? styles.isModalOpen : ""}`}
      >
        {/* 타임라인 */}
        <div className={styles.timelineArea}>
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
                    <div
                      key={`${item.id ?? item.date}-${idx}`}
                      className={styles.item}
                    >
                      <p className={styles.date}>{item.date}</p>

                      <div className={styles.itemDesc}>
                        <p className={styles.title}>{item.title}</p>

                        {item.hasDetail && item.id && (
                          <button
                            type="button"
                            className={styles.moreBtn}
                            onClick={() => setSelectedId(item.id!)}
                          >
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
        </div>

        {/* 자세히 보기 카드 */}
        <aside className={styles.sidePanel}>
          {selectedDetail && (
            <EducationDetailCard
              detail={selectedDetail}
              onClose={closeDetail}
            />
          )}
        </aside>
      </div>
    </section>
  );
}
