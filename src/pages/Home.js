import Header from '../components/Header/Header';
import Main from '../components/main';
import Footer from '../components/Footer/Footer';
import Sponsors from "../components/Sponsors/Sponsors";
import Intro from "../components/Intro/Intro";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Home = props => {
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

export default Home;