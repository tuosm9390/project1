import { useRouter } from "next/router"
import LeftSidebar from "../common/sidebar/components/leftSidebar"
import Footer from "./footer/components/footer"
import Navbar from "./navbar/components/navbar"

const Layout = (props) => {
  const router = useRouter()

  return (
    // 화면 전체 레이아웃 - navbar, footer
    <section className="layout">
      <Navbar />
      {router.pathname != "/main" && router.pathname != "/notice" && (
        <LeftSidebar />
      )}
      {props.children}
      <Footer />
    </section>
  )
}

export default Layout
