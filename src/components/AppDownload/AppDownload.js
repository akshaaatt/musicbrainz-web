import React from "react";
import './AppDownload.css';

function AppDownload() {
    return(
        <section className="section cta-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
                        <h2>Download and Use our App on Mobile</h2>
                    </div>
                    <div className="col-md-5 text-center text-md-end">
                        <p>
                            <a href="https://play.google.com/store/apps/details?id=org.metabrainz.android" target="_blank" className="btn d-inline-flex align-items-center">
                                <i className="fab fa-google-play"/><span>Google play</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppDownload;