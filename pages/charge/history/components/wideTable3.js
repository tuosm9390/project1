import React from 'react'
import styles from '../styles/wideTable3.module.css'

function wideTable3() {
    return (
        <>
            <table className={styles.chargeListTable}>
                <colgroup>
                    <col width='141px' />
                    <col width='141px' />
                    <col width='141px' />
                    <col width='141px' />
                </colgroup>
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>설명</th>
                        <th>증감</th>
                        <th>차감</th>
                        <th>보유포인트</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023-06-07</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default wideTable3