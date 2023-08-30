import React from 'react'
import Layout from '../../components/common/Layout'
import SidebarLayout from '../../components/common/sidebar/SidebarLayout'
import SwitchPoints from './components/SwitchPoints'
function index() {
  return (
    // sidebar 레이아웃
    <Layout>
      <SidebarLayout>
        <SwitchPoints/>
      </SidebarLayout>
    </Layout>
  )
}

export default index