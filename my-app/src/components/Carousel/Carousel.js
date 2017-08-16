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
        carouselViewport.scrollLeft -= 200;
    }

    handleRightNav(e) {
        const {carouselViewport} = this.refs;
        carouselViewport.scrollLeft += 200;
    }

    render() {
        console.log(this.props.child);
        return (
            <div className="carousel-container">
                <button className="carousel-nav carousel-left-nav" onClick={this.handleLeftNav}>
                    &#60;
                </button>
                <div className="carousel-viewport" ref='carouselViewport'>
                    {this.props.children}
                </div>
                <button className="carousel-nav carousel-right-nav" onClick={this.handleRightNav}>
                    &#62;
                </button>
            </div>
        );
    }
}

export default Carousel;