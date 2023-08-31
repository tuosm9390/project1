import styles from '../../styles/userInfo.module.css'

export default function userInfo(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                <div className={styles.titleContainer}>회원정보</div>
                <div className={styles.contentContainer}>
                    <div className={styles.userInfoContainer}>
                        <div className={styles.userNameContainer}>
                            <div>아이디</div>
                            <div>0000</div>
                        </div>
                        <div className={styles.userNickNameContainer}>
                            <div>닉네임</div>
                            <div style={{color: '#FFA500'}}>GOLDSTAR</div>
                        </div>
                        <div className={styles.userPhoneContainer}>
                            <div>휴대폰 번호</div>
                            <div>010-0000-0000</div>
                        </div>
                    </div>
                    <div className={styles.userRankContainer}>
                        <div className={styles.userRankWrapper}>
                            <div>회원등급</div>
                            <div>★</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}