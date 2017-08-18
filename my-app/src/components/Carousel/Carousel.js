import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.handleLeftNav = this.handleLeftNav.bind(this);
        this.handleRightNav = this.handleRightNav.bind(this);
    }

    handleLeftNav(e) {
        const {carouselViewport} = this.refs;
        carouselViewport.scrollLeft -= carouselViewport.scrollWidth/carouselViewport.childElementCount;
    }

    handleRightNav(e) {
        const {carouselViewport} = this.refs;
        carouselViewport.scrollLeft += carouselViewport.scrollWidth/carouselViewport.childElementCount;
    }

    render() {
        return (
            <div className="carousel-container">
                <div className="carousel-nav carousel-left-nav" onClick={this.handleLeftNav}>
                    &#60;
                </div>
                <div className="carousel-viewport" ref='carouselViewport'>
                    {this.props.children}
                </div>
                <div className="carousel-nav carousel-right-nav" onClick={this.handleRightNav}>
                    &#62;
                </div>
            </div>
        );
    }
}

export default Carousel;