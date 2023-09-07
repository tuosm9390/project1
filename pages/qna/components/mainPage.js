//자주 묻는 질문
import styles from "../styles/mainPage.module.css"
import QnaList from "./qnaList"
import Test from "./test"
export default function mainPage() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.titleContainer}>자주 묻는 질문</div>
      <QnaList />
    </div>
  )
}
