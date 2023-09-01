import React, { useEffect, useState } from "react";
import styles from "../styles/bonus.module.css";
import BonusTable from "./bonusTable";

export default function bonus() {
  const [pageCondition, setPageCondition] = useState("condition1");

  return (
    <div className={styles.bonusContainer}>
      <div className={styles.bonusInnerWrapper}>
        <ul className={styles.bonusTabWrapper}>
          <li
            style={
              pageCondition == "condition1"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.bonusTab}
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
            className={styles.bonusTab}
            onClick={(e) => setPageCondition("condition2")}
          ></li>
          <li
            style={
              pageCondition == "condition3"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.bonusTab}
            onClick={(e) => setPageCondition("condition3")}
          ></li>
          <li
            style={
              pageCondition == "condition4"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.bonusTab}
            onClick={(e) => setPageCondition("condition4")}
          ></li>
          <li
            style={
              pageCondition == "condition5"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.bonusTab}
            onClick={(e) => setPageCondition("condition5")}
          ></li>
        </ul>

        <div
          className={`${styles.bonusContentsWrapper} ${
            styles[`${pageCondition}`]
          }`}
        >
          <div className={styles.bonusContentsHead}>
            {pageCondition === "condition1" ? (
              <h3>혜택</h3>
            ) : (
              <h3>보너스 혜택</h3>
            )}
          </div>
          <div className={styles.bonusTableWrapper}>
            <BonusTable />
            <BonusTable />
            <BonusTable />
            <BonusTable />
            <BonusTable />
          </div>
          <div className={styles.pagination}>
            <button className={styles.prevBtn}>{"<"}</button>
            <div className={styles.pages}>1</div>
            <button className={styles.nextBtn}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
