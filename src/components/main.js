import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="intro intro-carousel swiper-container position-relative">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide carousel-item-a intro-item bg-image"
                             style={{ backgroundImage: `url(../../assets/img/slide-1.jpg)`  }}>
                            <div className="overlay overlay-a"/>
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="intro-body">
                                                    <p className="intro-title-top">Recently Added

                                                    </p>
                                                    <h1 className="intro-title mb-4">
                                                        Curled Up Remixes
                                                    </h1>
                                                    <p className="intro-subtitle intro-price">
                                                        <a href="#"><span className="price-a">Checkout</span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide carousel-item-a intro-item bg-image"
                             style={{ backgroundImage: `url(../../assets/img/slide-2.jpg)`  }}>
                            <div className="overlay overlay-a"/>
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="intro-body">
                                                    <h1 className="intro-title mb-4">
                                                        Extended Savasana
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide carousel-item-a intro-item bg-image"
                             style={{ backgroundImage: `url(../../assets/img/slide-3.jpg)`  }}>
                            <div className="overlay overlay-a"/>
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="intro-body">
                                                    <p className="intro-title-top">Recently Added

                                                    </p>
                                                    <h1 className="intro-title mb-4">
                                                        Apu
                                                    </h1>
                                                    <p className="intro-subtitle intro-price">
                                                        <a href="#"><span className="price-a">Checkout</span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"/>
                </div>

                <section className="section-testimonials section-t8 nav-arrow-a">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Delve into our services</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="testimonial-carousel" className="swiper-container">
                            <div className="swiper-wrapper">

                                <div className="carousel-item-a swiper-slide">
                                    <div className="testimonials-box">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonial-img">
                                                    <img src="../../assets/img/ListenBrainz_logo.svg" alt=""
                                                         className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="testimonials-content">
                                                    <p className="testimonial-text">
                                                        ListenBrainz keeps tracks of what music you listen to and provides you with insights into your listening habits. We're completely open-source and publish our data as open data.

                                                        You can use ListenBrainz to track your music listening habits and share your taste with others using our visualizations. We also have an API if you want to do more with our data.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="testimonial-carousel-pagination carousel-pagination"/>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}
export default Main;