import styles from '../styles/mainPage.module.css'
import TermsList from './termsList'

export default function mainPage(){
    return (
        <div className={styles.boxContainer}>
            <div className={styles.titleContainer}>자주 묻는 질문</div>
            <TermsList/>
        </div>   
    )
}