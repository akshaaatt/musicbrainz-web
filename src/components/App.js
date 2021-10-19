import React, {useCallback, useState} from "react";
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
import ThemeContext, { DarkMode } from './Utils/Themes/themes';

function App() {
    const [ dark, setDark ] = useState(DarkMode.getSetting);
    const theme = dark ? "theme-dark" : "theme-light";

    const toggleDarkMode = useCallback(function () {
        setDark(prevState => {
            const newState = !prevState;
            DarkMode.updateSetting(newState);
            return newState;
        });
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <Header isDarkThemeActive={dark} switchActiveTheme={toggleDarkMode}/>
                <Intro isDarkThemeActive={dark}/>
                <About isDarkThemeActive={dark}/>
                <Facts isDarkThemeActive={dark}/>
                <Projects isDarkThemeActive={dark}/>
                <Explore isDarkThemeActive={dark}/>
                <Supporters isDarkThemeActive={dark}/>
                <AppDownload isDarkThemeActive={dark}/>
                <Footer isDarkThemeActive={dark} />
                <ScrollToTop
                    icon="bi bi-caret-up-fill"
                    backgroundColor = "#EB743B"
                    position={{ bottom: "12%", right: "0%" }}
                    hover={{ backgroundColor: "purple", opacity: "0.95" }}
                    margin="24px"
                />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;