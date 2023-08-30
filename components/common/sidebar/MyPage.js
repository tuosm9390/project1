//7번 페이지 이후부터 들어가는 사이드바 상단에 들어가는 컴포넌트

import { Avatar } from '@mui/material'
import style from './myPage.module.css'


export default function MyPage(){
    return (
        <div className={style.boxWrapper}>
            <div className={style.boxInner}>
                <div className={style.userIconWrapper}>
                    <Avatar className={style.userIcon}/>
                </div>
                <div className={style.userNameWrapper}>
                    <div className={style.userName}>마이페이지</div>
                </div>
            </div>
        </div>
    )
}