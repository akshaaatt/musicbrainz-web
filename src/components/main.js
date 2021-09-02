import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (

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
)
    }
}
export default Main;