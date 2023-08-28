//7번 페이지 이후부터 사용되는 사이드바

import { useState } from 'react';
import style from '../../styles/SideBar.module.css'

export default function SideBar(){
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [open,setOpen]=useState(false)
    const [id,setId]=useState(1)
    const onClickTopBtn=()=>{ // 충전/내역 버튼 클릭시
        setOpen((prev)=>!prev)
    }
    const handleListItemClick=(boxid)=>{ //색상 바뀌게하는거
        if(boxid!==id){
            setId(boxid)
            setOpen(false) //다른거 누를때 드랍다운 안보이게 하기위함
        }
    }
    return (
        <div className={style.boxWrapper}>
            <div className={style.boxInner}>
                <div 
                    className={style.itemWrapper}
                    selected={selectedIndex===1} 
                    onClick={()=>{
                        handleListItemClick(1)
                        onClickTopBtn()
                    }}
                    style={{backgroundColor:1===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>충전/내역</div>
                        <div className={style.itemIcon}>
                            {open?'-':'+'}
                        </div>
                    </div>
                </div>
                <>
                {open&&
                    <div className={style.dropDownList}>
                        <div className={style.dropDownInner}>
                            <div className={style.dropDownItem}>
                                <div className={style.dropDownItemInner}>
                                    <div className={style.dropDownText}>신청</div>
                                </div> 
                            </div>
                            <div className={style.dropDownItem}>
                                <div className={style.dropDownItemInner}>
                                    <div className={style.dropDownText}>신청</div>
                                </div> 
                            </div>
                            <div className={style.dropDownItem}>
                                <div className={style.dropDownItemInner}>
                                    <div className={style.dropDownText}>내역</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    }
                </>
                <div className={style.itemWrapper} 
                onClick={()=>handleListItemClick(2)}
                style={{backgroundColor:2===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>포인트</div>
                    </div>
                </div>
                <div className={style.itemWrapper} 
                onClick={()=>handleListItemClick(3)}
                style={{backgroundColor:3===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>쪽지</div>
                    </div>
                </div>
                <div className={style.itemWrapper} 
                onClick={()=>handleListItemClick(4)}
                style={{backgroundColor:4===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>1:1문의</div>
                    </div>
                </div>
                <div className={style.itemWrapper} 
                onClick={()=>handleListItemClick(5)}
                style={{backgroundColor:5===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>관리</div>
                    </div>
                </div>
                <div className={style.itemWrapper} 
                onClick={()=>handleListItemClick(6)}
                style={{backgroundColor:6===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>내역</div>
                    </div>
                </div>
                <div className={style.itemWrapper} 
                onClick={()=>handleListItemClick(7)}
                style={{backgroundColor:7===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>혜택</div>
                    </div>
                </div>
                <div className={style.itemWrapper} 
                onClick={()=>handleListItemClick(8)}
                style={{backgroundColor:8===id?('#4169E1'):'#808080'}}>
                    <div className={style.itemInner}>
                        <div className={style.itemText}>확인</div>
                    </div>
                </div>
            </div>
        </div>
    )
}