import { useRouter } from 'next/router';
import styles from './popup.module.css'

function popup() {
    const router=useRouter()
    // 추후 경로수정
    const onClickPopUp=(event)=>{
        switch(event.target.innerText){
            case '마이페이지':
                router.push('/mypageMain')
            break
            case '내역':
                router.push('/')
            break
            case '로그아웃':
                // 로그아웃 로직
            break
            case '질문사항':
                router.push('/')
            break
        }
    }
    return (
        <div className={styles.popupContainer} onClick={(event)=>onClickPopUp(event)}>
            <div className={styles.popupGrid}>마이페이지</div>
            <div className={styles.popupGrid}>내역</div>
            <div className={styles.popupGrid}>로그아웃</div>
            <div className={styles.popupGrid}>질문사항</div>
        </div>
    )
}

export default popup