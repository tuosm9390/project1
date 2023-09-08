import Link from "next/link"
import styles from "../styles/menu.module.css"

function menu() {
  return (
    // footer 전체메뉴
    <div className={styles.footerMenuContainer}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className={styles.qnaListWrapper}>
        <h2>질문사항</h2>
        <dl>
          <li>
            <Link href={"/qna"}>자주 묻는 질문</Link>
          </li>
          <li>
            <Link href={"/terms"}>이용 약관 및 일반 규정</Link>
          </li>
          <li>
            <Link href={"/sportsRule"}>스포츠 규정</Link>
          </li>
          <li>
            <Link href={"/guide/game"}>카지노 가이드</Link>
          </li>
          <li>
            <Link href={"/guide/user"}>이용자 가이드</Link>
          </li>
        </dl>
      </div>
    </div>
  )
}

export default menu
