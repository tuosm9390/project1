import styles from '../styles/mainPage.module.css'

export default function mainPage(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                <div className={styles.titleContainer}>확인</div>
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
                        <th>강강강강</th>
                        <th>강강강강강</th>
                        <th>강강</th>
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
            <div className={styles.pagenationContainer}>
                <div>{`< 1 >`}</div>
            </div>
            </div>
                
        </div>
    )
}