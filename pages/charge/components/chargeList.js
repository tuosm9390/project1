import React, { useEffect, useState } from 'react'
import styles from '../styles/chargeList.module.css'
import WideTable1 from './wideTable1'
import WideTable2 from './wideTable2'
import WideTable3 from './wideTable3'
import RightSidebar from './rightSidebar'

function ChargeList() {
    const [pageCondition, setPageCondition] = useState('condition1')

    // TODO
    const addClassName = (target) => {
        const targetList = document.getElementsByClassName(target.className)
        const arr = Array.from(targetList)

        arr.map(item => item.classList?.remove('active'))
        target.className += ' active'
    }

    return (
        // sidebar 레이아웃
        <div className={styles.chargeContainer}>
            <div className={styles.chargeInnerWrapper}>
                <ul className={styles.chargeTabWrapper}>
                    <li className='chargeTab active' onClick={(e) => (setPageCondition('condition1'), addClassName(e.target))}>충전내역</li>
                    <li className='chargeTab' onClick={(e) => (setPageCondition('condition2'), addClassName(e.target))}>환전내역</li>
                    <li className='chargeTab' onClick={(e) => (setPageCondition('condition3'), addClassName(e.target))}>사용내역</li>
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