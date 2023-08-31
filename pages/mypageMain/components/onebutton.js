// 15. 버튼 하나만 있는 내역, 1:1 문의
import styles from '../styles/onebutton.module.css'

export default function onebutton({title}){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                <div className={styles.titleContainer}>
                    <div>{title}</div>
                </div>
                    <button className={styles.contentContainer}>
                        <div>지인추천</div>
                    </button>
            </div>
        </div>   
    )
}