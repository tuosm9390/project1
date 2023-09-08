import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Menu from "../../footer/components/menu.js"
import styles from "../styles/navbar.module.css"
import Popup from "./popup"

function navbar() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [myPageIsOpen, setMyPageIsOpen] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

  const router = useRouter()

  // 로그인 상태 변경
  const handleLoginStatus = () => {
    setLoginStatus(!loginStatus)
    setMyPageIsOpen(false)
    setMenuIsOpen(false)
  }

  // 사이드바 숨김/표시
  const handleSidebar = (e) => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  // 전메뉴 숨김/표시
  const handleAllMenu = (e) => {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {}, [menuIsOpen])

  // 화살표 숨김/표시
  const handleMyPage = () => {
    setMyPageIsOpen(!myPageIsOpen)
  }

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Link href={"/main"}>
          <div className={styles.logoBox}>
            {/* <img src='' alt='' /> */}
            로고
          </div>
        </Link>
        {/* 메뉴 리스트 */}
        <ul className={styles.navbarList}>
          {loginStatus !== true ? (
            <>
              <li className={styles.guestMenu}>로전최상1</li>
              <li className={styles.guestMenu}>로전최상2</li>
              <li className={styles.guestMenu}>로전최상3</li>
              <li className={styles.guestMenu}>로전최상4</li>
              <li className={styles.guestMenu}>로전최상5</li>
              <li
                className={styles.guestMenu}
                onClick={() => handleLoginStatus()}
              >
                로그인
              </li>
              <li className={styles.guestMenu}>회원가입</li>
            </>
          ) : (
            <>
              <li className={styles.loginMenu}>레벨</li>
              <li className={styles.loginMenu}>extra</li>
              <li className={styles.loginMenu}>0원 0P</li>
              <li className={styles.loginMenu} onClick={() => handleMyPage()}>
                화살표
              </li>
              <li
                className={styles.loginMenu}
                onClick={() => router.push("/charge/First")}
              >
                <Link href={"/charge/First"}>충전</Link>
              </li>
              <li className={styles.loginMenu}>교환</li>
              <li
                className={styles.loginMenu}
                onClick={() => handleLoginStatus()}
              >
                문의
              </li>
              <li className={styles.loginMenu}>쪽지</li>
            </>
          )}
          <li className={styles.loginMenu}>
            <Link href={"/notice"}>이벤트/공지사항</Link>
          </li>
        </ul>
      </div>
      {/* 화살표 숨김/표시 */}
      <div
        className={`${styles.myPage} ${myPageIsOpen && styles.myPageIsOpen}`}
        onMouseLeave={() => setMyPageIsOpen(false)}
      >
        {myPageIsOpen && <Popup />}
      </div>
      <div className={styles.submenu}>
        <ul className={styles.submenuList}>
          <li>
            <span onClick={(e) => handleAllMenu(e)}>전메뉴</span>
          </li>
          <li>
            <span>게임1</span>
          </li>
          <li>
            <span>게임2</span>
          </li>
          <li>
            <span>게임3</span>
          </li>
          <li>
            <span>게임4</span>
          </li>
          <li>
            <span>게임5</span>
          </li>
          <li>
            <span>게임6</span>
          </li>
          <li>
            <span>게임7</span>
          </li>
        </ul>
        {/* 전메뉴 숨김/표시 */}
        <div
          className={`${styles.allMenu} ${menuIsOpen && styles.menuIsOpen}`}
          onMouseLeave={() => setMenuIsOpen(false)}
        >
          {menuIsOpen && <Menu />}
        </div>
      </div>

      {/* 사이드 고정메뉴바 */}
      <aside className={styles.sidebarContainer}>
        <ul
          className={`${styles.sidebar} ${
            sidebarIsOpen == true && styles.sidebarIsOpen
          }`}
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li onClick={(e) => handleSidebar(e)}></li>
        </ul>
      </aside>
    </nav>
  )
}

export default navbar
