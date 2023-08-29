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
                        <div className={styles.firstDivContainer}></div>
                        <div className={styles.secondDivContainer}></div>
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

                </div>
                {/* 다섯번째 줄 */}
                <div className={styles.fifthRowContainer}>

                </div>
            </div>
        </div>    
    )
}