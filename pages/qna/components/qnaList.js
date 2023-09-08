// 각 질문 리스트

import { useState } from "react"
import styles from "../styles/qnaList.module.css"

const dataArr = [
  { id: 1, title: "강강강", content: "" },
  { id: 2, title: "강강강", content: "" },
  { id: 3, title: "강강강", content: "" },
  { id: 4, title: "강강강", content: "" },
  { id: 5, title: "강강강", content: "" },
  { id: 6, title: "강강강", content: "" },
  { id: 7, title: "강강강", content: "" },
  { id: 8, title: "강강강", content: "" },
  { id: 9, title: "강강강", content: "" },
  { id: 10, title: "강강강", content: "" },
  { id: 11, title: "강강강", content: "" },
  { id: 12, title: "강강강", content: "" },
  { id: 13, title: "강강강", content: "" },
]

export default function qnaList() {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(null)
  const onClickList = (id) => {
    setId(id)
    setOpen((prev) => !prev)
  }
  console.log(open)
  return (
    <div className={styles.boxContainer}>
      {dataArr.map((v, _) => (
        <div key={v.id} className={styles.boxWrapper}>
          <div className={styles.titleContainer} onClick={() => onClickList(v.id)}>
            {v.title}
          </div>
          <div
            className={`${styles.contentContainer} ${
              id === v.id && open ? styles.open : ""
            }`}
          >
            {v.content}
          </div>
        </div>
      ))}
    </div>
  )
}
