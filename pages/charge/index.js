import React from 'react'
import Layout from '../Layout'
import SidebarLayout from '../sidebar/SidebarLayout'
import styles from '../../styles/charge.module.css'

function index() {
  return (
    // sidebar 레이아웃
    <Layout>
      <SidebarLayout>
        <div className={styles.chargeContainer}></div>
      </SidebarLayout>
    </Layout>
  )
}

export default index