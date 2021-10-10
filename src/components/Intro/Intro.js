import React, { Fragment } from "react";
import './Intro.css';
import Carousel from "react-multi-carousel";
import axios from "axios";
import ChoiceChip from "./ChoiceChip";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

class Intro extends React.Component {


    state = {
        additionalTransform: 0,
        posts: [],
    };

    componentDidMount() {
        axios
            .get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
            .then(res => {
                this.setState({ posts: res.data.feed.entry });
            });
    }

    render() {
        let searchBackground;
        if (this.props.isDarkThemeActive) {
            searchBackground = "navbar-ok";
        }
        else {
            searchBackground = "";
        }

        return (
            <section id="intro" className="intro d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up" style={{marginTop: "20px"}}>Open Sourced Music Database</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">
                                Free, online encyclopedia of music information.
                            </h2>

                            <div className="row search-margins">
                                <div className="col-10">
                                    <input type="text" name="query" className={"form-control "+ searchBackground} placeholder="Search MusicBrainz Data"/>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-b-n">
                                        <i className="bi bi-upc-scan"/>
                                    </button>
                                </div>
                            </div>
                            <Fragment>
                                <ChoiceChip name="size">
                                    Laptop
                                </ChoiceChip>
                                {' '}
                                <ChoiceChip name="size">
                                    Phone
                                </ChoiceChip>
                                {' '}
                                <ChoiceChip name="size">
                                    Other
                                </ChoiceChip>
                            </Fragment>

                            <Carousel
                                ssr={false}
                                ref={el => (this.Carousel = el)}
                                partialVisbile={false}
                                itemClass="slider-image-item"
                                responsive={responsive}
                                containerClass="carousel-container-with-scrollbar"
                                additionalTransform={-this.state.additionalTransform}
                                beforeChange={nextSlide => {
                                    if (nextSlide !== 0 && this.state.additionalTransform !== 150) {
                                        this.setState({additionalTransform: 150});
                                    }
                                    if (nextSlide === 0 && this.state.additionalTransform === 150) {
                                        this.setState({additionalTransform: 0});
                                    }
                                }}
                            >
                                {
                                    this.state.posts ? this.state.posts.map((artwork, indx) => {
                                        return (

                                            <div className="card text-left mt-5" key={indx}>
                                                <img style={{width: '100%', height: '250px', objectFit: 'cover'}}
                                                     src={artwork["im:image"][2].label} alt="Alt text"/>
                                            </div>

                                        )
                                    }) :  <div className="card text-left mt-5" key="1">
                                        <img style={{width: '100%', height: '250px', objectFit: 'cover'}}
                                             src="assets/img/demo.jpg" alt="Alt text"/>
                                    </div>
                                }
                            </Carousel>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center text-lg-start">
                                    <a href="#about"
                                       className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Get Started</span>
                                        <i className="bi bi-arrow-right"/>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 intro-img posts-top d-none d-md-block col-sm-0 " data-aos="zoom-out"
                             data-aos-delay="200">
                            <iframe src="https://blog.metabrainz.org" width="400" height="600"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Intro;