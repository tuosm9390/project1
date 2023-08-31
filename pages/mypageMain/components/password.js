// 15. 비밀번호 변경 

import styles from '../styles/password.module.css'


export default function password(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                <div className={styles.titleContainer}>
                    비밀번호 변경
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.oldPWContainer}>
                        <div className={styles.oldPWText}>기존 비밀번호 :</div>
                        <input type="text" placeholder='비밀번호는 4자리 이상입니다.'/>
                    </div>
                    <div className={styles.oldPWContainer}>
                        <div className={styles.oldPWText}>새 비밀번호 :</div>
                        <input type="text" placeholder='비밀번호는 4자리 이상입니다.'/>
                    </div>
                    <div className={styles.oldPWContainer}>
                        <div className={styles.oldPWText}>새 비밀번호 확인:</div>
                        <input type="text" placeholder='비밀번호 확인'/>
                    </div>
                    <div className={styles.authNumberContainer}>
                        <div className={styles.authNumber}>인증번호:</div>
                        <div className={styles.authNumberContent}>
                            <input type="text"/>
                            <button>
                                <div>인증요청</div>
                            </button>
                        </div>
                    </div>
                    <button className={styles.changeBtnContainer}>
                            <div>변경하기</div>
                    </button>
                </div>
            </div>
        </div>    
    )
}