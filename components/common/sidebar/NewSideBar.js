//7번 페이지 이후부터 사용되는 사이드바
//16번 페이지 이후의 사이드바하고 내용 다름에 유의
import Link from "next/link";
import { useState } from "react";
import style from "./NewSideBar.module.css";

export default function NewSideBar() {
  // const [selectedIndex, setSelectedIndex] = useState(1);
  const [id, setId] = useState(1);

  const handleListItemClick = (boxId) => {
    //색상 바뀌게하는거
    if (boxId !== id) {
      setId(boxId);
    }
  };

  return (
    <div className={style.boxWrapper}>
      <div className={style.boxInner}>
        <Link
          href="/qna"
          className={style.itemWrapper}
          // selected={selectedIndex === 1}
          onClick={() => {
            handleListItemClick(1);
            onClickTopBtn();
          }}
          style={{
            backgroundColor: 1 === id ? "#4169E1" : "#808080",
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>자주 묻는 질문</div>
          </div>
        </Link>

        <Link
          href="/terms"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(2)}
          style={{
            backgroundColor: 2 === id ? "#4169E1" : "#808080",
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>이용약관 및 규정</div>
          </div>
        </Link>
        <Link
          href="/sportsRule"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(3)}
          style={{
            backgroundColor: 3 === id ? "#4169E1" : "#808080",
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>스포츠 규정</div>
          </div>
        </Link>
        <Link
          href="/guide/game"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(4)}
          style={{
            backgroundColor: 4 === id ? "#4169E1" : "#808080",
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>게임 가이드</div>
          </div>
        </Link>
        {/* 추후 경로 수정 */}
        <Link
          href="/guide/user"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(5)}
          style={{
            backgroundColor: 5 === id ? "#4169E1" : "#808080",
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>이용자 가이드</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
