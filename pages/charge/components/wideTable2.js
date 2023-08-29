import React from 'react'
import styles from '../styles/wideTable2.module.css'

function wideTable2() {
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
                        <th>강강강강</th>
                        <th>강강강강</th>
                        <th>강강강강</th>
                        <th>강강강강</th>
                        <th>강강강강</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023-06-07 21:18:20</td>
                        <td>강강강강</td>
                        <td>강강강강</td>
                        <td>2023-06-07 21:18:36</td>
                        <td>강강강강</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default wideTable2