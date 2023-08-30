import React from 'react'
import Layout from '../../components/common/Layout'
import SidebarLayout from '../../components/common/sidebar/SidebarLayout'
import MainPage from './components/mainPage'
function index() {
  return (
    // sidebar 레이아웃
    <Layout>
      <SidebarLayout>
        <MainPage/>
      </SidebarLayout>
    </Layout>
  )
}

export default index