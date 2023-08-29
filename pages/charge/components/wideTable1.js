import React from 'react'
import styles from '../styles/wideTable1.module.css'

function wideTable1() {
    return (
        <>
            <table className={styles.chargeListTable}>
                <colgroup>
                    <col width='114px' />
                    <col width='92px' />
                    <col width='101px' />
                    <col width='144px' />
                </colgroup>
                <thead>
                    <tr>
                        <th>신청일시</th>
                        <th>충전금액</th>
                        <th>보너스금액</th>
                        <th>처리일시</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={5}>표시할 내역이 없습니다.</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default wideTable1