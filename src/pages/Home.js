import Header from '../components/Header/Header';
import Main from '../components/main';
import Footer from '../components/Footer/Footer';
import Sponsors from "../components/Sponsors/Sponsors";
import Intro from "../components/Intro/Intro";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const home = props => {
        return (
            <>
                <Header />
                {/*<Main/>*/}

                {/*<Sponsors/>*/}
                <Intro/>
                <Footer/>

                   <ScrollToTop
                       icon="fas fa-arrow-up"
                       backgroundColor = "#EB743B"
                       position={{ bottom: "5%", right: "0%" }}
                       hover={{ backgroundColor: "purple", opacity: "0.95" }}
                       margin="24px"
                     />
            </>
        )
}
  const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        let selectHNavbar = select('.navbar-default')
        if (selectHNavbar) {
            onscroll(document, () => {
                if (window.scrollY > 100) {
                    selectHNavbar.classList.add('navbar-reduce')
                    selectHNavbar.classList.remove('navbar-trans')
                } else {
                    selectHNavbar.classList.remove('navbar-reduce')
                    selectHNavbar.classList.add('navbar-trans')
                }
            })
        }

export default home;