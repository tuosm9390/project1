import React from "react"
import styles from "../styles/noteTable.module.css"

export default function noteTable(props) {
  return (
    <>
      <table className={styles.noteListTable}>
        <colgroup>
          <col width="202px" />
          <col width="376px" />
          <col width="302px" />
        </colgroup>
        <thead>
          <tr>
            <th>날짜</th>
            <th>제목</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-08-19 11:09:48</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
