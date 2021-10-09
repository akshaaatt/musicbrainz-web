import React from "react";
import './Facts.css';

function Facts(props) {
    let background;
    if (props.isDarkThemeActive) {
        background = "counts-dark";
    } else {
        background = "counts";
    }

    return(
        <section id="counts" className={background}>
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-music-note-list"/>
                            <div>
                                <span>1.881 M</span>
                                <p>Artists</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext"/>
                            <div>
                                <span>3.003 M</span>
                                <p>Releases</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-headset"/>
                            <div>
                                <span>35.196 M</span>
                                <p>Tracks</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-people"/>
                            <div>
                                <span>2.177 M</span>
                                <p>Editors</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Facts;