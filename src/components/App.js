import React, { useState } from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from "./ScrollToTop/ScrollToTop";

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
            <Header
                isdarkThemeActive={darkThemeActive}
                switchActiveTheme={switchActiveTheme}
            />
            {/*<Hero isdarkThemeActive={darkThemeActive} />*/}
            {/*<Feature isdarkThemeActive={darkThemeActive} />*/}
            {/*<HowItWorks isdarkThemeActive={darkThemeActive} />*/}
            {/*<Testimonial isdarkThemeActive={darkThemeActive} />*/}
            {/*<GetStarted isdarkThemeActive={darkThemeActive} />*/}

            <Footer isdarkThemeActive={darkThemeActive} />

            <ScrollToTop
                icon="fas fa-arrow-up"
                backgroundColor = "#EB743B"
                position={{ bottom: "10%", right: "0%" }}
                hover={{ backgroundColor: "purple", opacity: "0.95" }}
                margin="24px"
            />
        </div>
    );
}

export default App;
