import React from "react";
import './Intro.css';

function Intro(props) {
    return(
        <div className="intro intro-carousel swiper-container position-relative">

          <div className="swiper-wrapper">

            <div className="swiper-slide carousel-item-a intro-item bg-image"
                 style={{ backgroundImage: `url(../../assets/img/slide-1.jpg)`}}>
              <div className="overlay overlay-a"/>
              <div className="intro-content display-table">
                <div className="table-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="intro-body">
                          <p className="intro-title-top">Recently Added
                          </p>
                          <h1 className="intro-title mb-4 ">
                            <span className="color-b">Curled Up Remixes </span>
                          </h1>
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
export default Intro;