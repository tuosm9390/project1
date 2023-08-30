import React, { useState, useEffect } from 'react'
import styles from './navbar.module.css'
import Menu from '../footer/menu'
import Popup from './popup'
import { useRouter } from 'next/router'

function navbar() {
    const [loginStatus, setLoginStatus] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [myPageIsOpen, setMyPageIsOpen] = useState(false)

    const router = useRouter()

    // 로그인 상태 변경
    const handleLoginStatus = () => {
        setLoginStatus(!loginStatus)
        setMyPageIsOpen(false)
        setMenuIsOpen(false)
    }

    // 사이드바 숨김/표시
    const handleSidebar = () => {

    }

    // 전메뉴 숨김/표시
    const handleAllMenu = (e) => {
        setMenuIsOpen(!menuIsOpen)
    }

    // 화살표 숨김/표시
    const handleMyPage = () => {
        setMyPageIsOpen(!myPageIsOpen)
    }

    return (
        <nav className={styles.navbarContainer}>
            <div style={{ height: '62px', borderBottom: '12px solid pink' }}></div>
            {/*  */}
            <div className={styles.navbar}>
                <div className={styles.logoBox}>
                    {/* <img src='' alt='' /> */}
                    로고
                </div>
                {/* 메뉴 리스트 */}
                <ul className={styles.navbarList}>
                    {loginStatus !== true ? (
                        <>
                            <li className={styles.guestMenu}>로전최상1</li>
                            <li className={styles.guestMenu}>로전최상2</li>
                            <li className={styles.guestMenu}>로전최상3</li>
                            <li className={styles.guestMenu}>로전최상4</li>
                            <li className={styles.guestMenu}>로전최상5</li>
                            <li className={styles.guestMenu} onClick={() => handleLoginStatus()}>로그인</li>
                            <li className={styles.guestMenu}>회원가입</li>
                            <li className={styles.guestMenu}>이벤트/공지사항</li>
                        </>
                    ) : (
                        <>
                            <li className={styles.loginMenu}>레벨</li>
                            <li className={styles.loginMenu}>extra</li>
                            <li className={styles.loginMenu}>0원 0P</li>
                            <li className={styles.loginMenu} onClick={() => handleMyPage()}>화살표</li>
                            <li className={styles.loginMenu} onClick={() => router.push('/charge')}>충전</li>
                            <li className={styles.loginMenu}>교환</li>
                            <li className={styles.loginMenu} onClick={() => handleLoginStatus()}>문의</li>
                            <li className={styles.loginMenu}>쪽지</li>
                            <li className={styles.loginMenu}>이벤트/공지사항</li>
                        </>
                    )}
                </ul>
            </div>
            {/* 화살표 숨김/표시 */}
            <div className={styles.myPage}>
                {myPageIsOpen && (
                    <Popup />
                )}
            </div>
            <div className={styles.submenu}>
                <ul className={styles.submenuList}>
                    <li onClick={(e) => handleAllMenu(e)}>전메뉴</li>
                    <li>게임1</li>
                    <li>게임2</li>
                    <li>게임3</li>
                    <li>게임4</li>
                    <li>게임5</li>
                    <li>게임6</li>
                    <li>게임7</li>
                </ul>
                {/* 전메뉴 숨김/표시 */}
                <div className={styles.allMenu}>
                    {menuIsOpen && (
                        <Menu />
                    )}
                </div>
            </div>

            {/* 사이드 고정메뉴바 */}
            <aside className={styles.sidebarContainer}>
                <ul className={styles.sidebar}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li onClick={() => handleSidebar()}></li>
                </ul>
            </aside>
        </nav>
    )
}

export default navbar