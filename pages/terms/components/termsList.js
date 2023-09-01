import { useState } from 'react';
import styles from '../styles/termsList.module.css'

const dataArr=[
    {id:1,title:'이용약관',content:''},
    {id:2,title:'일반규정',content:''},
]

export default function termsList(){
    const [open,setOpen]=useState(false)
    const [id,setId]=useState(null)
    const onClick=(id)=>{  
        setId(id)
        setOpen((prev)=>!prev)
    }
    console.log(open)
    return (
        <div className={styles.boxContainer}>
            {dataArr.map((v,_)=>(
                <div key={v.id} className={styles.boxWrapper}
                    onClick={()=>onClick(v.id)}
                    >
                    <div className={styles.titleContainer}>
                        <div>{v.title}</div>
                    </div> 
                    {((id  === v.id)&&open)&&<div className={styles.contentContainer}>{v.content}</div>}
                </div>
            ))}
            
        </div>
    )
}