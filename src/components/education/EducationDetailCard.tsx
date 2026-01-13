import styles from "../../styles/education/EducationDetailCard.module.scss";
import type { EducationDetail } from "../../types/education";

type Props = {
  detail: EducationDetail;
  onClose: () => void;
  isOpen: boolean;
};

export default function EducationDetailCard({
  detail,
  onClose,
  isOpen,
}: Props) {
  return (
    <div
      className={`${styles.detailCard} ${isOpen ? styles.open : styles.closed}`}
    >
      <button type="button" onClick={onClose} className={styles.closeBtn}>
        ✖️
      </button>

      {/* 헤더 */}
      <div className={styles.header}>
        <h3 className={styles.title}>{detail.title}</h3>
        <p className={styles.period}>{detail.period}</p>
      </div>

      {/* 태그 */}
      <div className={styles.tag}>{detail.tag}</div>

      {/* 설명 */}

      <div className={styles.items}>
        <ul className={styles.list}>
          {detail.items.map((item, idx) => {
            const isLastItem = idx === detail.items.length - 1;

            return (
              <li key={`${item.text}-${idx}`} className={styles.listItem}>
                <span className={styles.text}>{item.text}</span>

                {item.highlightText && (
                  <span
                    className={`${styles.text} ${
                      isLastItem ? styles.highlightRed : styles.highlightBlack
                    }`}
                  >
                    {item.highlightText}
                  </span>
                )}

                {/*  children이 있는 경우 */}
                {item.children?.length ? (
                  <ul className={styles.subList}>
                    {item.children.map((child, cIdx) => (
                      <li
                        key={`${child.text}-${cIdx}`}
                        className={styles.subListItem}
                      >
                        <span className={styles.text}>{child.text}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
