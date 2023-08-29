import React from 'react'
import Layout from '../Layout'
import SidebarLayout from '../sidebar/SidebarLayout'
import styles from '../../styles/charge.module.css'
import First from './components/First';
import Second from './components/Second'
import SwitchPoints from './components/SwitchPoints';
function index() {
  return (
    // sidebar 레이아웃
    <Layout>
      <SidebarLayout>
        {/* <First/> */}
        {/* <Second/> */}
        <SwitchPoints/>
      </SidebarLayout>
    </Layout>
  )
}

export default index