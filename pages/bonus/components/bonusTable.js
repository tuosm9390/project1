import React from "react";
import styles from "../styles/bonusTable.module.css";

export default function bonusTable() {
  return (
    <>
      <table className={styles.bonusListTable}>
        <thead>
          <tr>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
