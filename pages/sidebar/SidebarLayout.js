import React from 'react'
import LeftSidebar from './leftSidebar'
import RightSidebar from './rightSidebar'
import styles from '../../styles/sidebar.module.css'

function SidebarLayout(props) {
    return (
        // 사이드 레이아웃
        <section className={styles.sidebarContainer}>
            <LeftSidebar />
            {props.children}
            {(props.children.type.name)?.indexOf('Charge') == true && (
                <RightSidebar pageStatus={(props.children.type.name)} />
            )}
        </section>
    )
}

export default SidebarLayout