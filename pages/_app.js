import '../styles/globals.css'
import Layout from '../components/common/Layout'

function MyApp({ Component, pageProps }) {
  return (
    // layout으로 화면구성 감싸기
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
