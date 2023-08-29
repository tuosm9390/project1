import styles from '../styles/Second.module.css'


export default function Second(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
            {/* 첫번째줄 */}
            <div className={styles.firstRowContainer}>
                <div className={styles.firstDivWrapper}>
                    <div className={styles.firstDivTitle}>보유머니</div>
                    <div className={styles.firstDivContent}>0W</div>
                </div>
                <div className={styles.secondDivWrapper}>
                    <div className={styles.secondDivContent}>0원</div>
                </div>
            </div>
            {/* 두번째줄 */}
            <div className={styles.secondRowContainer}>
                <div className={styles.firstDivWrapper}></div>
                <div className={styles.secondDivWrapper}></div>
                <div className={styles.thirdDivWrapper}></div>
                <div className={styles.fourthDivWrapper} style={{background:'#4169E1'}}></div>
            </div>
            {/* 세번째줄 */}
            <div className={styles.thirdRowContainer}>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem}></div>
                <div className={styles.boxItem} style={{background:'#B22222',}}></div>
            </div>
            {/* 네번째줄 */}
            <div className={styles.fourthRowContainer}>
                <div className={styles.userAccInfoTextWrapper}>
                    <div className={styles.userAccInfoText}>강강강강강강</div>
                </div>
                <div className={styles.userAccInfoBox}></div>
            </div>
            {/* 다섯번째 */}
            <div className={styles.fifthRowContainer}>
                <div className={styles.bigBoxWrapper}>
                    <div className={styles.bigBoxInner}>
                        글글글글글글글<br></br>
                        글글글글글글글<br></br>
                        글글글글글글글<br></br>
                        글글글글글글글<br></br>
                        글글글글글글글
                    </div>
                </div>
            </div>
            </div>
        </div>    
    )
}

