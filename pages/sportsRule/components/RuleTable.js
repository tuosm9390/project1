import styles from "../styles/RuleTable.module.css"

export default function RuleTable() {
  return (
    <div className={styles.boxContainer}>
      <table className={styles.chargeListTable}>
        <colgroup>
          <col width="203px" />
          <col width="200px" />
          <col width="412px" />
        </colgroup>
        <thead>
          <tr>
            <th>회원 아이디</th>
            <th>가입일</th>
            <th>강강강강강</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>강강강</td>
            <td>강강강</td>
            <td>글글글글글글글글글글글글글글글글글글글글글글글글</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>강강강</td>
            <td>강강강</td>
            <td>글글글글글글글글글글글글글글글글글글글글글글글글</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>강강강</td>
            <td>강강강</td>
            <td>글글글글글글글글글글글글글글글글글글글글글글글글</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>강강강</td>
            <td>강강강</td>
            <td>글글글글글글글글글글글글글글글글글글글글글글글글</td>
          </tr>
        </tbody>
      </table>
      <div>글글글글글글글글글글글글글글글글글글글글글글글글</div>
    </div>
  )
}
