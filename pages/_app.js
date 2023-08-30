import '../styles/globals.css'
import Layout from '../components/common/Layout'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const pathName = router.pathname

  console.log('pathName', pathName)

  return (
    // layout으로 화면구성 감싸기
    <Layout>
      <main className={pathName == '/' ? styles.main : `${styles.noneMain}`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default MyApp
