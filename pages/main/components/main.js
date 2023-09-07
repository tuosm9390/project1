import styles from "../styles/main.module.css"

function main() {
  return (
    // 로그인 전/후
    <section className={styles.mainSectionContainer}>
      <header className={styles.header}>LIVE</header>

      {/* 파란색 공지사항 */}
      <section className={styles.notibarContainer}>
        <div className={styles.notibarWrapper}>
          <div className={styles.notibar}>
            <h3>공지사항 LIVE</h3>
          </div>
          <div className={styles.currentTime}>
            <p>2023/00/00 04:38:42 PM GMT+X</p>
          </div>
        </div>
      </section>

      <section className={styles.contentsContainer}>
        {/* 최근게임 */}
        <div className={styles.contentsSection}>
          <div className={styles.recentFavoriteContainer}>
            <h2
              style={{
                marginRight: "7px",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              최근게임
            </h2>
            <div className={styles.recentFavorite}>
              <div className={styles.recent}>최신게임</div>
              <div className={styles.favorite}>즐겨찾기</div>
            </div>
          </div>
          <div>
            <h4 className={styles.noList}>표시할 내역이 없습니다</h4>
          </div>
        </div>
        {/* 게임 */}
        <div className={styles.contentsSection}>
          <div className={styles.gridContentsTitle}>
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "700" }}>게임1</h2>
            </div>
            <div
              style={{ borderBottom: "1px solid white", width: "1077px" }}
            ></div>
          </div>
          <div className={styles.gridContents}>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
            <div className={styles.gridBox}>
              <div className={styles.gridImg}></div>
              <h3>강강강강강강강강</h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default main
