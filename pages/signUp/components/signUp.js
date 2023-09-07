import React from "react"
import styles from "../styles/signUp.module.css"

export default function signUp() {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpInnerWrapper}>
        <div className={styles.signUpIcon} />
        <div className={styles.closeBtn}>
          <button>x</button>
        </div>
        <div className={styles.signUpTitle}>
          <h1>회원가입</h1>
        </div>

        <div className={styles.signUpGridWrapper}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.bannerWrapper}>
          <div className={styles.banner}></div>
          <div className={styles.script}>
            <span>1. 필수 항목을 모두 입력하셔야 합니다.</span>
            <span>2. 부정확한 정보 기입시 승인거부될 수 있습니다.</span>
          </div>
        </div>

        <div className={styles.signUpBtnWrapper}>
          <button className={styles.signUpBtn}>회원가입</button>
        </div>
      </div>
    </div>
  )
}
