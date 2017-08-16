import React from 'react';

import Modal from 'react-modal';
import Iframe from 'react-iframe';

import './TrailerWrapper.css';

class TrailerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrailerIndex: 0
        }

        this.onClickLeftBtn = this.onClickLeftBtn.bind(this);
        this.onClickRightBtn = this.onClickRightBtn.bind(this);
    }

    onClickLeftBtn() {
        const newIndex = this.state.currentTrailerIndex - 1;
        if (newIndex >= 0) {
            this.setState({
                currentTrailerIndex: newIndex
            });
        }
    }

    onClickRightBtn() {
        const newIndex = this.state.currentTrailerIndex + 1;
        if (newIndex < this.props.trailers.length) {
            this.setState({
                currentTrailerIndex: newIndex
            });
        }
    }

    render() {

        const customStyles = {
            content: {
                top: '51%',
                left: '51%',
                right: 'auto',
                bottom: 'auto',
                padding: '0',
                background: 'transparent',
                border: 'none',
                transform: 'translate(-50%, -50%)'
            }
        };

        let trailerUrl;
        if (this.props.trailers && this.props.trailers.length > 1) {
            trailerUrl = 'http://www.youtube.com/embed/' + this.props.trailers[this.state.currentTrailerIndex].key + '?autoplay=1';
        } else {
            trailerUrl = '';
        }

        return ( <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.onCloseModal}
                style={customStyles}
                contentLabel="Modal">
                <Iframe url={trailerUrl}
                        width="450px"
                        height="450px"
                        display="initial"
                        position="relative"
                        allowFullScreen/>
                {(this.state.currentTrailerIndex - 1) >= 0 &&
                <div className="arrow arrow-left" onClick={this.onClickLeftBtn}>&#60;</div>}
                {(this.state.currentTrailerIndex + 1) < this.props.trailers.length &&
                <div className="arrow arrow-right" onClick={this.onClickRightBtn}>&#62;</div>}
                <button className="close-button" onClick={this.props.onCloseModal}>X</button>
            </Modal>
        );
    }
}

export default TrailerWrapper;