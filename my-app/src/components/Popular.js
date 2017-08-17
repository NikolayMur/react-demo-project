import React from 'react';
import {connect} from 'react-redux';

import {downloadPopularVideos} from '../store/actions/actionCreators';
import Menu from './Menu'
import Asset from './Asset/Asset';

class Popular extends React.Component {

    componentDidMount() {
        this.props.downloadPopularVideos();
    }

    render() {
        return <div>
            <Menu/>
            <h1>Popular page.</h1>
            <div className="asset-container">
                {this.props.popularVideos.map(item => <Asset key={item.id} asset={item}/>)}
            </div>
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
)(Popular);