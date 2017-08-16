import React from 'react';
import {connect} from 'react-redux';

import './AssetDetails.css';
import {fetchAssetDetails, fetchVideosByAssetId} from '../../store/actions/actionCreators';
import TrailerWrapper from '../TrailerWrapper/TrailerWrapper';

class AssetDetails extends React.Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    componentDidMount() {
        this.props.downloadDetails(this.props.params.id);
        this.props.downloadTrailerss(this.props.params.id);
    }

    render() {
        const fullPosterPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + this.props.assetDetails.poster_path;
        const fullBackdropPath = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2" + this.props.assetDetails.backdrop_path;
        var detailPageContainerStyle = {
            backgroundImage: `url(${fullBackdropPath})`
        };

        var posterStyle = {
            backgroundImage: `url(${fullPosterPath})`
        };

        return (

            <div className="detail-page-container">
                <div className="detail-background-container-0" style={detailPageContainerStyle}>
                </div>
                <div className="detail-background-container-1">
                </div>
                <div className="poster-container">
                    <div>
                        <img src={fullPosterPath}/>
                    </div>
                    <div className="info-area">
                        <div className="close-btn-area">
                            <button onClick={this.props.router.goBack}>X</button>
                        </div>
                        {this.props.trailers.length > 1 && <button onClick={this.openModal}>Play trailer</button>}
                        <p>
                            <a title={this.props.assetDetails.title}
                               alt={this.props.assetDetails.title}>{this.props.assetDetails.title}</a>
                        </p>
                        <p>{this.props.assetDetails.id}</p>
                        <p>{this.props.assetDetails.overview}</p>
                    </div>
                </div>
                <TrailerWrapper trailers={this.props.trailers} modalIsOpen={this.state.modalIsOpen}
                                onCloseModal={this.closeModal}/>
            </div>)
    }
}

export default connect(
    (state, ownProps) => ({
        assetDetails: state.assetDetailReducer,
        trailers: state.trailersReducer,
        ownProps
    }),
    (dispatch) => ({
        downloadDetails: (id) => dispatch(fetchAssetDetails(id)),
        downloadTrailerss: (id) => dispatch(fetchVideosByAssetId(id))
    })
)(AssetDetails);