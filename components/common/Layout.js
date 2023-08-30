import Navbar from './navbar/navbar'
import Footer from './footer/footer'

const Layout = (props) => {
    return (
        // 화면 전체 레이아웃 - navbar, footer
        <section className='layout'>
            <Navbar />
            {props.children}
            <Footer />
        </section>
    )
}

export default Layout