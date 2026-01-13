import { useEffect, useRef, useState } from "react";
import styles from "../../styles/layout/NavBar.module.scss";
import { handleMove } from "../../utils/handleMove";

export default function NavBar() {
  const [isHero, setIsHero] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      // hero가 화면에 조금이라도 보이면 true
      // hero가 화면에서 완전히 사라지면 false
      setIsHero(entry.isIntersecting);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;

      if (menuRef.current?.contains(target)) return; // 메뉴 안
      if (btnRef.current?.contains(target)) return; // 버튼 위

      setIsMenuOpen(false); // 그 외는 닫기
    };

    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [isMenuOpen]);

  const moveAndClose = (id: string) => {
    handleMove(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isHero ? styles.dark : styles.light}`}>
      <div onClick={() => handleMove("hero")} className={styles.logo}>
        <img src={isHero ? "/MoonStars-white.svg" : "/MoonStars.svg"} alt="" />
      </div>
      <ul className={styles.lists}>
        <li className={styles.item} onClick={() => handleMove("about")}>
          ABOUT
        </li>
        <li className={styles.item} onClick={() => handleMove("skills")}>
          SKILLS
        </li>
        <li className={styles.item} onClick={() => handleMove("work")}>
          WORK
        </li>
        <li className={styles.item} onClick={() => handleMove("projects")}>
          PROJECTS
        </li>
      </ul>

      <button
        type="button"
        ref={btnRef}
        className={styles.hamburger}
        aria-label="Open menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {isMenuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <button
            type="button"
            className={styles.mobileItem}
            onClick={() => moveAndClose("about")}
          >
            ABOUT
          </button>
          <button
            type="button"
            className={styles.mobileItem}
            onClick={() => moveAndClose("skills")}
          >
            SKILLS
          </button>
          <button
            type="button"
            className={styles.mobileItem}
            onClick={() => moveAndClose("work")}
          >
            WORK
          </button>
          <button
            type="button"
            className={styles.mobileItem}
            onClick={() => moveAndClose("projects")}
          >
            PROJECTS
          </button>
        </div>
      )}
    </nav>
  );
}
