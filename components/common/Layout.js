import { useRouter } from 'next/router'
import LeftSidebar from '../common/sidebar/leftSidebar'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'


const Layout = (props) => {
    const router = useRouter()
    
    return (
        // 화면 전체 레이아웃 - navbar, footer
        <section className='layout'>
            <Navbar/>
            {router.pathname != '/main' && (
                <LeftSidebar/>
            )}
            {props.children}
            <Footer/>
        </section>
    )
}

export default Layout