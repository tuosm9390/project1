//안 읽은 쪽지
import styles from '../../styles/message.module.css'

export default function message(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxWrapper}>
                <div className={styles.titleContainer}>
                    <div>안읽은 쪽지</div>
                    <div>0</div>
                </div>
                <button>
                    <div>확인하기</div>
                </button>
            </div>
        </div>    
    )
}