import styles from '../styles/mainPage.module.css'

export default function mainPage(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                {/* 첫번째 줄 */}
                <div className={styles.titleContainer}>
                    <div className={styles.titleText}>지인 관리</div>
                </div>
                {/* 두번째 줄 */}
                <div className={styles.inviteContainer}>
                    <div className={styles.inviteWrapper}>
                        <div className={styles.textContainer}>지인 초대하기</div>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputWrapper}>
                                <input></input>
                            </div>
                            <button className={styles.inputBtn1}>
                                <div>코드 생성</div>
                            </button>
                            <button className={styles.inputBtn1}>
                                <div>복사</div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* 세번째 줄 */}
                <div className={styles.thirdRowContainer}>

                </div>
                {/* 네번째 줄 */}
                <table className={styles.chargeListTable}>
                <colgroup>
                    <col width='221px' />
                    <col width='221px' />
                    <col width='221px' />
                    <col width='221px' />
                </colgroup>
                <thead>
                    <tr>
                        <th>회원 아이디</th>
                        <th>가입일</th>
                        <th>최근 접속일</th>
                        <th>회원 상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}