import React, { Component } from 'react';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import RecentAdditions from "../components/RecentAdditions";

class home extends Component {
    render() {
        return (
        <>
		<Header />
		<Main/>
            <RecentAdditions/>

            <section id="clients" className="clients">
                <div className="container">

                    <div className="section-title">
                        <h2>Our Clients</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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
        <Footer/>
        </>
)
    }
}
export default home;