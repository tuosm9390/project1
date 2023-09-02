import React, { useEffect,useState } from 'react'
import styles from './leftSidebar.module.css'
import SideBar from './SideBar'
import NewSideBar from './NewSideBar'
import MyPage from './MyPage'
import { useRouter } from 'next/router'

function leftSidebar() {
    const router=useRouter()
    const [toggle,setToggle]=useState(false)
    // toggle값이 참이면 사이드바의 내용이 자주묻는질문 부터 시작하는 값으로 바뀜
    // 거짓이면 충전/내역부터 시작하는 내용
    useEffect(()=>{
        if(router.asPath === '/qna' ||
            router.asPath === '/terms' ||
            router.asPath === '/guide' ||
            router.asPath === '/sportsRule'){
            setToggle(true)
        }
        else {
            setToggle(false)
        }
    },[router.asPath])
    
    return (
        <sidebar>
            <div className={styles.leftSidebarContainer}>
                <div className={styles.sidebarWrapper}>
                    <div className={styles.profile}>
                        <MyPage/>
                    </div>
                    <div className={styles.contentsBox}>
                        {toggle?<NewSideBar/>:<SideBar/>}
                    </div>
                    <div className={styles.banner}>
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