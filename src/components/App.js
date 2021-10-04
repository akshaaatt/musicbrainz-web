import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import TrustedCompanies from "./TrustedCompanies/TrustedCompanies";
import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";
import "./colors.css";
import AppDownload from "./AppDownload/AppDownload";
import About from "./About/About";
import Facts from "./Facts/Facts";
import Services from "./Services/Services";
import Features from "./Features/Features";

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
            <Projects/>
            <About/>
            <Facts/>
            <Services/>
            <Features/>
            <TrustedCompanies/>
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
