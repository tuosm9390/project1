import styles from './footer.module.css'
import Menu from './menu'
import Corporates from './corporates'

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