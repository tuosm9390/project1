import React from 'react'
import LeftSidebar from './leftSidebar'
import styles from './SidebarLayout.module.css'

function SidebarLayout(props) {
    return (
        // 사이드 레이아웃
        <section className={styles.sidebarContainer}>
            <LeftSidebar />
            {props.children}
        </section>
    )
}

export default SidebarLayout