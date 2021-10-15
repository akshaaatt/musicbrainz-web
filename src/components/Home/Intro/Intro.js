import React from "react";
import { Timeline } from 'react-twitter-widgets'
import './Intro.css';
import Carousel from "react-multi-carousel";
import axios from "axios";

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
            .get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
            .then(res => {
                this.setState({ posts: res.data.feed.entry });
            });
    }

    render() {
        const chipData = [
            {key: 0, label: 'Artist'},
            {key: 1, label: 'Release'},
            {key: 2, label: 'Recording'},
            {key: 3, label: 'Label'},
            {key: 4, label: 'Work'},
            {key: 5, label: 'Release Group'},
            {key: 6, label: 'Area'},
            {key: 7, label: 'Place'},
            {key: 8, label: 'Annotation'},
            {key: 9, label: 'CD Stud'},
            {key: 10, label: 'Editor'},
            {key: 11, label: 'Tag'},
            {key: 12, label: 'Instrument'},
            {key: 13, label: 'Series'},
            {key: 14, label: 'Event'},
            {key: 15, label: 'Documentation'},
        ];

        let theme, searchBackground, typeCurrent = "Artist";
        if (this.props.isDarkThemeActive) {
            searchBackground = "";
            theme = "dark";
        }
        else {
            searchBackground = "";
            theme = "light";
        }

        function onChipClick(type) {
            const indexPrev = chipData.map(e => e.label).indexOf(typeCurrent);
            const elementPrev = document.getElementById("type"+indexPrev);
            elementPrev.className = "chip";

            typeCurrent = type;

            const indexNew = chipData.map(e => e.label).indexOf(type);
            const elementNew = document.getElementById("type"+indexNew);
            elementNew.className = "chip chip--active";
        }

        return (
            <section id="intro" className="intro d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up" style={{marginTop: "20px"}}>The Music Database</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400" >
                                World's Biggest Open Source Music Database
                            </h2>

                            <div className="row search-margins">
                                <div className="col-8 col-md-10">
                                    <input type="text" name="query"
                                           id="searchInputMain"
                                           className={"form-control special-font"+ searchBackground}
                                           style={{textTransform: "capitalize"}}
                                           onKeyPress={event => {
                                               if (event.key === "Enter") {
                                                   const query = document.getElementById('searchInputMain');
                                                   console.log(query.value);
                                                   if(query.value.trim().length<1){
                                                       return false;
                                                   }
                                                   let searchType;
                                                   if(typeCurrent==='CD Stud'){
                                                       searchType = "cdstub";
                                                   }
                                                   else if(typeCurrent === "Documentation"){
                                                       searchType = "doc";
                                                   }
                                                   else{
                                                       searchType = typeCurrent.replace(' ','_').toLowerCase()
                                                   }
                                                   window.open("https://musicbrainz.org/"+"search?type=" + searchType + "&query=" +query.value, "_newTab");
                                                   return false;
                                               }
                                           }}
                                           placeholder="Search 41,054,421 Entities Data"/>
                                </div>
                                <div className="col-4 col-md-2">
                                    <button type="button" className="btn btn-b-n">
                                        <i className="fab fa-searchengin"/>
                                    </button>
                                    <button type="button" className="btn btn-b-n">
                                        <i className="bi bi-upc-scan"/>
                                    </button>
                                </div>
                            </div>
                            <div className="choiceChips">
                                {
                                    chipData.map((data) => {
                                        if(data.key===0){
                                            return <div id={"type"+data.key} className="chip chip--active" onClick={() => onChipClick(data.label)}>{data.label}</div>
                                        }
                                        return (
                                            <div id={"type"+data.key} className="chip" onClick={() => onChipClick(data.label)}>{data.label}</div>
                                        );
                                    })
                                }
                            </div>
                            <Carousel
                                ssr={false}
                                ref={el => (this.Carousel = el)}
                                partialVisbile={false}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={6000}
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
                        </div>
                        <div className="col-lg-3 hero-img posts-top d-none d-lg-block col-sm-0 " data-aos="zoom-out"
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