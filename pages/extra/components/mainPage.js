import styles from '../styles/mainPage.module.css'

export default function mainPage(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                {/* 첫번째 줄 */}
                <div className={styles.titleContainer}>나의 롤링 확인</div>
                {/* 두번째 줄 */}
                <table className={styles.chargeListTable}>
                <colgroup>
                    <col width='101px' />
                    <col width='181px' />
                    <col width='181px' />
                    <col width='257px' />
                    <col width='161px' />
                </colgroup>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>사용머니</th>
                        <th>사용 후 머니</th>
                        <th>내역</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8888888</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>총</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            {/* 세번째 줄 */}
            <div className={styles.pagenationContainer}>
                <div>{`< 1 >`}</div>
            </div>
            </div>
                
        </div>
    )
}