import React from 'react'
import styles from '../../styles/leftSidebar.module.css'
import SideBar from './SideBar'
import MyPage from './MyPage';
function leftSidebar() {
    return (
        <sidebar>
            <div className={styles.leftSidebarContainer}>
                <div className={styles.sidebarWrapper}>
                    <div className={styles.profile}>
                        <MyPage/>
                    </div>
                    <div className={styles.contentsBox}>
                        <SideBar/>
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