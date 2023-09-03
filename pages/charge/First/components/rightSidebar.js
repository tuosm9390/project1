import React, { useEffect, useState } from 'react'
import styles from '../styles/rightSidebar.module.css'
import { useRouter } from 'next/router'
import { firstPageArr } from '../data/dataArr'
import { secondPageArr } from '../data/dataArr'
import { historyPageArr } from '../data/dataArr'

function rightSidebar() {
    const router=useRouter()
    const [dataArr,setDataArr]=useState(firstPageArr)
    useEffect(()=>{//url 경로에 따라 각 경로에 맞는 데이터 배열 할당
        switch(router.asPath.substring(8)){
            case 'First':
                setDataArr(firstPageArr)
            break;
            case 'Second':
                setDataArr(secondPageArr)
            break;
            case 'history':
                setDataArr(historyPageArr)
            break;
        }
    },[router.asPath])
    return (
        <sidebar>
            <div className={styles.rightSidebarContainer}>
                {/*받아온 데이터 배열의 content필드 랜더링 위한 2중 반복문 사용 */}
                {dataArr.map((dataArrObj,i)=>{
                    return(
                        <div className={styles.rightSidebarWrapper}>
                            <div className={styles.titleContainer}>
                                {dataArrObj.title}
                            </div>
                            <div className={styles.contentContainer}>
                                {dataArrObj.content.map((arrValue,i)=>{
                                    return (
                                        <div>
                                            {arrValue}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </sidebar>
    )
}

export default rightSidebar


