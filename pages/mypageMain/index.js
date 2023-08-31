import React from 'react'
import styles from './styles/index.module.css'
import Password from './components/password'
import Userlist from './components/userlist'
import Onebutton from './components/onebutton'
import TopSection from './components/topSection'
function index() {
  return (
    <div className={styles.boxContainer}>
        <div className={styles.boxWrapper}>
            <div className={styles.topContainer}>
                <TopSection/>
            </div>
            <div className={styles.bottomContainer}>
                <Password/>
                <Userlist/>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <Onebutton title={'내역'}/>
                    <Onebutton title={'1:1 문의'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index