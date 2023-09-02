import React, { useEffect, useState } from 'react'
import styles from '../styles/history.module.css'
import HistoryTable from './historyTable'

export default function history() {
    const [pageCondition, setPageCondition] = useState('condition1')

    return (
        <div className={styles.historyContainer}>
            <div className={styles.historyInnerWrapper}>
                <ul className={styles.historyTabWrapper}>
                    <li style={pageCondition == 'condition1' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.historyTab} onClick={(e) => setPageCondition('condition1')}>클래식스포츠</li>
                    <li style={pageCondition == 'condition2' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.historyTab} onClick={(e) => setPageCondition('condition2')}>카지노</li>
                    <li style={pageCondition == 'condition3' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.historyTab} onClick={(e) => setPageCondition('condition3')}>슬롯</li>
                    <li style={pageCondition == 'condition4' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.historyTab} onClick={(e) => setPageCondition('condition4')}>미니게임</li>
                    <li style={pageCondition == 'condition5' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.historyTab} onClick={(e) => setPageCondition('condition5')}>파워볼/사다리</li>
                </ul>

                <div className={`${styles.historyContentsWrapper} ${styles[`${pageCondition}`]}`}>
                    <div className={styles.historyContentsHead}>
                        <h3>베팅내역</h3>
                        <div className={styles.btnWrapper}>
                            <button className={styles.readSelDelBtn}>선택 베팅내역 삭제</button>
                            <button className={styles.readAllDelBtn}>모든 베팅내역 삭제</button>
                        </div>
                    </div>

                    <HistoryTable tableStyle={pageCondition}/>

                    <div className={styles.pagination}>
                        <button className={styles.prevBtn}>{'<'}</button>
                        <div className={styles.pages}>1</div>
                        <button className={styles.nextBtn}>{'>'}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
