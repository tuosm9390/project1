import { useState } from 'react';
import styles from '../styles/termsList.module.css'

//항목별 리스트들
const dataArr=[
    {id:1,title:'이용약관',content:''},
    {id:2,title:'일반규정',content:''},
]

export default function termsList(){
    const [open,setOpen]=useState(false) //true라면 하단에 드랍다운 창 열림
    const [selectedId,setSelectedId]=useState(null)
    const onClickList=(id)=>{  //하단 주석 참고 인자값은 상단 dataArr의 id
        setSelectedId(id)
        setOpen((prev)=>!prev)
    }
    return (
        <div className={styles.boxContainer}>
            {dataArr.map((v,_)=>(
                <div key={v.id} className={styles.boxWrapper}
                    onClick={()=>onClickList(v.id)}
                    >
                    <div className={styles.titleContainer}>
                        <div>{v.title}</div>
                    </div> 
                    {((selectedId  === v.id)&&open)&&<div className={styles.contentContainer}>{v.content}</div>}
                </div>
            ))}
            
        </div>
    )
}
//onClickList 함수

//리스트 하나 클릭하면 useState 사용하는 
//selectedId값이 클릭한 리스트에 해당하는 id값으로 할당되고
//open값은 이전값과 반대되는 값 할당됨 (true or false)


//map 반복문 돌면서 selectedId값과 v.id의 값이 같고
//open값도 true라면 드랍다운 열림
