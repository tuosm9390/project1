import styles from '../styles/mainPage.module.css'

export default function mainPage(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleText}>
                        1:1 문의
                    </div>
                </div>
                <div className={styles.chattingTopContainer}>
                    <div className={styles.helloMsgContainer}>
                        <div className={styles.text1}>안녕하세요</div>
                        <div className={styles.text2}>문의사항을 입력해주세요</div>
                    </div>
                </div>
                <div className={styles.chattingBottomContainer}>
                    <div className={styles.chattingInputWrapper}>
                        <input></input>
                    </div>
                    <div className={styles.chattingBtnWrapper}>
                        <button>
                            <div>전송</div>
                        </button>
                    </div>
                </div>
            </div>

        </div>    
    )
}