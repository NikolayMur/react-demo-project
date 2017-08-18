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
        carouselViewport.scrollLeft -= carouselViewport.scrollWidth / carouselViewport.childElementCount;
        this.checkNavVisibility();
    }

    handleRightNav(e) {
        const {carouselViewport} = this.refs;
        carouselViewport.scrollLeft += carouselViewport.scrollWidth / carouselViewport.childElementCount;
        this.checkNavVisibility();
    }

    checkNavVisibility() {
        const {carouselViewport, leftNav, rightNav} = this.refs;
        if (carouselViewport.scrollLeft === 0) {
            leftNav.classList.remove('carousel-nav-hover');
        } else {
            leftNav.classList.add('carousel-nav-hover');
        }

        if (carouselViewport.scrollLeft + carouselViewport.clientWidth === carouselViewport.scrollWidth) {
            rightNav.classList.remove('carousel-nav-hover');
        } else {
            rightNav.classList.add('carousel-nav-hover');
        }
    }

    render() {
        return (
            <div className="carousel-container">
                <div className="carousel-nav carousel-left-nav" ref='leftNav' onClick={this.handleLeftNav}>
                    &#60;
                </div>
                <div className="carousel-viewport" ref='carouselViewport'>
                    {this.props.children}
                </div>
                <div className="carousel-nav carousel-right-nav carousel-nav-hover" ref='rightNav'
                     onClick={this.handleRightNav}>
                    &#62;
                </div>
            </div>
        );
    }
}

export default Carousel;