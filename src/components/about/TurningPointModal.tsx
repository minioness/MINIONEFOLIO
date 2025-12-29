import { useEffect } from "react";
import styles from "../../styles/about/TurningPointModal.module.scss";

import TestTube from "../../assets/icons/TestTube.svg";
import ShipPurple from "../../assets/icons/ShipPurple.svg";
import Code from "../../assets/icons/Code.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function TurningPointModal({ isOpen, onClose }: Props) {
  // esc로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.track}>
            {/* 왼쪽 아이콘 */}
            <div className={styles.icon}>
              <img src={TestTube} alt="chemical engineering" />
            </div>

            {/* 트랙(점선) + 우주선 */}
            <div className={styles.line}>
              <span className={styles.dots} aria-hidden />
              <img src={ShipPurple} className={styles.rocket} alt="rocket" />
            </div>

            {/* 오른쪽 아이콘 */}
            <div className={styles.icon}>
              <img src={Code} alt="frontend" />
            </div>
          </div>
        </header>

        <section className={styles.body}>
          <p>
            화학공학을 전공하고{" "}
            <span className={styles.pointPurple}>
              반도체 엔지니어로 30개월간 근무
            </span>
            하며 공정 안정화와 장비 모니터링 업무를 맡았습니다.
          </p>

          <p>
            현장에서{" "}
            <span className={styles.pointRed}>
              UI 배치와 버튼 위치만으로도 작업 효율이 크게 달라진다는 경험
            </span>
            을 통해 사용자 경험의 힘을 깨달았습니다.
          </p>

          <p>
            이후 LG전자 DX School에서 데이터 기반 문제 정의와 UX 중심 서비스
            기획 프로젝트를 수행하며{" "}
            <span className={styles.pointPurple}>
              ‘사용자가 어떻게 흐르고, 어떤 경험을 하는가’를 설계하는 일
            </span>
            에 깊이 매료되었습니다.
          </p>
          <p>
            이 흐름 속에서 자연스럽게 프론트엔드 개발로 진로를 확장하게
            되었습니다.
          </p>
          <p>
            현재는{" "}
            <span className={styles.pointRed}>
              데이터 기반 사고·UX 관점·React/TypeScript 개발 역량
            </span>
            을 기반으로 더 나은 사용자 경험을 구현하는 프론트엔드 개발자로
            성장하고 있습니다.
          </p>
        </section>

        <button className={styles.closeBtn} onClick={onClose}>
          돌아가기
        </button>
      </div>
    </div>
  );
}
