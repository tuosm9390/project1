import React, { useEffect, useState } from 'react'
import styles from '../styles/chargeList.module.css'
import WideTable1 from './wideTable1'
import WideTable2 from './wideTable2'
import WideTable3 from './wideTable3'
import RightSidebar from '../../First/components/rightSidebar'

function ChargeList() {
    const [pageCondition, setPageCondition] = useState('condition1')

    return (
        // sidebar 레이아웃
        <div className={styles.chargeContainer}>
            <div className={styles.chargeInnerWrapper}>
                <ul className={styles.chargeTabWrapper}>
                    <li style={pageCondition == 'condition1' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.chargeTab} onClick={(e) => setPageCondition('condition1')}>충전내역</li>
                    <li style={pageCondition == 'condition2' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.chargeTab} onClick={(e) => setPageCondition('condition2')}>환전내역</li>
                    <li style={pageCondition == 'condition3' ? { backgroundColor: '#4169E1' } : { backgroundColor: 'black' }} className={styles.chargeTab} onClick={(e) => setPageCondition('condition3')}>사용내역</li>
                </ul>
                <div className={`${styles.chargeContentsWrapper} ${styles[`${pageCondition}`]}`}>
                    <h3>충전내역</h3>
                    {pageCondition === 'condition1' ? (
                        <WideTable1 />
                    ) :
                        pageCondition === 'condition2' ? (
                            <WideTable2 />
                        ) : (
                            <WideTable3 />
                        )}
                    <div className={styles.pagination}>
                        <button className={styles.prevBtn}>{'<'}</button>
                        <div className={styles.pages}>1</div>
                        <button className={styles.nextBtn}>{'>'}</button>
                    </div>
                </div>
            </div>
            {/* rightside */}
            {pageCondition === 'condition1' && (
                <RightSidebar />
            )}
        </div>
    )
}

export default ChargeList