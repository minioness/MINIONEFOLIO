import { useEffect, useState } from "react";
import styles from "../../styles/hero/hero.module.scss";
import IntroTitle from "./IntroTitle";
import type { HeroStep } from "../../types/hero";
import {
  HERO_CLUSTERS,
  type HeroClusterKey,
} from "../../constants/heroClusters";

function getClusterKey(width: number): HeroClusterKey {
  if (width <= 480) return "smallMobile";
  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";

  return "desktop";
}

export default function Hero() {
  // Hero 애니메이션 단계 관리
  const [step, setStep] = useState<HeroStep>("typing");

  //현재 화면 크기에 맞는 clusters 키 상태
  const [clusterKey, setClusterKey] = useState<HeroClusterKey>(() => {
    if (typeof window === "undefined") return "desktop";

    return getClusterKey(window.innerWidth);
  });
  // 화면 리사이즈에 따라 clusterKey를 갱신
  useEffect(() => {
    const onResize = () => {
      setClusterKey(getClusterKey(window.innerWidth));
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  // orbit 단계가 시작되면 5초 뒤 scroll 단계로 넘어가기
  useEffect(() => {
    if (step !== "orbit") return;

    const t = setTimeout(() => {
      setStep("scroll");
    }, 3500);

    return () => clearTimeout(t);
  }, [step]);

  const showOrbit = step !== "typing";
  const showScroll = step === "scroll";

  const clusters = HERO_CLUSTERS[clusterKey];

  return (
    <section id="hero" className={styles.hero}>
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
      <svg
        className={`${styles.orbit} ${showOrbit ? styles.showOrbit : ""}`}
        viewBox="0 0 600 420"
        aria-hidden="true"
      >
        <ellipse
          className={styles.orbitLine}
          cx="300"
          cy="210"
          rx="290"
          ry="200"
        />
      </svg>

      <div
        className={`${styles.orbitArea} ${showOrbit ? styles.showOrbit : ""}`}
        aria-hidden="true"
      >
        <img src="/ship.svg" alt="" className={styles.ship} />
      </div>

      {/* 소개 영역 */}
      <div className={styles.heroCenter}>
        {/* 텍스트 */}
        <IntroTitle onTypingDone={() => setStep("orbit")} />

        {/* 스크롤 아이콘 */}
        <div
          className={`${styles.scroll} ${showScroll ? styles.showScroll : ""}`}
        >
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
}
