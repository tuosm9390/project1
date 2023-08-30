import React from 'react'
import Layout from '../../components/common/Layout'
import SidebarLayout from '../../components/common/sidebar/SidebarLayout'
import MainPage from './components/mainPage'
import LeftSidebar from '../../components/common/sidebar/leftSidebar'
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