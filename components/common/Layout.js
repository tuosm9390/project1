import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import LeftSidebar from '../common/sidebar/leftSidebar'
import { useRouter } from 'next/router'


const Layout = (props) => {
    const router = useRouter()
    
    return (
        // 화면 전체 레이아웃 - navbar, footer
        <section className='layout'>
            <Navbar/>
            {router.pathname != '/' && (
                <LeftSidebar/>
            )}
            {props.children}
            <Footer/>
        </section>
    )
}

export default Layout