import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './main/main'
import Layout from '../components/common/Layout'

export default function Home() {
  return (
    // layout으로 화면구성 감싸기
    <Layout>
      <main className={styles.main}>
        <Main />
      </main>
    </Layout>
  )
}
