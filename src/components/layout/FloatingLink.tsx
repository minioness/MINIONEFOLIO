import { useEffect, useState } from "react";
import styles from "../../styles/layout/FloatingLink.module.scss";
import { handleMove } from "../../utils/handleMove";
import arrowIcon from "../../assets/icons/arrow.svg";

export default function FloatingLink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      // hero가 화면에 조금이라도 보이면 숨김
      // hero가 화면에서 완전히 사라지면 보임
      setIsVisible(!entry.isIntersecting);
    });

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.wrap} ${isVisible ? "" : styles.isNotVisible}`}>
      <button
        type="button"
        className={styles.arrow}
        aria-label="맨 위로 이동"
        onClick={() => handleMove("hero")}
      >
        <img src={arrowIcon} alt="" />
      </button>
    </div>
  );
}
