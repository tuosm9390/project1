import styles from '../../styles/userMoney.module.css'

export default function userMoney(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                <div className={styles.titleContainer}>보유 머니</div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.firstRowContainer}>
                        <div className={styles.firstRowWrapper}>
                                <button>
                                    <div>충전하기</div>
                                </button>
                                <button style={{backgroundColor:'black'}}>
                                    <div>강강강</div>
                                </button>
                        </div>
                        </div>
                        <div className={styles.secondRowContainer}>
                            <div className={styles.yourMoneyContainer}>
                                <div>보유포인트</div>
                                <div>0</div>
                            </div>
                        </div>
                        <div className={styles.thirdRowContainer}>
                            <button>
                                <div>강강강강강</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}