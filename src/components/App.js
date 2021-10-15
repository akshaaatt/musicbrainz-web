import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-multi-carousel/lib/styles.css";
import "./colors.css";
import Header from './Home/Header/Header';
import Footer from './Home/Footer/Footer';
import ScrollToTop from "./Home/ScrollToTop/ScrollToTop";
import Supporters from "./Home/Supporters/Supporters";
import Intro from "./Home/Intro/Intro";
import AppDownload from "./Home/AppDownload/AppDownload";
import About from "./Home/About/About";
import Facts from "./Home/Facts/Facts";
import Explore from "./Home/Explore/Explore";
import Projects from "./Home/Projects/Projects";
import FAQs from "./Home/FAQs/FAQs";

function App() {
    let [darkThemeActive, setDarkThemeActive] = useState(false);

    function switchActiveTheme() {
        if (darkThemeActive) {
            setDarkThemeActive(false);
            document.querySelector("#root").style.backgroundColor = "white";
            document.documentElement.className = 'theme-light';
        } else {
            setDarkThemeActive(true);
            document.querySelector("#root").style.backgroundColor = "#243133";
            document.documentElement.className = 'theme-dark';
        }
    }

    return (
        <div>
            <Header isDarkThemeActive={darkThemeActive} switchActiveTheme={switchActiveTheme}/>
            <Intro isDarkThemeActive={darkThemeActive}/>
            <About/>
            <Facts isDarkThemeActive={darkThemeActive}/>
            <Projects isDarkThemeActive={darkThemeActive}/>
            <Explore/>
            <Supporters/>
            {/*<RecentlyAdded/>*/}
            {/*<FAQs/>*/}
            <AppDownload/>
            <Footer isDarkThemeActive={darkThemeActive} />
            <ScrollToTop
                icon="bi bi-caret-up-fill"
                backgroundColor = "#EB743B"
                position={{ bottom: "12%", right: "0%" }}
                hover={{ backgroundColor: "purple", opacity: "0.95" }}
                margin="24px"
            />
        </div>
    );
}

export default App;
