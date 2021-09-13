import React, { Component } from 'react';

class Sponsors extends Component {
    render() {
        return (
            <section id="clients" className="clients">
                <div className="container">

                    <div className="section-title">
                        <h2>Our Clients</h2>
                        <p></p>
                    </div>

                    <div className="clients-slider swiper-container">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="../assets/img/Spotify_logo_with_text.svg"
                                                               className="img-fluid" alt=""/></div>

                        </div>
                        <div className="swiper-pagination"/>
                    </div>

                </div>
            </section>
        )
    }
}
export default Sponsors;