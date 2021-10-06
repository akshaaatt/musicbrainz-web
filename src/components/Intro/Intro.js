import React from "react";
import { Timeline } from 'react-twitter-widgets'
import './Intro.css';
import Blogs from "../Blogs/Blogs";

function Intro(props) {
    let theme;
    if (props.isDarkThemeActive) {
        theme = "dark";
    }
    else {
        theme = "light";
    }

    return(
        <section id="hero" className="hero d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">Open Sourced Music Database</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">Edit, Explore and Develop</h2>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <div className="text-center text-lg-start">
                                <a href="#"
                                   className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Get Started</span>
                                    <i className="bi bi-arrow-right"/>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "musicbrainz" }}
                            options={{ theme: theme, width: "400", height: "600" }}
                        />
                    </div>
                </div>
            </div>

        </section>
)
}
export default Intro;