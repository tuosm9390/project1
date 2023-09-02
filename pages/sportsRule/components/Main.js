import styles from '../styles/Main.module.css'
import BigRuleList from './BigRuleList'
export default function Main(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.titleContainer}>스포츠 규정</div>
            <BigRuleList/>
        </div>
    )
}