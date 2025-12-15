import styles from "../../styles/hero/hero.module.scss";

const clusters = [
  // ── TOP 라인  ──
  { left: "8%", top: "6%" },
  { left: "28%", top: "3%" },
  { left: "50%", top: "5%" },
  { left: "72%", top: "3%" },
  { left: "90%", top: "7%" },

  // ── LEFT 라인 ──
  { left: "2%", top: "20%" },
  { left: "0%", top: "38%" },
  { left: "2%", top: "58%" },
  { left: "4%", top: "78%" },

  // ── RIGHT 라인 ──
  { left: "76%", top: "22%" },
  { left: "80%", top: "40%" },
  { left: "78%", top: "62%" },
  { left: "74%", top: "80%" },

  // ── BOTTOM 라인 ──
  { left: "18%", top: "88%" },
  { left: "46%", top: "90%" },
  { left: "70%", top: "87%" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* 별 레이어 */}
      <div className={styles.stars} aria-hidden="true">
        {clusters.map((pos, i) => (
          <div
            key={i}
            className={styles.cluster}
            style={{ left: pos.left, top: pos.top }}
          >
            <span className={`${styles.dot} ${styles.wBig}`} />
            <span className={`${styles.dot} ${styles.green}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.wSmall}`} />
            <span className={`${styles.dot} ${styles.purple}`} />
            <span className={`${styles.dot} ${styles.green2}`} />
          </div>
        ))}
      </div>

      {/* 궤도 영역 */}
      <svg className={styles.orbit} viewBox="0 0 600 420" aria-hidden="true">
        <ellipse
          className={styles.orbitLine}
          cx="300"
          cy="210"
          rx="300"
          ry="200"
        />
      </svg>

      <img src="/ship.svg" alt="" className={styles.ship} aria-hidden="true" />

      {/* 소개 영역 */}
      <div className={styles.hero_center}>
        {/* 텍스트 */}
        <div className={styles.hero_text}>
          <span className={styles.line1}>안녕하세요</span>
          <span className={styles.line2}>
            <span className={styles.line2_color}>사용자 경험</span>을 고민하는
          </span>
          <span className={styles.line3}>
            <span className={styles.line3_color}>프론트엔드</span> 개발자
          </span>
          <span className={styles.line4}>
            <span className={styles.line4_color}>민희원</span> 입니다
          </span>
        </div>

        {/* 스크롤 아이콘 */}
        <div className={styles.scroll}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
}
