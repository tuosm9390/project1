import React from 'react'
import styles from '../../styles/leftSidebar.module.css'

function leftSidebar() {
    return (
        <sidebar>
            <div className={styles.leftSidebarContainer}>
                <div className={styles.sidebarWrapper}>
                    <div className={styles.profile}></div>
                    <div className={styles.contentsBox}>
                    </div>
                    <div className={styles.advertisement}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </sidebar>
    )
}

export default leftSidebar