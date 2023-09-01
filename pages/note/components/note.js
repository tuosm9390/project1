import React, { useEffect, useState } from "react";
import styles from "../styles/note.module.css";
import NoteTable from "./noteTable";

export default function note() {
  const [pageCondition, setPageCondition] = useState("condition1");

  return (
    <div className={styles.noteContainer}>
      <div className={styles.noteInnerWrapper}>
        <ul className={styles.noteTabWrapper}>
          <li
            style={
              pageCondition == "condition1"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.noteTab}
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
            className={styles.noteTab}
            onClick={(e) => setPageCondition("condition2")}
          >
            안 읽음
          </li>
          <li
            style={
              pageCondition == "condition3"
                ? { backgroundColor: "#4169E1" }
                : { backgroundColor: "black" }
            }
            className={styles.noteTab}
            onClick={(e) => setPageCondition("condition3")}
          >
            읽음
          </li>
        </ul>
        <div
          className={`${styles.noteContentsWrapper} ${
            styles[`${pageCondition}`]
          }`}
        >
          <div className={styles.noteContentsHead}>
            <h3>전체</h3>
            <div className={styles.btnWrapper}>
              {pageCondition == "condition3" && (
                <button className={styles.readSelDelBtn}>선택 삭제</button>
              )}
              {pageCondition != "condition2" && (
                <button className={styles.readAllDelBtn}>읽음 전체 삭제</button>
              )}
            </div>
          </div>
          <NoteTable />
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
