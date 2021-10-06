import React from "react";
import Carousel from "react-multi-carousel";
import "./Blogs.css";

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

class Blogs extends React.Component {
    state = {
        additionalTransform: 0,
        data: [],
    };

    componentDidMount() {
        this.setState({ loading: true })
        console.log('app mounted');
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5')
            .then(data => data.json())
            .then(data => this.setState({ data: data.articles, loading: false }, () => console.log(data.articles)))
    }

    render() {
        const CustomSlider = ({ carouselState }) => {
            let value = 0;
            let carouselItemWidth = 0;
            if (this.Carousel) {
                carouselItemWidth = this.Carousel.state.itemWidth;
                const maxTranslateX = Math.round(
                    // so that we don't over-slide
                    carouselItemWidth *
                    (this.Carousel.state.totalItems -
                        this.Carousel.state.slidesToShow) +
                    150
                );
                value = maxTranslateX / 100; // calculate the unit of transform for the slider
            }
            const { transform } = carouselState;
            return (
                <div className="custom-slider">
                    <input
                        type="range"
                        value={Math.round(Math.abs(transform) / value)}
                        defaultValue={0}
                        max={
                            (carouselItemWidth *
                                (carouselState.totalItems - carouselState.slidesToShow) +
                                (this.state.additionalTransform === 150 ? 0 : 150)) /
                            value
                        }
                        onChange={e => {
                            if (this.Carousel.isAnimationAllowed) {
                                this.Carousel.isAnimationAllowed = false;
                            }
                            const nextTransform = e.target.value * value;
                            const nextSlide = Math.round(nextTransform / carouselItemWidth);
                            if (
                                e.target.value == 0 &&
                                this.state.additionalTransform === 150
                            ) {
                                this.Carousel.isAnimationAllowed = true;
                                this.setState({ additionalTransform: 0 });
                            }
                            this.Carousel.setState({
                                transform: -nextTransform, // padding 20px and 5 items.
                                currentSlide: nextSlide
                            });
                        }}
                        className="custom-slider__input"
                    />
                </div>
            );
        };
        return (
            <section id="features" className="features section-bg">
                <div className="section-title">
                    <h2 data-aos="fade-in">Blogs from MetaBrainz</h2>
                </div>
                <Carousel
                    ssr={false}
                    ref={el => (this.Carousel = el)}
                    partialVisbile={false}
                    customButtonGroup={<CustomSlider />}
                    itemClass="slider-image-item"
                    responsive={responsive}
                    containerClass="carousel-container-with-scrollbar"
                    additionalTransform={-this.state.additionalTransform}
                    beforeChange={nextSlide => {
                        if (nextSlide !== 0 && this.state.additionalTransform !== 150) {
                            this.setState({ additionalTransform: 150 });
                        }
                        if (nextSlide === 0 && this.state.additionalTransform === 150) {
                            this.setState({ additionalTransform: 0 });
                        }
                    }}
                >
                    {this.state.data.map((post, indx) => {
                        return (

                            <div className="card text-left mt-5" key={indx}>
                                <img style={{width: '100%', height:'250px', objectFit:'cover'}} src={post.urlToImage} alt="Alt text"/>

                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <a href={post.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                </div>
                            </div>

                        )
                    })}
                </Carousel>
            </section>
        );
    }
}

export default Blogs;
