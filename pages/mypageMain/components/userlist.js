//15. 추천 지인 리스트
import styles from "../styles/userlist.module.css"

export default function userlist() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.boxWrapper}>
        <div className={styles.titleContainer}>
          <div>추천 지인 리스트</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.norecommand}>
            <div>아직 추천이 없습니다.</div>
          </div>
          <div className={styles.btnContainer}>
            <button>
              <div>지인추천</div>
            </button>
            <button style={{ backgroundColor: "black" }}>
              <div>상세보기</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
