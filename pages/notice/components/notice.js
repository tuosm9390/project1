import React, { useState } from "react"
import styles from "../styles/notice.module.css"

export default function notice() {
  const [pageCondition, setPageCondition] = useState("condition1")

  return (
    <div className={styles.noticeContainer}>
      <div className={styles.noticeInnerWrapper}>
        <div className={styles.noticeTabWrapper}>
          <ul className={styles.noticeTab}>
            <li
              style={
                pageCondition == "condition1"
                  ? { backgroundColor: "#4169E1" }
                  : { backgroundColor: "black" }
              }
              onClick={(e) => setPageCondition("condition1")}
            >
              전체
            </li>
            <li
              style={
                pageCondition == "condition2"
                  ? { backgroundColor: "#4169E1" }
                  : { backgroundColor: "black" }
              }
              onClick={(e) => setPageCondition("condition2")}
            >
              공지사항
            </li>
            <li
              style={
                pageCondition == "condition3"
                  ? { backgroundColor: "#4169E1" }
                  : { backgroundColor: "black" }
              }
              onClick={(e) => setPageCondition("condition3")}
            >
              이벤트
            </li>
          </ul>
        </div>

        <div className={styles.noticeContentsWrapper}>
          <div className={styles.noticeContentsBox}></div>
          <div className={styles.noticeContentsBox}></div>
          <div className={styles.noticeContentsBox}></div>
          <div className={styles.noticeContentsBox}></div>
          <div className={styles.noticeContentsBox}></div>
          <div className={styles.noticeContentsBox}></div>
        </div>
      </div>
    </div>
  )
}
