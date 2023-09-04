import React, { useEffect, useState } from "react";
import styles from "../styles/guide.module.css";

export default function guide(props) {
  const [pageCondition, setPageCondition] = useState("condition1");
  const type = props.type;
  const content = props.content;

  return (
    <div className={styles.guideContainer}>
      <div className={styles.guideInnerWrapper}>
        <ul className={styles.guideTabWrapper}>
          <li
            style={
              pageCondition == "condition1"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.guideTab}
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
            className={styles.guideTab}
            onClick={(e) => setPageCondition("condition2")}
          ></li>
          <li
            style={
              pageCondition == "condition3"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.guideTab}
            onClick={(e) => setPageCondition("condition3")}
          ></li>
          <li
            style={
              pageCondition == "condition4"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.guideTab}
            onClick={(e) => setPageCondition("condition4")}
          ></li>
          <li
            style={
              pageCondition == "condition5"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.guideTab}
            onClick={(e) => setPageCondition("condition5")}
          ></li>
        </ul>

        <div
          className={`${styles.guideContentsWrapper} ${
            styles[`${pageCondition}`]
          }`}
        >
          <div className={styles.guideContentsHead}>
            {type === "game" ? <h3>게임 가이드</h3> : <h3>이용자 가이드</h3>}
          </div>
          <div className={styles.guideTableWrapper}></div>
        </div>
      </div>
    </div>
  );
}
