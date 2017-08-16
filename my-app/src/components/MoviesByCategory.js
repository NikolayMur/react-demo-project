import React from 'react';
import {connect} from 'react-redux';

import {fetchAssetsByCategory} from '../store/actions/actionCreators';
import Menu from './Menu'
import Asset from './Asset/Asset';

class MoviesByCategory extends React.Component {

    componentDidMount() {
        this.props.downloadMoviesByCategory(this.props.params.category_id);
    }

    render() {
        return <div>
            <Menu/>
            <h1>MoviesByCategory page.</h1>
            <div className="asset-container">
                {this.props.moviesByCategory.map(item => <Asset key={item.id} asset={item}/>)}
            </div>
        </div>
    }
}

export default connect(
    (state, ownProps) => ({
        moviesByCategory: state.moviesByCategoryReducer,
        ownProps
    }),
    (dispatch) => ({
        downloadMoviesByCategory: (id) => dispatch(fetchAssetsByCategory(id))
    })
)(MoviesByCategory);