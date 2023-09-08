//7번 페이지 이후부터 사용되는 사이드바
//16번 페이지 이후의 사이드바하고 내용 다름에 유의
import Link from "next/link"
import { useState } from "react"
import style from "../styles/SideBar.module.css"

export default function SideBar() {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(1)
  const onClickTopBtn = () => {
    // 충전/내역 버튼 클릭시
    setOpen((prev) => !prev)
  }
  const handleListItemClick = (boxid) => {
    //색상 바뀌게하는거
    if (boxid !== id) {
      setId(boxid)
      setOpen(false) //다른거 누를때 드랍다운 안보이게 하기위함
    }
  }

  return (
    <div className={style.boxWrapper}>
      <div className={style.boxInner}>
        <div
          className={style.itemWrapper}
          // selected={selectedIndex === 1}
          onClick={() => {
            handleListItemClick(1)
            onClickTopBtn()
          }}
          style={{
            backgroundColor: 1 === id ? "#1a74e2" : null,
            display: "block",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>충전/환전</div>
            <div className={style.itemIcon}>{open ? "-" : "+"}</div>
          </div>
        </div>
        <>
          {open && (
            <div className={style.dropDownList}>
              <div className={style.dropDownInner}>
                <Link href="/charge/First">
                  <div className={style.dropDownItem}>
                    <div className={style.dropDownItemInner}>
                      <div className={style.dropDownText}>충전신청</div>
                    </div>
                  </div>
                </Link>
                <Link href="/charge/Second">
                  <div className={style.dropDownItem}>
                    <div className={style.dropDownItemInner}>
                      <div className={style.dropDownText}>환전신청</div>
                    </div>
                  </div>
                </Link>
                <Link href="/charge/history">
                  <div className={style.dropDownItem}>
                    <div className={style.dropDownItemInner}>
                      <div className={style.dropDownText}>거래내역</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </>
        <Link
          href="/switchpoint"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(2)}
          style={{
            backgroundColor: 2 === id ? "#1a74e2" : null,
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>포인트</div>
          </div>
        </Link>
        <Link
          // 추후 경로 수정
          href="/note"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(3)}
          style={{
            backgroundColor: 3 === id ? "#1a74e2" : null,
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>쪽지</div>
          </div>
        </Link>
        <Link
          href="/inquiry"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(4)}
          style={{
            backgroundColor: 4 === id ? "#1a74e2" : null,
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>1:1문의</div>
          </div>
        </Link>
        <Link
          href="/management"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(5)}
          style={{
            backgroundColor: 5 === id ? "#1a74e2" : null,
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>지인관리</div>
          </div>
        </Link>
        <Link
          // 추후 경로 수정
          href="/history"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(6)}
          style={{
            backgroundColor: 6 === id ? "#1a74e2" : null,
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>베팅내역</div>
          </div>
        </Link>
        <Link
          // 추후 경로 수정
          href="/bonus"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(7)}
          style={{
            backgroundColor: 7 === id ? "#1a74e2" : null,
            display: "block",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>보너스 혜택</div>
          </div>
        </Link>
        <Link
          href="/extra"
          className={style.itemWrapper}
          onClick={() => handleListItemClick(8)}
          style={{
            backgroundColor: 8 === id ? "#1a74e2" : null,
            display: "block",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div className={style.itemInner}>
            <div className={style.itemText}>나의 롤링 확인</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
