import React from 'react';
import {connect} from 'react-redux';

import {downloadPopularVideos} from '../store/actions/actionCreators';
import Asset from './Asset/Asset';
import Carousel from "./Carousel/Carousel";

class Home extends React.Component {

    componentDidMount() {
        this.props.downloadPopularVideos();
    }

    render() {
        return <div>
            <h1>Home page.</h1>
            <Carousel>
                {this.props.popularVideos.map(item => <Asset key={item.id} asset={item}/>)}
            </Carousel>
        </div>
    }
}

export default connect(
    (state, ownProps) => ({
        popularVideos: state.popularVideoReducer,
        ownProps
    }),
    (dispatch) => ({
        downloadPopularVideos: () => dispatch(downloadPopularVideos())
    })
)(Home);