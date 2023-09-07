// 15. 회원정보,보유머니 ,안읽은 쪽지
import styles from "../styles/topSection.module.css"
import UserInfo from "./topsection/userInfo"
import UserMoney from "./topsection/userMoney"
import Message from "./topsection/message"
export default function topSection() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.boxWrapper}>
        <UserInfo />
        <UserMoney />
        <Message />
      </div>
    </div>
  )
}
