import React, { Component } from 'react';

class Main extends Component {
    render() {
        const slider = {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        };
        return (
            <>
                <div className="intro slider swiper-container position-relative" >
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
                                                    <p className="intro-title-top">
                                                        Recent Additions
                                                    </p>
                                                    <h1 className="intro-title mb-4">
                                                        Curled Up Remixes
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide carousel-item-a intro-item bg-image"
                             style={{ backgroundImage: `url(../../assets/img/session.jpg.webp)`  }}>
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

                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"/></a>


                <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-mdb-target="#carouselExampleCaptions"
                            data-mdb-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-mdb-target="#carouselExampleCaptions"
                            data-mdb-slide-to="1"
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-mdb-target="#carouselExampleCaptions"
                            data-mdb-slide-to="2"
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://mdbootstrap.com/img/new/slides/041.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://mdbootstrap.com/img/new/slides/042.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://mdbootstrap.com/img/new/slides/043.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }
}
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}
let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}

export default Main;