import styles from '../styles/SwitchPoints.module.css'

export default function SwitchPoints(){
    return(
        <div className={styles.boxContainer}>
            <div className={styles.boxInner}>
                {/* 첫번째 줄 (타이틀) */}
                <div className={styles.firstRowContainer}>
                    <div className={styles.titleText}>포인트 전환</div>
                </div>
                {/* 두번째 줄 */}
                <div className={styles.secondRowContainer}>
                    <div className={styles.secondRowInner}>
                        <div className={styles.firstDivContainer}>
                            <div>보유머니</div>
                            <div>0P</div>
                        </div>
                        <div className={styles.secondDivContainer}>
                            <div>0P</div>
                        </div>
                    </div>
                </div>
                {/* 세번째 줄 */}
                <div className={styles.thirdRowContainer}>
                    <div className={styles.thirdRowWrapper}>
                        <button className={styles.itemBtn}>
                            <div className={styles.itemBtnText}>1만</div>
                        </button>
                        <button className={styles.itemBtn}>
                            <div className={styles.itemBtnText}>5만</div>
                        </button>
                        <button className={styles.itemBtn}>
                            <div className={styles.itemBtnText}>10만</div>
                        </button>
                        <button className={styles.itemBtn}>
                            <div className={styles.itemBtnText}>50만</div>
                        </button>
                        <button className={styles.itemBtn}>
                            <div className={styles.itemBtnText}>100만</div>
                        </button>
                        <button className={styles.itemBtn}>
                            <div className={styles.itemBtnText}>MAX</div>
                        </button>
                    </div>
                </div>
                {/* 네번째 줄 */}
                <div className={styles.fourthRowContainer}>
                    <div className={styles.fourthRowWrapper}>
                        <button className={styles.fourthRowBtn1}>
                            <div className={styles.fourthRowBtnText}>정정</div>
                        </button>
                        <button className={styles.fourthRowBtn2}>
                            <div className={styles.fourthRowBtnText}>확인</div>
                        </button>
                    </div>
                </div>
                {/* 다섯번째 줄 */}
                <div className={styles.fifthRowContainer}>
                    <div className={styles.fifthRowWrapper}>
                        <div className={styles.fifthRowText}>광고</div>
                    </div>
                </div>
            </div>
        </div>    
    )
}