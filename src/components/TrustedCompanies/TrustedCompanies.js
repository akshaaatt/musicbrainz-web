import React from "react";
import './style.css';

function TrustedCompanies() {

    return (
        <section id="clients" className="clients">
            <div className="container">

                <div className="section-title">
                    <h2>Our Clients</h2>
                    <p></p>
                </div>

                <div className="clients-slider swiper-container">
                    <div className="swiper-wrapper align-items-center">

                        <div className="swiper-slide"><img src="assets/img/trusted-partners/Google.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"/>
                </div>

            </div>
        </section>
    )
}

export default TrustedCompanies;