import React, {useState} from "react";
import "./Projects.css";
import "../App.css";
import {Carousel} from "react-bootstrap";

function Projects(props) {
    let headerBg;
    if (props.isDarkThemeActive) {
        headerBg = "navbar navbar-default navbar-trans navbar-expand-lg fixed-top navbar-ok";
    }
    else {
        headerBg = "navbar navbar-default navbar-trans navbar-expand-lg fixed-top";
    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/img/demo.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/img/demo.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/img/demo.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Projects;