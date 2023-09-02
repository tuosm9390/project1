import { useState } from 'react';
import styles from '../styles/BigRuleList.module.css'
import SmallRuleList from './SmallRuleList';

//항목별 리스트들
const dataArr=[
    {id:1,title:'강강강강강강',content:''},
    {id:2,title:'강강강',content:''},
]

export default function BigRuleList(){
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
                    >
                    <div className={styles.titleContainer}
                    onClick={()=>onClickList(v.id)}>
                        <div>{v.title}</div>
                    </div> 
                    {((selectedId  === v.id)&&open)&&
                        <div className={styles.contentContainer}>
                            <SmallRuleList/>
                        </div>}
                </div>
            ))}
            
        </div>
    )
}