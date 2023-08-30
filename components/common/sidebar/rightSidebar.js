import React from 'react'
import styles from './rightSidebar.module.css'

function rightSidebar() {
    return (
        <sidebar>
            {props.pageStatus != 'ChargeList' && (
                <div className={styles.rightSidebarContainer}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </sidebar>
    )
}

export default rightSidebar