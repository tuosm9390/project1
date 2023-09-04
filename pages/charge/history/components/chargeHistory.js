import React from 'react'
import styles from '../styles/chargeHistory.module.css'

function chargeHistory() {

    return (
        <>
            <table className={styles.chargeListTable}>
                <colgroup>
                    <col width='201px' />
                    <col width='161px' />
                    <col width='177px' />
                    <col width='201px' />
                </colgroup>
                <thead>
                    <tr>
                        <th>신청일시</th>
                        <th>충전금액</th>
                        <th>보너스금액</th>
                        <th>처리일시</th>
                        <th>처리상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023-06-07 21:18:20</td>
                        <td>10,000원</td>
                        <td>300 P</td>
                        <td>2023-06-07 21:18:36</td>
                        
                        <td>취소</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default chargeHistory