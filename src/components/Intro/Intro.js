import React from "react";
import { Timeline } from 'react-twitter-widgets'
import './Intro.css';
import Carousel from "react-multi-carousel";


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
        data: [],
    };

    componentDidMount() {
        this.setState({ loading: true })
        console.log('app mounted');
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5')
            .then(data => data.json())
            .then(data => this.setState({ data: data.articles, loading: false }, () => {
                console.log(data.articles)
                console.log(data)
            }))
    }

    render() {
        let theme;
        if (this.props.isDarkThemeActive) {
            theme = "dark";
        }
        else {
            theme = "light";
        }

        return (
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 d-flex flex-column justify-content-center">

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
                                    this.state.data ? this.state.data.map((post, indx) => {
                                        return (

                                            <div className="card text-left mt-5" key={indx}>
                                                <img style={{width: '100%', height: '250px', objectFit: 'cover'}}
                                                     src={post.urlToImage} alt="Alt text"/>
                                            </div>

                                        )
                                    }) :  <div className="card text-left mt-5" key="1">
                                        <img style={{width: '100%', height: '250px', objectFit: 'cover'}}
                                             src="assets/img/demo.jpg" alt="Alt text"/>
                                    </div>
                                }
                            </Carousel>
                            <h1 data-aos="fade-up" style={{marginTop: "20px"}}>Open Sourced Music Database</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">
                                Free, online encyclopedia of music information. We are building an open-source database containing all the information you would ever want to know about songs, releases, and artists.
                            </h2>
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
                        <div className="col-lg-4 hero-img posts-top d-none d-md-block col-sm-0 " data-aos="zoom-out"
                             data-aos-delay="200">
                            <Timeline
                                dataSource={{sourceType: "profile", screenName: "musicbrainz"}}
                                options={{theme: theme, width: "400", height: "600"}}
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Intro;