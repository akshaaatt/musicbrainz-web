import React from "react";
import './Facts.css';

function Facts() {
    return(
        <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-music-note-list"/>
                            <div>
                                <span>1.9M +</span>
                                <p>Artists</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext"/>
                            <div>
                                <span>3M +</span>
                                <p>Releases</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-headset"/>
                            <div>
                                <span>35M +</span>
                                <p>Tracks</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-people"/>
                            <div>
                                <span>2.17M +</span>
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