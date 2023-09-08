import styles from '../styles/footer.module.css'
import Corporates from './corporates'
import Menu from './menu'

function footer() {
    return (
        <div className={styles.footerContainer}>
            <Menu />
            <Corporates />
            <div className={styles.copyright}>COPYRIGHT 2023 GOLDSTAR ALL RIGHTS RESERVED.</div>
        </div>
    )
}

export default footer