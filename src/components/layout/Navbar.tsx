import { useEffect, useState } from "react";
import styles from "../../styles/layout/NavBar.module.scss";

export default function NavBar() {
  const [isHero, setIsHero] = useState(true);

  const handleMove = (id: string) => {
    const target = document.getElementById(id);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      // hero가 화면에 조금이라도 보이면 true
      // hero가 화면에서 완전히 사라지면 false
      setIsHero(entry.isIntersecting);
    });

    observer.observe(hero);
  }, []);

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
    </nav>
  );
}
