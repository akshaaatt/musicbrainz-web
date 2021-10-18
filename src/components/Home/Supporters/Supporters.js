import React from "react";
import './Supporters.css';

function Supporters(props) {
    let theme;
    if (props.isDarkThemeActive) {
        theme = "theme-dark";
    } else {
        theme = "theme-light";
    }
    return (
        <section id="supporters" className={"section-with-bg "+ theme}>

            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Supporters</h2>
                </div>

                <div className="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/google.svg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/github.svg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/dotsrc.png" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/osl.png" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/microsoft.png" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/pipedrive.png" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/layer42.png" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="supporter-logo">
                            <img src="assets/img/sponsors/Amazon_logo.svg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Supporters;