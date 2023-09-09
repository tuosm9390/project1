import { useState } from "react"
import styles from "../styles/SmallRuleList.module.css"
import RuleTable from "./RuleTable"

//항목별 리스트들
const dataArr = [
  { id: 1, title: "강강강", content: <RuleTable /> },
  { id: 2, title: "강강강", content: <RuleTable /> },
  { id: 3, title: "강강강", content: <RuleTable /> },
  { id: 4, title: "강강강", content: <RuleTable /> },
  { id: 5, title: "강강강", content: <RuleTable /> },
  { id: 6, title: "강강강", content: <RuleTable /> },
  { id: 7, title: "강강강", content: <RuleTable /> },
  { id: 8, title: "강강강", content: <RuleTable /> },
  { id: 9, title: "강강강", content: <RuleTable /> },
  { id: 10, title: "강강강", content: <RuleTable /> },
]

export default function SmallRuleList() {
  const [open, setOpen] = useState(false) //true라면 하단에 드랍다운 창 열림
  const [selectedId, setSelectedId] = useState(null)
  const onClickList = (id) => {
    //하단 주석 참고 인자값은 상단 dataArr의 id
    setSelectedId(id)
    setOpen((prev) => !prev)
  }
  return (
    <div className={styles.boxContainer}>
      {dataArr.map((v, _) => (
        <div key={v.id} className={styles.boxWrapper}>
          <div
            className={styles.titleContainer}
            onClick={() => onClickList(v.id)}
          >
            {v.title}
          </div>
          <div
            className={`${styles.contentContainer} ${
              selectedId === v.id && open ? styles.open : ""
            }`}
          >
            {v.content}
          </div>
        </div>
      ))}
    </div>
  )
}
