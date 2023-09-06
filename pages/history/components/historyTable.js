import React, { useEffect, useState } from 'react'
import styles from '../styles/historyTable.module.css'

export default function historyTable(props) {
    const tableStyle = props.tableStyle
    var thList = []
    var tdList = []
    var colSize = []

    // 테이블 임시설정값
    if (tableStyle == 'condition1') {
        thList = ['', '', '', '', '', '', '', '']
        tdList = ['', '', '', '', '', '', '', '']
        colSize = ['92px', '102px', '147px', '172px', '56px', '172px', '54px', '54px']
    } else if (tableStyle == 'condition5') {
        thList = ['', '', '', '', '', '', '']
        tdList = ['', '', '', '', '', '', '']
        colSize = ['92px', '84px', '83px', '163px', '189px', '182px', '54px']
    } else {
        thList = ['', '', '', '', '', '']
        tdList = ['', '', '', '', '', '']
        colSize = ['92px', '167px', '163px', '189px', '182px', '54px']
    }

    return (
        <>
            <table className={styles.historyListTable}>
                <colgroup>
                    {colSize.map(item => (
                        <col width={item} />
                    ))}
                </colgroup>
                <thead>
                    <tr>
                        {thList.map(item => (
                            <th></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {tdList.map(item => (
                            <td></td>
                        ))}
                    </tr>
                    <tr>
                        {tdList.map(item => (
                            <td></td>
                        ))}
                    </tr>
                    <tr>
                        {tdList.map(item => (
                            <td></td>
                        ))}
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        {tableStyle === 'condition1' ? (
                            <>
                                <td colSpan={6}></td>
                                <td colSpan={2}></td>
                            </>
                        ) : (
                            <td colSpan={tdList.length}></td>
                        )}
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
