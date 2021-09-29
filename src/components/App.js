import React, { useState } from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import TrustedCompanies from "./TrustedCompanies/TrustedCompanies";
import Intro from "./Intro/Intro";

function App() {
    let [darkThemeActive, setDarkThemeActive] = useState(false);

    function switchActiveTheme() {
        if (darkThemeActive) {
            setDarkThemeActive(false);
            document.querySelector("#root").style.backgroundColor = "white";
        } else {
            setDarkThemeActive(true);
            document.querySelector("#root").style.backgroundColor = "#1C2431";
        }
    }

    return (
        <div>
            <Header isdarkThemeActive={darkThemeActive} switchActiveTheme={switchActiveTheme}/>
            <Intro/>
            <TrustedCompanies/>
            <Footer isdarkThemeActive={darkThemeActive} />
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
