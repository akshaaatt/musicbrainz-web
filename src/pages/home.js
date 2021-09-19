import Header from '../components/Header/Header';
import Main from '../components/main';
import Footer from '../components/Footer/Footer';
import Sponsors from "../components/Sponsors/Sponsors";

const home = props => {
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

        let backtotop = select('.back-to-top')
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active')
                } else {
                    backtotop.classList.remove('active')
                }
            }
            window.addEventListener('load', toggleBacktotop)
            onscroll(document, toggleBacktotop)
        }

        let preloader = select('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove()
            });
        }
        let body = select('body');
        on('click', '.navbar-toggle-box', function(e) {
            e.preventDefault()
            body.classList.add('box-collapse-open')
            body.classList.remove('box-collapse-closed')
        })

        on('click', '.close-box-collapse', function(e) {
            e.preventDefault()
            body.classList.remove('box-collapse-open')
            body.classList.add('box-collapse-closed')
        })


        return (
            <>

                <Header />
                {/*<Main/>*/}

                {/*<Sponsors/>*/}
                <Footer/>

                {/*<a href="#" className="{backtotop} d-flex align-items-center justify-content-center">*/}
                {/*    <i className="bi bi-arrow-up-short"/>*/}
                {/*</a>*/}

            </>
        )
}
export default home;