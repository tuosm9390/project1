import styles from '../../styles/myPage.module.css'

function myPage() {
    return (
        <div className={styles.myPageContainer}>
            <div className={styles.myPageGrid}>마이페이지</div>
            <div className={styles.myPageGrid}>내역</div>
            <div className={styles.myPageGrid}>로그아웃</div>
            <div className={styles.myPageGrid}>질문사항</div>
        </div>
    )
}

export default myPage