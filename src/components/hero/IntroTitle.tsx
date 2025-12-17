import { useEffect, useState } from "react";
import styles from "../../styles/hero/title.module.scss";
import { textHighlight } from "../../utils/TextHighlight";

const L1 = "안녕하세요";

const H2 = "사용자 경험";
const R2 = "을 고민하는";

const H3 = "프론트엔드";
const R3 = " 개발자";

const H4 = "민희원";
const R4 = " 입니다";

export default function IntroTitle() {
  const [startIntro, setStartIntro] = useState(false);
  // 현재 줄에서 몇 글자까지 보여줄지
  const [charCount, setCharCount] = useState(0);
  // 지금 몇 번째 줄을 타이핑 중인지
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    // 첫 렌더가 끝난 다음에 startIntro를 true로 바꿔서
    // "이제 등장 애니메이션 시작!" 신호를 줌
    const t = window.setTimeout(() => setStartIntro(true), 50);

    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!startIntro) return;

    // 현재 줄 길이 계산
    const currentLen =
      lineIndex === 0
        ? L1.length
        : lineIndex === 1
        ? H2.length + R2.length
        : lineIndex === 2
        ? H3.length + R3.length
        : H4.length + R4.length;

    // 현재 줄이 끝났으면 다음 줄로
    if (charCount >= currentLen) {
      if (lineIndex >= 3) return;

      const t = window.setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharCount(0);
      }, 200);

      return () => window.clearTimeout(t);
    }

    // 아직이면 한 글자 추가
    const t = window.setTimeout(() => {
      setCharCount((prev) => prev + 1);
    }, 120);

    return () => window.clearTimeout(t);
  }, [startIntro, lineIndex, charCount]);

  const getCountForLine = (idx: number) => {
    if (idx < lineIndex) return Infinity; // 이전 줄: 전부 보여주기
    if (idx > lineIndex) return 0; // 다음 줄: 아직 안 보여주기
    return charCount; // 현재 줄: charCount 만큼
  };

  const c1 = getCountForLine(0);
  const c2 = getCountForLine(1);
  const c3 = getCountForLine(2);
  const c4 = getCountForLine(3);

  return (
    <div
      className={`${styles.heroText} ${startIntro ? styles.startIntro : ""}`}
    >
      <p className={`${styles.introLine} ${styles.delay1}`}>
        {L1.slice(0, c1 === Infinity ? L1.length : c1)}
      </p>

      <p className={`${styles.introLine} ${styles.delay2}`}>
        {textHighlight({
          count: c2 === Infinity ? H2.length + R2.length : c2,
          highlight: H2,
          rest: R2,
          highlightClass: styles.pointYellow,
        })}
      </p>

      <p className={`${styles.introLine} ${styles.delay3}`}>
        {textHighlight({
          count: c3 === Infinity ? H3.length + R3.length : c3,
          highlight: H3,
          rest: R3,
          highlightClass: styles.pointRed,
        })}
      </p>

      <p className={`${styles.introLine} ${styles.delay4}`}>
        {textHighlight({
          count: c4 === Infinity ? H4.length + R4.length : c4,
          highlight: H4,
          rest: R4,
          highlightClass: styles.pointPurple,
        })}
      </p>
    </div>
  );
}
