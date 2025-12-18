import styles from "../../styles/about/About.module.scss";
import memoji from "../../assets/images/me.svg";
import GitHub from "../../assets/icons/GItHub.svg";
import Velog from "../../assets/icons/Velog.svg";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* 타이틀 */}

      <a className={styles.title}># ABOUT ME</a>

      {/* 본문 */}
      <div className={styles.body}>
        {/* 왼쪽  내 정보 */}
        <div className={styles.LeftInfo}>
          <img src={memoji} alt="memoji" className={styles.memoji} />

          <div className={styles.profile}>
            <p>MIN HEE WON</p>
            <p>민희원</p>
            <p>1995. 09. 29</p>

            <div className={styles.sns}>
              <a
                href="https://github.com/minioness"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub Icon" />
              </a>

              <a
                href="https://velog.io/@lkmj12qw/posts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Velog} alt="Velog Icon" />
              </a>
            </div>
          </div>
        </div>

        {/* 오른쪽 내 정보 */}
        <div className={styles.rightInfo}>
          <div className={styles.contact}>
            <h2 className={styles.detailTitle}>CONTACT</h2>
            <div className={styles.detail}>
              <div className={styles.phoneNumber}>
                <p>전화번호</p>
                <a
                  href="tel:01099748781"
                  aria-label="전화번호 010-9974-8781로 전화 걸기"
                >
                  010. 9974. 8781
                </a>
              </div>
              <div className={styles.email}>
                <p>이메일</p>
                <a
                  href="mailto:lkmj12qw@naver.com"
                  aria-label="lkmj12qw@naver.com 메일 보내기"
                >
                  lkmj12qw@naver.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.background}>
            <h2 className={styles.detailTitle}>BACKGROUND</h2>
            <div className={styles.detail}>
              <div className={styles.address}>
                <p>주소</p>
                <p>경기도 화성시</p>
              </div>
              <div className={styles.major}>
                <p>학교·전공</p>
                <p>경기대학교-화학공학</p>
              </div>
            </div>
          </div>

          {/* 버튼 */}
          <button>버튼 하나가 바꾼 길 보러가기</button>
        </div>
      </div>
    </section>
  );
}
