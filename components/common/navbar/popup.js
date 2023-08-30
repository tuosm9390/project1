import styles from './popup.module.css'

function popup() {
    return (
        <div className={styles.popupContainer}>
            <div className={styles.popupGrid}>마이페이지</div>
            <div className={styles.popupGrid}>내역</div>
            <div className={styles.popupGrid}>로그아웃</div>
            <div className={styles.popupGrid}>질문사항</div>
        </div>
    )
}

export default popup