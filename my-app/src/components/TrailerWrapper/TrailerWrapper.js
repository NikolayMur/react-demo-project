import React from 'react';

import Modal from 'react-modal';
import YouTube from 'react-youtube';

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

        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };
        let trailerKey;
        if (this.props.trailers && this.props.trailers.length > 1) {
            trailerKey = this.props.trailers[this.state.currentTrailerIndex].key;
        } else {
            trailerKey = '';
        }

        return ( <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.onCloseModal}
                style={customStyles}
                contentLabel="Modal">
                <YouTube
                    videoId={trailerKey}
                    opts={opts}
                    onReady={this._onReady}
                />
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