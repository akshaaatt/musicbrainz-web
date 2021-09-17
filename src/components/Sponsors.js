import React, { Component } from 'react';

class Sponsors extends Component {
    render() {
        return (
            <section id="clients" className="clients">
                <div className="container">

                    <div className="section-title">
                        <h2>Our Clients</h2>
                        <p>MusicBrainz wishes to offer a huge thank you to all of our sponsors and partners for their support in helping MusicBrainz operate.

                            Some of the following organizations and individuals have provided funding, others have supported us by providing access to tools and technologies that have helped us grow. In either case they played a significant role in the success and growth of MusicBrainz.

                            We would not exist without you — Thank You!</p>
                    </div>

                    <div className="clients-slider swiper-container">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src="assets/img/Spotify_logo_with_text.svg" className="img-fluid" alt=""/></div>

                        </div>
                        <div className="swiper-pagination"/>
                    </div>

                </div>
            </section>
        )
    }
}
export default Sponsors;