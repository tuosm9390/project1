import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MyPage from "./MyPage";
import NewSideBar from "./NewSideBar";
import SideBar from "./SideBar";
import styles from "./leftSidebar.module.css";

function leftSidebar() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  // toggle값이 참이면 사이드바의 내용이 자주묻는질문 부터 시작하는 값으로 바뀜
  // 거짓이면 충전/내역부터 시작하는 내용
  useEffect(() => {
    if (
      router.pathname === "/qna" ||
      router.pathname === "/terms" ||
      router.pathname === "/guide/game" ||
      router.pathname === "/guide/user" ||
      router.pathname === "/sportsRule"
    ) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [router.pathname]);

  return (
    <sidebar>
      <div className={styles.leftSidebarContainer}>
        <div className={styles.sidebarWrapper}>
          <div className={styles.profile}>
            <MyPage />
          </div>
          <div className={styles.contentsBox}>
            {toggle ? <NewSideBar /> : <SideBar />}
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
  );
}

export default leftSidebar;
